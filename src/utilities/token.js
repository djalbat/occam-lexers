"use strict";

export function inCommentFromTokenAndInComment(token, inComment) {
  const tokenCommentToken = token.isCommentToken();

  if (tokenCommentToken) {
    const commentToken = token, ///
          commentTokenInCommentPreserving = commentToken.isInCommentPreserving();

    inComment = commentTokenInCommentPreserving;  ///
  }

  return inComment;
}
