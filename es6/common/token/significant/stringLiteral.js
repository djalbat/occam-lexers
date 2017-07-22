'use strict';

const arrayUtil = require('../../../util/array'),
      SignificantToken = require('../significant');

class StringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, StringLiteralToken); }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(content, line, type, StringLiteralToken); }

  static fromWithinContentAndLine(content, line) {
    let stringLiteralToken = null;
    
    const matches = content.match(StringLiteralToken.regularExpression);

    if (matches) {
      const firstMatch = arrayUtil.first(matches);
      
      content = firstMatch; ///
      
      const type = StringLiteralToken.type;

      stringLiteralToken = StringLiteralToken.fromContentLineAndType(content, line, type);
    }
    
    return stringLiteralToken;
  }

  static positionWithinContent(content) {
    const position = content.search(StringLiteralToken.regularExpression);

    return position;
  }
}

StringLiteralToken.type = 'string';

StringLiteralToken.regularExpression = /"(?:[^\\.]|\\.)*"/;

module.exports = StringLiteralToken;
