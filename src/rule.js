"use strict";

import { arrayUtilities } from "necessary";

import SignificantToken from "./token/significant";

import { U } from "./constants";

const { first } = arrayUtilities;

export default class Rule {
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

    const matches = content.match(this.regularExpression);

    if (matches !== null) {
      const { index } = matches;

      if (index === 0) {
        const firstMatch = first(matches);

        content = firstMatch; ///

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
          regularExpression = regularExpressionFromRegularExpressionPattern(regularExpressionPattern),
          rule = new Rule(type, regularExpression);
        
    return rule; 
  }

  static fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
    const regularExpression = regularExpressionFromRegularExpressionPattern(regularExpressionPattern),
          rule = new Rule(type, regularExpression);

    return rule;
  }
}

function regularExpressionFromRegularExpressionPattern(regularExpressionPattern) {
  const flags = U,  ///
        regExp = new RegExp(regularExpressionPattern, flags),
        regularExpression = regExp; ///

  return regularExpression;
}
