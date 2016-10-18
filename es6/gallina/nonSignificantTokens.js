'use strict';

var util = require('../util'),
    WhitespaceToken = require('../common/token/whitespace'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

class NonSignificantTokens {
  static pass(content, context, line) {
    var nonSignificantTokensOrSignificantContent = [],
        remainingContent,
        commentToken,
        commentTokenLength;
    
    while (content !== '') {
      var contentLength = content.length,
          commentDepth = context.getCommentDepth();

      var startOfCommentTokenPosition = StartOfCommentToken.position(content),
          endOfCommentTokenPosition = EndOfCommentToken.position(content);

      if (commentDepth === 0) {
        if (startOfCommentTokenPosition === 0) {
          context.increaseCommentDepth();

          commentToken = StartOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          remainingContent = content.substring(commentTokenLength);

          content = remainingContent;

          nonSignificantTokensOrSignificantContent.push(commentToken);

          continue;
        }
      } else {
        var previousCommentToken = nonSignificantTokensOrSignificantContent.pop(),
            middleOfCommentTokenLength = util.minBarMinusOne(startOfCommentTokenPosition, endOfCommentTokenPosition, contentLength);

        if (false) {

        } else if (startOfCommentTokenPosition === 0) {
          context.increaseCommentDepth();

          commentToken = StartOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          remainingContent = content.substring(commentTokenLength);
        } else if (endOfCommentTokenPosition === 0) {
          context.decreaseCommentDepth();

          commentToken = EndOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          remainingContent = content.substring(commentTokenLength);
        } else {
          remainingContent = content.substring(middleOfCommentTokenLength);

          content = content.substring(0, middleOfCommentTokenLength);

          commentToken = MiddleOfCommentToken.fromContent(content, line);
        }

        commentToken = (previousCommentToken === undefined) ?
                         commentToken :
                           previousCommentToken.merge(commentToken);

        content = remainingContent;

        nonSignificantTokensOrSignificantContent.push(commentToken);

        continue;
      }

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContent(content, line),
            whitespaceTokenLength = whitespaceToken.getLength();

        remainingContent = content.substring(whitespaceTokenLength);

        content = remainingContent;

        nonSignificantTokensOrSignificantContent.push(whitespaceToken);

        continue;
      }
      
      var significantContentLength = util.minBarMinusOne(startOfCommentTokenPosition, whitespaceTokenPosition, contentLength),
          significantContent = content.substring(0, significantContentLength);

      remainingContent = content.substring(significantContentLength);

      content = remainingContent;

      nonSignificantTokensOrSignificantContent.push(significantContent);

      continue;
    }
    
    return nonSignificantTokensOrSignificantContent;
  }
}

module.exports = NonSignificantTokens;
