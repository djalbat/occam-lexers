'use strict';

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

class NonSignificantTokens {
  static pass(tokensOrContents, line, context) {
    var firstTokenOrRemainingContent = tokensOrContents.pop(),
        content = firstTokenOrRemainingContent,  ///
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

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);

          continue;
        }
      } else {
        var previousCommentToken = tokensOrContents.pop();

        if (false) {

        } else if (startOfCommentTokenPosition === 0) {
          context.increaseCommentDepth();

          commentToken = StartOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();
        } else if (endOfCommentTokenPosition === 0) {
          context.decreaseCommentDepth();

          commentToken = EndOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();
        } else {
          var middleOfCommentTokenLength = util.minBarMinusOne(startOfCommentTokenPosition, endOfCommentTokenPosition, contentLength);

          commentToken = MiddleOfCommentToken.fromContent(content, line, middleOfCommentTokenLength);

          commentTokenLength = middleOfCommentTokenLength;
        }

        commentToken = (previousCommentToken === undefined) ?
                         commentToken :
                           previousCommentToken.merge(commentToken);

        tokensOrContents.push(commentToken);

        content = content.substring(commentTokenLength);

        continue;
      }

      contentLength = util.minBarMinusOne(startOfCommentTokenPosition, contentLength);

      var remainingContent = content.substring(contentLength);

      content = content.substring(0, contentLength);

      tokensOrContents.push(content);

      content = remainingContent;

      continue;
    }
  }
}

module.exports = NonSignificantTokens;
