'use strict';

const EndOfCommentToken = require('../token/nonSignificant/comment/endOf'),
      StartOfCommentToken = require('../token/nonSignificant/comment/startOf'),
      MiddleOfCommentToken = require('../token/nonSignificant/comment/middleOf');

function process(tokensOrContents, inComment) {
    let content = tokensOrContents.pop(),
        commentToken,
        commentTokenContentLength;

    while (content !== '') {
      let contentLength = content.length;

      if (inComment) {
        const endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

        if (endOfCommentTokenPositionWithinContent === 0) {
          inComment = false;

          commentToken = EndOfCommentToken.fromWithinContent(content);

          commentTokenContentLength = commentToken.getContentLength();
        } else {
          const middleOfCommentTokenContentLength = minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

          commentToken = MiddleOfCommentToken.fromContent(content, middleOfCommentTokenContentLength);

          commentTokenContentLength = middleOfCommentTokenContentLength;
        }

        const previousCommentToken = tokensOrContents.pop();

        commentToken = (previousCommentToken === undefined) ?
                          commentToken :
                            previousCommentToken.merge(commentToken);

        tokensOrContents.push(commentToken);

        content = content.substring(commentTokenContentLength);
      } else {
        const startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

        if (startOfCommentTokenPositionWithinContent === 0) {
          inComment = true;

          commentToken = StartOfCommentToken.fromWithinContent(content);

          commentTokenContentLength = commentToken.getContentLength();

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenContentLength);
        } else {
          contentLength = minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

          const remainingContent = content.substring(contentLength);

          content = content.substring(0, contentLength);

          tokensOrContents.push(content);

          content = remainingContent;
        }
      }
    }

    return inComment;
  }

module.exports = {
  process: process
};

function minimumBarMinusOne() {
  const values = Array.prototype.slice.call(arguments),
        minimumBarMinusOne = values.reduce(function(minimumBarMinusOne, value) {
          if (value > -1) {
            minimumBarMinusOne = (minimumBarMinusOne !== null) ?
                                   Math.min(minimumBarMinusOne, value) :
                                     value;
          }
  
          return minimumBarMinusOne;
        }, null);

  return minimumBarMinusOne;
}
