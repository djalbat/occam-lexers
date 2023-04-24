"use strict";

export function tokenAsHTML(token) {
  const type = token.getType(),
        content = token.getContent(),
        className = type, ///
        html = `<span class="${className}">${content}</span>`;

  return html;
}

export function inCommentFromTokenAndInComment(token, inComment) {
  const tokenCommentToken = token.isCommentToken();

  if (tokenCommentToken) {
    const commentToken = token, ///
          commentTokenInCommentPreserving = commentToken.isInCommentPreserving();

    inComment = commentTokenInCommentPreserving;  ///
  }

  return inComment;
}
