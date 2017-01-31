'use strict';

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

class CommentTokens {
  static pass(tokensOrContents, line, context) {
    var content = tokensOrContents.pop(),
        commentToken,
        commentTokenLength,
        previousLineInComment = context.isPreviousLineInComment(),
        inComment = (previousLineInComment === true);

    while (content !== '') {
      var contentLength = content.length;

      if (inComment) {
        var endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

        if (endOfCommentTokenPositionWithinContent === 0) {
          inComment = false;

          commentToken = EndOfCommentToken.fromWithinContentAndLine(content, line);

          commentTokenLength = commentToken.getLength();
        } else {
          var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

          commentToken = MiddleOfCommentToken.fromContentAndLine(content, line, middleOfCommentTokenLength);

          commentTokenLength = middleOfCommentTokenLength;
        }

        var previousCommentToken = tokensOrContents.pop();

        commentToken = (previousCommentToken === undefined) ?
                          commentToken :
                            previousCommentToken.merge(commentToken);

        tokensOrContents.push(commentToken);

        content = content.substring(commentTokenLength);
      } else {
        var startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

        if (startOfCommentTokenPositionWithinContent === 0) {
          inComment = true;

          commentToken = StartOfCommentToken.fromWithinContentAndLine(content, line);

          commentTokenLength = commentToken.getLength();

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);
        } else {
          contentLength = util.minBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

          var remainingContent = content.substring(contentLength);

          content = content.substring(0, contentLength);

          tokensOrContents.push(content);

          content = remainingContent;
        }
      }
    }

    previousLineInComment = inComment;  ///

    context.setPreviousLineInComment(previousLineInComment);

    return inComment;
  }
}

module.exports = CommentTokens;
