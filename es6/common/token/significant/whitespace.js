'use strict';

const SignificantToken = require('../significant');

class WhitespaceToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, WhitespaceToken); }

  static fromWithinContentAndLine(content, line) {
    let whitespaceToken = null;
    
    const matches = content.match(/([\t ]+)/);

    if (matches) {
      const firstMatch = first(matches);
      
      content = firstMatch; ///
      
      const type = SignificantToken.types.whitespace;

      whitespaceToken = new WhitespaceToken(content, line, type);
    }

    return whitespaceToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/[\t ]+/);

    return position;
  }
}

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
