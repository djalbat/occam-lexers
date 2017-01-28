'use strict';

var util = require('../util');

class Tokens {
  static pass(tokensOrContents, line, Token) {
    var offset = 0,
        tokensOrContentsLength = tokensOrContents.length;

    for (var index = 0; index < tokensOrContentsLength; index++) {
      var offsetIndex = index + offset,
          tokenOrContent = tokensOrContents[offsetIndex];

      if (typeof tokenOrContent === 'string') {
        var content = tokenOrContent,  ///
            tokensOrRemainingContent = tokensOrRemainingContentFromWithinContentAndLine(content, line, Token),
            tokensOrRemainingContentLength = tokensOrRemainingContent.length,
            start = offsetIndex;

        util.spliceArray(tokensOrContents, start, 1, tokensOrRemainingContent);

        offset += tokensOrRemainingContentLength - 1;
      }
    }
  }
}

module.exports = Tokens;

function tokensOrRemainingContentFromWithinContentAndLine(content, line, Token) {
  var tokensOrRemainingContent = [],
      remainingContent,
      tokenPositionWithinContent = Token.positionWithinContent(content);
  
  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromWithinContentAndLine(content, line),
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
