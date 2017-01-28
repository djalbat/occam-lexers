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
            tokensOrRemainingContent = tokensOrRemainingContentFromContent(content, line, Token),
            tokensOrRemainingContentLength = tokensOrRemainingContent.length,
            start = offsetIndex;

        util.spliceArray(tokensOrContents, start, 1, tokensOrRemainingContent);

        offset += tokensOrRemainingContentLength - 1;
      }
    }
  }
}

module.exports = Tokens;

function tokensOrRemainingContentFromContent(content, line, Token) {
  var tokensOrRemainingContent = [],
      remainingContent,
      tokenPosition = Token.position(content);
  
  while (tokenPosition !== -1) {
    if (tokenPosition > 0) {
      remainingContent = content.substring(0, tokenPosition);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromContentAndLine(content, line),
        tokenLength = token.getLength(),
        tokenOffset = tokenPosition + tokenLength;
    
    tokensOrRemainingContent.push(token);
    
    content = content.substring(tokenOffset);

    tokenPosition = Token.position(content);
  }
  
  if (content !== '') {
    remainingContent = content;

    tokensOrRemainingContent.push(remainingContent);
  }

  return tokensOrRemainingContent;
}
