'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { splice } = arrayUtilities;

function passGivenToken(tokensOrContents, Token) {
  passGivenCallback(tokensOrContents, function(content) { return tokensOrRemainingContentFromWithinContent(content, Token); });
}

function passGivenCallback(tokensOrContents, callback) {
  let index = 0,
      tokensOrContentsLength = tokensOrContents.length;

  while (index < tokensOrContentsLength) {
    const tokenOrContent = tokensOrContents[index],
        tokenOrContentContent = (typeof tokenOrContent === 'string');

    if (tokenOrContentContent) {
      const content = tokenOrContent,  ///
            tokensOrRemainingContent = callback(content),
            tokensOrRemainingContentLength = tokensOrRemainingContent.length,
            start = index,  ///
            deleteCount = 1;

      splice(tokensOrContents, start, deleteCount, tokensOrRemainingContent);

      tokensOrContentsLength -= 1;

      tokensOrContentsLength += tokensOrRemainingContentLength;

      index += tokensOrRemainingContentLength;
    } else {
      index += 1;
    }
  }
}

module.exports = {
  passGivenToken: passGivenToken,
  passGivenCallback: passGivenCallback
};

function tokensOrRemainingContentFromWithinContent(content, Token) {
  let remainingContent,
      tokensOrRemainingContent = [],       
      tokenPositionWithinContent = Token.positionWithinContent(content);
  
  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    const token = Token.fromWithinContent(content),
          tokenContentLength = token.getContentLength(),
          tokenOffset = tokenPositionWithinContent + tokenContentLength;
    
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
