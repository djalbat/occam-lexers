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
  
  static fromGrammar(grammar) {
    var array = grammar.map(function(grammarEntry) {
          var type = util.typeFromGrammarEntry(grammarEntry),
              regExp = util.regExpFromGrammarEntry(grammarEntry),
              rule = new Rule(type, regExp);

          return rule;
        }),
        rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;
