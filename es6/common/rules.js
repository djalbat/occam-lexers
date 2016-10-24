'use strict';

var Rule = require('./rule'),
    util = require('../util');

class Rules {
  constructor(array) {
    this.array = array;
  }

  getRule(depth) {
    var rule = this.array[depth];

    return rule;
  }
  
  significantTokenFromContent(content, line) {
    var significantToken = null;

    this.array.some(function(rule) {
      significantToken = rule.significantTokenFromContent(content, line);

      if (significantToken !== null) {
        return true;
      } else {
        return false;
      }
    });
    
    return significantToken;
  }

  static fromGrammar(grammar) {
    var array = grammar.map(function(entry) {
          var type = util.typeFromEntry(entry),
              regExp = util.regExpFromEntry(entry),
              rule = new Rule(type, regExp);

          return rule;
        }),
        rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;
