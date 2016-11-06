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

      var startOfCommentTokenPosition = StartOfCommentToken.position(content),
          endOfCommentTokenPosition = EndOfCommentToken.position(content);

      if (!inComment) {
        if (startOfCommentTokenPosition === 0) {
          context.setInComment(true);

          commentToken = StartOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);

          continue;
        }
      } else {
        var previousCommentToken = tokensOrContents.pop();

        if (false) {

        } else if (endOfCommentTokenPosition === 0) {
          context.setInComment(false);

          commentToken = EndOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();
        } else {
          var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

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

module.exports = CommentTokens;
