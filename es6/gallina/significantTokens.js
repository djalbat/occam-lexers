'use strict';

var Rules = require('./rules'),
    ErrorToken = require('../common/token/error'),
    SignificantContentToken = require('../common/token/significantContent');

class SignificantTokens {
  static pass(tokens, line) {
    tokens = tokens.reduce(function(tokens, token) {
      if (token instanceof SignificantContentToken) {
        var significantContentToken = token,  ///
            content = significantContentToken.getContent(),
            significantTokens = significantTokensFromContent(content, line);

        tokens = tokens.concat(significantTokens);
      } else {
        tokens.push(token);
      }

      return tokens;
    }, []);

    return tokens;
  }
}

module.exports = SignificantTokens;

function significantTokensFromContent(content, line) {
  var significantTokens = [];

  while (content !== '') {
    var significantToken = Rules.significantTokenFromContent(content, line);
    
    if (significantToken === null) {
      var errorToken = ErrorToken.fromContent(content);
      
      significantToken = errorToken;  ///
    }

    var significantTokenLength = significantToken.getLength();

    significantTokens.push(significantToken);

    content = content.substring(significantTokenLength);
  }

  return significantTokens;
}
