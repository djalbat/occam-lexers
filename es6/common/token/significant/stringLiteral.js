'use strict';

const arrayUtil = require('../../../util/array'),
      SignificantToken = require('../significant');

class StringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(StringLiteralToken, this, startPosition, endPosition); }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(StringLiteralToken, content, line, type); }

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

StringLiteralToken.regularExpression = /"(?:\\.|[^"])*"/;

module.exports = StringLiteralToken;
