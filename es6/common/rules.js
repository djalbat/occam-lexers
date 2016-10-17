'use strict';

var Rule = require('./rule'),
    util = require('../util');

class Rules {
  constructor(array) {
    this.array = array;
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
              regExpPattern = util.regExpPattern(regExp);

          regExp = new RegExp('^(' + regExpPattern + ')', 'u'); ///

          var rule = new Rule(type, regExp);

          return rule;
        }),
        rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;
