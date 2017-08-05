'use strict';

const necessary = require('necessary');

const SignificantToken = require('../common/token/significant');

const { array } = necessary,
      { first } = array;

class Rule {
  constructor(significantTokenType, regularExpression) {
    this.significantTokenType = significantTokenType;
    this.regularExpression = regularExpression;
  }
  
  getSignificantTokenType() {
    return this.significantTokenType;
  }
  
  getRegularExpression() {
    return this.regularExpression;
  }
  
  significantTokenPositionWithinContent(content) {
    let significantTokenPosition = -1;
    
    const matches = content.match(this.regularExpression);
    
    if (matches !== null) {
      const firstMatch = first(matches);
      
      if (firstMatch !== '') {
        significantTokenPosition = matches.index; ///
      }
    }

    return significantTokenPosition;
  }

  significantTokenFromWithinContentAndLine(content, line) {
    const matches = content.match(this.regularExpression),
          firstMatch = first(matches);

    content = firstMatch; ///

    const type = this.significantTokenType, ///
          significantToken = SignificantToken.fromContentLineAndType(content, line, type);

    return significantToken;
  }
  
  static fromEntry(entry) {
    const entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
          significantTokenType = firstEntryKey, ///
          regularExpressionPattern = entry[significantTokenType],
          rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);
        
    return rule; 
  }

  static fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern) {
    const unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? 'u' : '',
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp, ///
          rule = new Rule(significantTokenType, regularExpression);

    return rule;
  }
}

module.exports = Rule;

function isUnicode(regularExpressionPattern) {
  const unicodeRegularExpression = /u\{/, ///
        index = regularExpressionPattern.search(unicodeRegularExpression),
        unicode = (index !== -1);

  return unicode;
}
