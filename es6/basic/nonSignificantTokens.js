'use strict';

var util = require('../util'),
    SignificantContentToken = require('../common/token/significantContent'),
    WhitespaceToken = require('../common/token/whitespace');

class NonSignificantTokens {
  static pass(content, context, line) {
    var nonSignficantTokensOrSignificantContent = [],
        remainingContent;
    
    while (content !== '') {
      var contentLength = content.length;

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContent(content, line),
            whitespaceTokenLength = whitespaceToken.getLength();

        content = content.substring(whitespaceTokenLength);

        nonSignficantTokensOrSignificantContent.push(whitespaceToken);

        continue;
      } else {
        var significantContentLength = util.minBarMinusOne(whitespaceTokenPosition, contentLength),
            significantContent = content.substring(0, significantContentLength);

        content = content.substring(significantContentLength);

        nonSignficantTokensOrSignificantContent.push(significantContent);

        continue;
      }
    }
    
    return nonSignficantTokensOrSignificantContent;
  }
}

module.exports = NonSignificantTokens;
