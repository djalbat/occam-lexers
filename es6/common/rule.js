'use strict';

const SignificantToken = require('../common/token/significant');

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
  const matches = regularExpressionPattern.match(/u\{/),
        unicode = (matches !== null);

  return unicode;
}

function first(array) { return array[0]; }
