'use strict';

const necessary = require('necessary');

const { array } = necessary,
      { splice } = array;

class Tokens {
  static pass(tokensOrContents, line, Token) {
    let offset = 0;
    
    const tokensOrContentsLength = tokensOrContents.length;

    for (let index = 0; index < tokensOrContentsLength; index++) {
      const offsetIndex = index + offset,
            tokenOrContent = tokensOrContents[offsetIndex];

      if (typeof tokenOrContent === 'string') {
        const content = tokenOrContent,  ///
              tokensOrRemainingContent = tokensOrRemainingContentFromWithinContentAndLine(content, line, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = offsetIndex;

        splice(tokensOrContents, start, 1, tokensOrRemainingContent);

        offset += tokensOrRemainingContentLength - 1;
      }
    }
  }
}

module.exports = Tokens;

function tokensOrRemainingContentFromWithinContentAndLine(content, line, Token) {
  let remainingContent,
      tokensOrRemainingContent = [],       
      tokenPositionWithinContent = Token.positionWithinContent(content);
  
  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    const token = Token.fromWithinContentAndLine(content, line),
          tokenLength = token.getLength(),
          tokenOffset = tokenPositionWithinContent + tokenLength;
    
    tokensOrRemainingContent.push(token);
    
    content = content.substring(tokenOffset);

    tokenPositionWithinContent = Token.positionWithinContent(content);
  }
  
  if (content !== '') {
    remainingContent = content;

    tokensOrRemainingContent.push(remainingContent);
  }

  return tokensOrRemainingContent;
}
