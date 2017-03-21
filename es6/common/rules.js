'use strict';

const Rule = require('./rule'),
      util = require('../util');

class Rules {
  constructor(array) {
    this.array = array;
  }

  getRule(depth) {
    const rule = this.array[depth] || null; ///

    return rule;
  }
  
  static fromGrammar(grammar) {
    const array = grammar.map(function(grammarEntry) {
            const type = util.typeFromGrammarEntry(grammarEntry),
                  regExp = util.regExpFromGrammarEntry(grammarEntry),
                  rule = new Rule(type, regExp);
  
            return rule;
          }),
          rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;
