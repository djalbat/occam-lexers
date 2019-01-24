'use strict';

const tokens = require('../tokens'),
      MiddleOfMultiLineCommentToken = require('../token/nonSignificant/comment/multiLine/middleOf'),
      MiddleOfSingleLineCommentToken = require('../token/nonSignificant/comment/singleLine/middleOf');

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
        commentTokensOrRemainingContents.push(token);
      } else if (middleOfCommentTokenSingleLineCommentToken) {
        commentTokensOrRemainingContents.push(token);
      } else {
        commentTokensOrRemainingContents.push(middleOfCommentToken);
      }
    } else {
      commentTokensOrRemainingContents.push(token);
    }
  }
}
