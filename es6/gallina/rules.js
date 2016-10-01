'use strict';

var Rule = require('./rule'),
    grammar = require('./grammar');

var tokenTypes = Object.keys(grammar),  ///
    rules = tokenTypes.reduce(function(rules, tokenType) {
      var regExp = grammar[tokenType],
          rule = new Rule(tokenType, regExp);

      rules.push(rule);

      return rules;
    }, []);

class Rules {
  static significantTokenFromContent(content, line) {
    var significantToken = null;

    rules.some(function(rule) {
      significantToken = rule.significantTokenFromContent(content, line);

      if (significantToken !== null) {
        return true;
      } else {
        return false;
      }
    });
    
    return significantToken;
  }
}

module.exports = Rules;
