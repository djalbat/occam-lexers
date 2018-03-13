'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { splice } = arrayUtilities;

function processByToken(tokensOrContents, Token) {
  processByCallback(tokensOrContents, function(tokenOrContent) {
    let tokensOrRemainingContents;

    const tokenOrContentContent = (typeof tokenOrContent === 'string');

    if (tokenOrContentContent) {
      const content = tokenOrContent, ///
            tokenOrRemainingContent = tokenOrRemainingContentFromContentAndToken(content, Token);

      tokensOrRemainingContents = tokenOrRemainingContent;  ///
    } else {
      const token = tokenOrContent;  ///

      tokensOrRemainingContents = [token];
    }

    return tokensOrRemainingContents;
  });
}

function processByCallback(tokensOrContents, callback) {
  let index = 0,
      tokensOrContentsLength = tokensOrContents.length;

  while (index < tokensOrContentsLength) {
    const tokenOrContent = tokensOrContents[index],
          tokensOrRemainingContents = callback(tokenOrContent),
          tokensOrRemainingContentsLength = tokensOrRemainingContents.length,
          start = index,  ///
          deleteCount = 1;

    splice(tokensOrContents, start, deleteCount, tokensOrRemainingContents);

    tokensOrContentsLength -= 1;

    tokensOrContentsLength += tokensOrRemainingContentsLength;

    index += tokensOrRemainingContentsLength;
  }
}

module.exports = {
  processByToken: processByToken,
  processByCallback: processByCallback
};

function tokenOrRemainingContentFromContentAndToken(content, Token) {
  let tokenOrRemainingContent = [],
      remainingContent,
      tokenPositionWithinContent = Token.positionWithinContent(content);
  
  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokenOrRemainingContent.push(remainingContent);
    }

    const token = Token.fromWithinContent(content),
          tokenContentLength = token.getContentLength(),
          tokenOffset = tokenPositionWithinContent + tokenContentLength;
    
    tokenOrRemainingContent.push(token);
    
    content = content.substring(tokenOffset);

    tokenPositionWithinContent = Token.positionWithinContent(content);
  }
  
  if (content !== '') {
    remainingContent = content;

    tokenOrRemainingContent.push(remainingContent);
  }

  return tokenOrRemainingContent;
}
