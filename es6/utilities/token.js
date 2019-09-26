'use strict';

function tokenise(content, Token) {
  const tokensOrContents = [],
        { regularExpression } = Token;

  let match = content.match(regularExpression);

  while (match !== null) {
    const { index } = match,
          token = Token.fromMatch(match),
          tokenLength = token.getContentLength(),
          left = index, ///
          right = index + tokenLength,
          leftContent = content.substring(0, left),
          rightContent = content.substring(right);

    if (leftContent !== '') {
      content = leftContent;  ///

      tokensOrContents.push(content);
    }

    tokensOrContents.push(token);

    content = rightContent; ///

    match = content.match(regularExpression);
  }

  if (content !== '') {
    tokensOrContents.push(content);
  }

  return tokensOrContents;
}

module.exports = {
  tokenise
};
