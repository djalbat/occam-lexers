"use strict";

export function isTokenInCommentPreservingToken(token) {
  let tokenCommentPreservingToken = false;

  const tokenCommentToken = token.isCommentToken();

  if (tokenCommentToken) {
    const commentToken = token, ///
          commentTokenInCommentPreserving = commentToken.isInCommentPreserving();

    tokenCommentPreservingToken = commentTokenInCommentPreserving;  ///
  }

  return tokenCommentPreservingToken;
}
