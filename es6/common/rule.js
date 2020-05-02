"use strict";

import { arrayUtilities } from "necessary";

import SignificantToken from "../common/token/significant";

const { first } = arrayUtilities;

class Rule {
  constructor(type, regularExpression) {
    this.type = type;
    this.regularExpression = regularExpression;
  }
  
  getType() {
    return this.type;
  }
  
  getRegularExpression() {
    return this.regularExpression;
  }

  match(content) {
    let significantToken = null;

    const match = content.match(this.regularExpression);

    if (match !== null) {
      const { index } = match;

      if (index === 0) {
        content = match[0]; ///

        const contentLength = content.length;

        if (contentLength > 0) {
          significantToken = SignificantToken.fromContentAndType(content, this.type);
        }
      }
    }

    return significantToken;
  }
  
  asEntry() {
    const entry = {},
          regularExpressionPattern = `${this.regularExpression}`;

    entry[this.type] = regularExpressionPattern;

    return entry;
  }

  static fromToken(Token) {
    const { type, regularExpression } = Token,
          rule = new Rule(type, regularExpression);

    return rule;
  }

  static fromEntry(entry) {
    const entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
          type = firstEntryKey, ///
          regularExpressionPattern = entry[type],
          rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
        
    return rule; 
  }

  static fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
    const unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? "u" : "",
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp, ///
          rule = new Rule(type, regularExpression);

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
