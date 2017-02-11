'use strict';

var util = require('../util'),
    WhitespaceToken = require('../common/token/significant/whitespace');

class NonSignificantTokens {
  static pass(content, context, line) {
    var nonSignificantTokenOrSignificantContents = [];
    
    while (content !== '') {
      var contentLength = content.length;

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContentAndLine(content, line),
            whitespaceTokenLength = whitespaceToken.getLength();

        content = content.substring(whitespaceTokenLength);

        nonSignificantTokenOrSignificantContents.push(whitespaceToken);

        continue;
      } else {
        var significantContentLength = util.minimumBarMinusOne(whitespaceTokenPosition, contentLength),
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
