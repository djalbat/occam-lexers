'use strict';

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

class CommentTokens {
  static pass(tokensOrContents, line, context) {
    var content = tokensOrContents.pop(),
        commentToken,
        commentTokenLength;

    while (content !== '') {
      var contentLength = content.length,
          inComment = context.isInComment();

      if (inComment) {
        var endOfCommentTokenPosition = EndOfCommentToken.position(content);

        if (endOfCommentTokenPosition === 0) {
          context.setInComment(false);

          commentToken = EndOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();
        } else {
          var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

          commentToken = MiddleOfCommentToken.fromContent(content, line, middleOfCommentTokenLength);

          commentTokenLength = middleOfCommentTokenLength;
        }

        var previousCommentToken = tokensOrContents.pop();

        commentToken = (previousCommentToken === undefined) ?
                          commentToken :
                            previousCommentToken.merge(commentToken);

        tokensOrContents.push(commentToken);

        content = content.substring(commentTokenLength);
      } else {
        var startOfCommentTokenPosition = StartOfCommentToken.position(content);

        if (startOfCommentTokenPosition === 0) {
          context.setInComment(true);

          commentToken = StartOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);
        } else {
          contentLength = util.minBarMinusOne(startOfCommentTokenPosition, contentLength);

          var remainingContent = content.substring(contentLength);

          content = content.substring(0, contentLength);

          tokensOrContents.push(content);

          content = remainingContent;
        }
      }
    }
  }
}

module.exports = CommentTokens;
