'use strict';

function tokenise(content, Token) {
  const tokensOrContents = [];

  let token = Token.match(content);

  while (token !== null) {
    const index = token.getIndex(),
          contentLength = token.getContentLength(),
          left = index, ///
          right = index + contentLength,
          leftContent = content.substring(0, left),
          rightContent = content.substring(right);

    if (leftContent !== '') {
      content = leftContent;  ///

      tokensOrContents.push(content);
    }

    tokensOrContents.push(token);

    content = rightContent; ///

    token = Token.match(content);
  }

  if (content !== '') {
    tokensOrContents.push(content);
  }

  return tokensOrContents;
}

module.exports = {
  tokenise
};
