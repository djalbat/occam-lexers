'use strict';

var ErrorToken = require('../common/token/error');

class SignificantTokens {
  static pass(nonSignificantTokensOrSignificantContent, line, rules) {
    var tokens = nonSignificantTokensOrSignificantContent.reduce(function(tokens, nonSignificantTokenOrSignificantContent) {
      if (typeof nonSignificantTokenOrSignificantContent === "string") {
        var content = nonSignificantTokenOrSignificantContent,  ///
            significantTokens = significantTokensFromContent(content, line, rules);

        tokens = tokens.concat(significantTokens);
      } else {
        var nonSignificantToken = nonSignificantTokenOrSignificantContent;  ///
        
        tokens.push(nonSignificantToken);
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
