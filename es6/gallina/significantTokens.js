'use strict';

var Rules = require('./rules'),
    ErrorToken = require('../common/token/error'),
    SignificantContentToken = require('../common/token/significantContent');

class SignificantTokens {
  static pass(tokens, line) {
    tokens = tokens.map(function(token) {
      if (token instanceof SignificantContentToken) {
        var significantContentToken = token, ///
            content = significantContentToken.getContent(),
            significantToken = Rules.significantTokenFromContent(content, line);

        if (significantToken !== null) {
          token = significantToken; ///
        } else {
          var errorToken = ErrorToken.fromContent(content, line);

          token = errorToken; ///
        }
      }
      
      return token;
    });

    return tokens;
  }}

module.exports = SignificantTokens;
