'use strict';

const tokens = require('../tokens'),
      MiddleOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/middleOf'),
      MiddleOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/middleOf'),
      HyperlinkInMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/hyperlinkIn'),
      HyperlinkInSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/hyperlinkIn');

const { tokeniseByCallback } = tokens;

function reTokenise(tokensOrContents) {
  tokeniseByCallback(tokensOrContents, function(tokenOrContent) {
    const commentTokensOrRemainingContents = [];

    reTokeniseMiddleOfCommentTokens(commentTokensOrRemainingContents, tokenOrContent);

    const tokensOrRemainingContents = commentTokensOrRemainingContents; ///

    return tokensOrRemainingContents;
  });
}

module.exports = {
  reTokenise
};

function reTokeniseMiddleOfCommentTokens(commentTokensOrRemainingContents, tokenOrContent) {
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
          tokeniseHyperlinkInMultiLineCommentToken(commentTokensOrRemainingContents, content);
        } else {
          commentTokensOrRemainingContents.push(token);
        }
      } else if (middleOfCommentTokenSingleLineCommentToken) {
        const content = middleOfCommentToken.getContent(),  ///
              hyperlinkInSingleLineCommentTokenPosition = HyperlinkInSingleLineCommentToken.positionWithinContent(content);

        if (hyperlinkInSingleLineCommentTokenPosition > -1) {
          tokeniseHyperlinkInSingleLineCommentToken(commentTokensOrRemainingContents, content);
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

function tokeniseHyperlinkInMultiLineCommentToken(commentTokensOrRemainingContents, content) {
  tokeniseHyperlinkInCommentToken(HyperlinkInMultiLineCommentToken, MiddleOfMultiLineCommentToken, commentTokensOrRemainingContents, content);
}

function tokeniseHyperlinkInSingleLineCommentToken(commentTokensOrRemainingContents, content) {
  tokeniseHyperlinkInCommentToken(HyperlinkInSingleLineCommentToken, MiddleOfSingleLineCommentToken, commentTokensOrRemainingContents, content);
}

function tokeniseHyperlinkInCommentToken(HyperlinkInCommentToken, MiddleOfCommentToken, commentTokensOrRemainingContents, content) {
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

    reTokeniseMiddleOfCommentTokens(commentTokensOrRemainingContents, tokenOrContent);
  }
}
