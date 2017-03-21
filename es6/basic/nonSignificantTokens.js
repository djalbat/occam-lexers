'use strict';

const util = require('../util'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class NonSignificantTokens {
  static pass(content, context, line) {
    const nonSignificantTokenOrSignificantContents = [];
    
    while (content !== '') {
      const contentLength = content.length;

      const whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        const whitespaceToken = WhitespaceToken.fromContentAndLine(content, line),
              whitespaceTokenLength = whitespaceToken.getLength();

        content = content.substring(whitespaceTokenLength);

        nonSignificantTokenOrSignificantContents.push(whitespaceToken);

        continue;
      } else {
        const significantContentLength = util.minimumBarMinusOne(whitespaceTokenPosition, contentLength),
              significantContent = content.substring(0, significantContentLength);

        content = content.substring(significantContentLength);

        nonSignificantTokenOrSignificantContents.push(significantContent);

        continue;
      }
    }
    
    return nonSignificantTokenOrSignificantContents;
  }
}

module.exports = NonSignificantTokens;
