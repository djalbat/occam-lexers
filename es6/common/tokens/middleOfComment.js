'use strict';

const tokens = require('../tokens'),
      MiddleOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/middleOf'),
      MiddleOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/middleOf'),
      HyperlinkInMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/hyperlinkIn'),
      HyperlinkInSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/hyperlinkIn');

const { processByCallback } = tokens;

function postProcess(tokensOrContents) {
  processByCallback(tokensOrContents, function(tokenOrContent) {
    const commentTokensOrRemainingContents = [];

    postProcessMiddleOfCommentTokens(commentTokensOrRemainingContents, tokenOrContent);

    const tokensOrRemainingContents = commentTokensOrRemainingContents; ///

    return tokensOrRemainingContents;
  });
}

module.exports = {
  postProcess: postProcess
};

function postProcessMiddleOfCommentTokens(commentTokensOrRemainingContents, tokenOrContent) {
  const tokenOrContentString = (typeof tokenOrContent === 'string'),
        tokenOrContentContent = tokenOrContentString; ///

  if (tokenOrContentContent) {
    const remainingContent = tokenOrContent;  ///

    commentTokensOrRemainingContents.push(remainingContent);
  } else {
    const token = tokenOrContent,  ///
          tokenMiddleOfCommentToken = token.isMiddleOfCommentToken();

    if (tokenMiddleOfCommentToken) {
      const middleOfCommentToken = token, ///
            middleOfCommentTokenMultiLineCommentToken = middleOfCommentToken.isMultiLineCommentToken(),
            middleOfCommentTokenSingleLineCommentToken = !middleOfCommentTokenMultiLineCommentToken; ///

      if (false) {

      } else if (middleOfCommentTokenMultiLineCommentToken) {
        const content = middleOfCommentToken.getContent(),  ///
              hyperlinkInMultiLineCommentTokenPosition = HyperlinkInMultiLineCommentToken.positionWithinContent(content);

        if (hyperlinkInMultiLineCommentTokenPosition > -1) {
          processHyperlinkInMultiLineCommentToken(commentTokensOrRemainingContents, content);
        } else {
          commentTokensOrRemainingContents.push(token);
        }
      } else if (middleOfCommentTokenSingleLineCommentToken) {
        const content = middleOfCommentToken.getContent(),  ///
              hyperlinkInSingleLineCommentTokenPosition = HyperlinkInSingleLineCommentToken.positionWithinContent(content);

        if (hyperlinkInSingleLineCommentTokenPosition > -1) {
          processHyperlinkInSingleLineCommentToken(commentTokensOrRemainingContents, content);
        } else {
          commentTokensOrRemainingContents.push(token);
        }
      } else {
        commentTokensOrRemainingContents.push(middleOfCommentToken);
      }
    } else {
      commentTokensOrRemainingContents.push(token);
    }
  }
}

function processHyperlinkInMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  processHyperlinkInCommentToken(HyperlinkInMultiLineCommentToken, MiddleOfMultiLineCommentToken, commentTokensOrRemainingContents, content);
}

function processHyperlinkInSingleLineCommentToken(commentTokensOrRemainingContents, content) {
  processHyperlinkInCommentToken(HyperlinkInSingleLineCommentToken, MiddleOfSingleLineCommentToken, commentTokensOrRemainingContents, content);
}

function processHyperlinkInCommentToken(HyperlinkInCommentToken, MiddleOfCommentToken, commentTokensOrRemainingContents, content) {
  const hyperlinkInCommentToken = HyperlinkInCommentToken.fromWithinContent(content),
        position = HyperlinkInCommentToken.positionWithinContent(content),  ///
        contentLength = hyperlinkInCommentToken.getContentLength(),
        left = position,
        right = position + contentLength,
        leftContent = content.substring(0, left),
        rightContent = content.substring(right),
        leftContentLength = leftContent.length,
        rightContentLength = rightContent.length;

  if (leftContentLength > 0) {
    const content = leftContent,  ///
          middleOfCommentToken = MiddleOfCommentToken.fromContent(content);

    commentTokensOrRemainingContents.push(middleOfCommentToken);
  }

  commentTokensOrRemainingContents.push(hyperlinkInCommentToken);

  if (rightContentLength > 0) {
    const content = rightContent,  ///
          middleOfCommentToken = MiddleOfCommentToken.fromContent(content),
          tokenOrContent = middleOfCommentToken;  ///

    postProcessMiddleOfCommentTokens(commentTokensOrRemainingContents, tokenOrContent);
  }
}
