'use strict';

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment'),
    SignificantContentToken = require('../common/token/significantContent'),
    WhitespaceToken = require('../common/token/whitespace');

class NonSignificantTokens {
  static pass(content, context, line) {
    var tokens = [],
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

          tokens.push(commentToken);

          continue;
        }
      } else {
        var previousCommentToken = tokens.pop(),
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

        tokens.push(commentToken);

        continue;
      }

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContent(content, line),
            whitespaceTokenLength = whitespaceToken.getLength();

        content = content.substring(whitespaceTokenLength);

        tokens.push(whitespaceToken);

        continue;
      }
      
      var significantContentTokenLength = util.minBarMinusOne(startOfCommentTokenPosition, whitespaceTokenPosition, contentLength);
      
      remainingContent = content.substring(significantContentTokenLength);
      
      content = content.substring(0, significantContentTokenLength);
      
      var significantContentToken = SignificantContentToken.fromContent(content);
      
      content = remainingContent;

      tokens.push(significantContentToken);

      continue;
    }
    
    return tokens;
  }
}

module.exports = NonSignificantTokens;
