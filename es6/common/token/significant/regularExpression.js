'use strict';

const arrayUtil = require('../../../util/array'),
      SignificantToken = require('../significant');

class RegularExpressionToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(RegularExpressionToken, this, startPosition, endPosition); }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(RegularExpressionToken, content, line, type); }

  static fromWithinContentAndLine(content, line) {
    let regularExpressionToken = null;
    
    const matches = content.match(RegularExpressionToken.regularExpression);

    if (matches) {
      const firstMatch = arrayUtil.first(matches);
      
      content = firstMatch; ///
      
      const type = RegularExpressionToken.type;

      regularExpressionToken = RegularExpressionToken.fromContentLineAndType(content, line, type);
    }
    
    return regularExpressionToken;
  }

  static positionWithinContent(content) {
    const position = content.search(RegularExpressionToken.regularExpression);

    return position;
  }
}

RegularExpressionToken.type = 'regularExpression';

RegularExpressionToken.regularExpression = /\/(?:\\.|[^\/])*\//;

module.exports = RegularExpressionToken;
