'use strict';

const necessary = require('necessary');

const Rule = require('./rule');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Rules {
  constructor(array) {
    this.array = array;
  }

  map(callback) { return this.array.map(callback); }

  some(callback) { return this.array.some(callback); }

  reduce(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  forEach(callback ) { this.array.forEach(callback); }

  getRule(depth) {
    const rule = (this.array[depth] || null); ///

    return rule;
  }

  addRule(rule) {
    this.array.unshift(rule); ///
  }
  
  static fromEntries(entries) {
    const array = entries.map((entry) => {
            const keys = Object.keys(entry),
                  firstKey = first(keys),
                  type = firstKey,  ///
                  regularExpressionPattern = entry[type],
                  rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
      
            return rule;      
          }),
          rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;
