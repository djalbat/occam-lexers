'use strict';

var Rule = require('./rule'),
    grammar = require('./grammar'),
    ParseableToken = require('../common/token/parseable');

var tokenTypes = Object.keys(grammar),  ///
    rules = tokenTypes.reduce(function(rules, tokenType) {
      var regExp = grammar[tokenType],
          rule = new Rule(tokenType, regExp);

      rules.push(rule);

      return rules;
    }, []);

class SignificantTokens {
  static pass(line) {
    var tokens = line.getTokens();
    
    tokens = tokens.map(function(token) {
      if (token instanceof ParseableToken) {
        var parseableToken = token,
            content = parseableToken.getContent(),
            significantToken = undefined;

        rules.some(function(rule) {
          significantToken = rule.significantTokenFromContent(content, line);

          if (significantToken !== null) {
            return true;
          } else {
            return false;
          }
        });

        return significantToken;
      } else {
        return token;
      }
    });

    line.setTokens(tokens);
  }
}

module.exports = SignificantTokens;
