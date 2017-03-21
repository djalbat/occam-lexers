'use strict';

const SignificantToken = require('../significant');

class StringToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, StringToken); }

  static fromContentAndLine(content, line) { return SignificantToken.fromContentAndLine(content, line, StringToken); }

  static fromWithinContentAndLine(content, line) {
    let stringToken = null;
    
    const matches = content.match(/("[^"]*")/);

    if (matches) {
      const firstMatch = first(matches);
      
      content = firstMatch; ///

      stringToken = StringToken.fromContentAndLine(content, line);
    }
    
    return stringToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/"[^"]*"/);

    return position;
  }
}

StringToken.type = SignificantToken.types.string;

module.exports = StringToken;

function first(array) { return array[0]; }
