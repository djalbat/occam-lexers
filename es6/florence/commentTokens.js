'use strict';

const util = require('../util'),
      EndOfCommentToken = require('./token/endOfComment'),
      StartOfCommentToken = require('./token/startOfComment'),
      MiddleOfCommentToken = require('./token/middleOfComment');

class CommentTokens {
  static pass(tokensOrContents, line, context) {
    let content = tokensOrContents.pop(),
        commentToken,
        commentTokenLength,
        previousLineInComment = context.isPreviousLineInComment(),
        inComment = (previousLineInComment === true);

    while (content !== '') {
      let contentLength = content.length;

      if (inComment) {
        const endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

        if (endOfCommentTokenPositionWithinContent === 0) {
          inComment = false;

          commentToken = EndOfCommentToken.fromWithinContentAndLine(content, line);

          commentTokenLength = commentToken.getLength();
        } else {
          const middleOfCommentTokenLength = util.minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

          commentToken = MiddleOfCommentToken.fromContentAndLine(content, line, middleOfCommentTokenLength);

          commentTokenLength = middleOfCommentTokenLength;
        }

        const previousCommentToken = tokensOrContents.pop();

        commentToken = (previousCommentToken === undefined) ?
                          commentToken :
                            previousCommentToken.merge(commentToken);

        tokensOrContents.push(commentToken);

        content = content.substring(commentTokenLength);
      } else {
        const startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

        if (startOfCommentTokenPositionWithinContent === 0) {
          inComment = true;

          commentToken = StartOfCommentToken.fromWithinContentAndLine(content, line);

          commentTokenLength = commentToken.getLength();

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);
        } else {
          contentLength = util.minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

          const remainingContent = content.substring(contentLength);

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
