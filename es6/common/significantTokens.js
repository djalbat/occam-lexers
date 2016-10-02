'use strict';

var ErrorToken = require('../common/token/error'),
    SignificantContentToken = require('../common/token/significantContent');

class SignificantTokens {
  static pass(tokens, line, rules) {
    tokens = tokens.reduce(function(tokens, token) {
      if (token instanceof SignificantContentToken) {
        var significantContentToken = token,  ///
            content = significantContentToken.getContent(),
            significantTokens = significantTokensFromContent(content, line, rules);

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

function significantTokensFromContent(content, line, rules) {
  var significantTokens = [];

  while (content !== '') {
    var significantToken = rules.significantTokenFromContent(content, line);
    
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
