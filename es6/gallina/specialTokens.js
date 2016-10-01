'use strict';

var SpecialToken = require('./token/special'),
    SignificantContentToken = require('../common/token/significantContent');

class SpecialTokens {
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

module.exports = SpecialTokens;

function significantTokensFromContent(content, line) {
  var contents = content.split(SpecialToken.regExp),
      significantTokens = contents.reduce(function(significantTokens, content) {
        var significantToken;
        
        if (content !== '') {
          var specialTokenPosition = SpecialToken.position(content);

          if (specialTokenPosition === 0) {
            var specialToken = SpecialToken.fromContent(content, line);
            
            significantToken = specialToken;
          } else {
            var significantContentToken = SignificantContentToken.fromContent(content);

            significantToken = significantContentToken;
          }

          significantTokens.push(significantToken);
        }

        return significantTokens;
      }, []);

  return significantTokens;
}
