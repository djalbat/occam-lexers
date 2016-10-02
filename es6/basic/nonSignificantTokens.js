'use strict';

var util = require('../util'),
    SignificantContentToken = require('../common/token/significantContent'),
    WhitespaceToken = require('../common/token/whitespace');

class NonSignificantTokens {
  static pass(content, context, line) {
    var tokens = [],
        remainingContent;
    
    while (content !== '') {
      var contentLength = content.length;

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContent(content, line),
            whitespaceTokenLength = whitespaceToken.getLength();

        content = content.substring(whitespaceTokenLength);

        tokens.push(whitespaceToken);

        continue;
      }

      var significantContentTokenLength = util.minBarMinusOne(whitespaceTokenPosition, contentLength);

      remainingContent = content.substring(significantContentTokenLength);

      content = content.substring(0, significantContentTokenLength);

      var significantContentToken = SignificantContentToken.fromContent(content);

      content = remainingContent;

      tokens.push(significantContentToken);

      continue;
    }
    
    return tokens;
  }
}

module.exports = NonSignificantTokens;
