'use strict';

const necessary = require('necessary');

const SignificantToken = require('../significant');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class RegularExpressionToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(RegularExpressionToken, this, startPosition, endPosition); }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(RegularExpressionToken, content, line, type); }

  static fromWithinContentAndLine(content, line) {
    let regularExpressionToken = null;
    
    const matches = content.match(RegularExpressionToken.regularExpression);

    if (matches) {
      const firstMatch = first(matches);
      
      content = firstMatch; ///
      
      const { type } = RegularExpressionToken;

      regularExpressionToken = RegularExpressionToken.fromContentLineAndType(content, line, type);
    }
    
    return regularExpressionToken;
  }

  static positionWithinContent(content) {
    const position = content.search(RegularExpressionToken.regularExpression);

    return position;
  }
}

const type = 'regularExpression',
      regularExpression = /\/(?:\\.|[^\/])*\//;

Object.assign(RegularExpressionToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = RegularExpressionToken;
