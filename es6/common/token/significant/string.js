'use strict';

const SignificantToken = require('../significant');

class StringToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, StringToken); }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(content, line, type, StringToken); }

  static fromWithinContentAndLine(content, line) {
    let stringToken = null;
    
    const matches = content.match(/("[^"]*")/);

    if (matches) {
      const firstMatch = first(matches);
      
      content = firstMatch; ///
      
      const type = SignificantToken.types.string;

      stringToken = StringToken.fromContentLineAndType(content, line, type);
    }
    
    return stringToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/"[^"]*"/);

    return position;
  }
}

module.exports = StringToken;

function first(array) { return array[0]; }
