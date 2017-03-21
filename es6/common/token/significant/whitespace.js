'use strict';

const SignificantToken = require('../significant');

class WhitespaceToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, WhitespaceToken); }

  static fromContentAndLine(content, line) { return SignificantToken.fromContentAndLine(content, line, WhitespaceToken); }

  static fromWithinContentAndLine(content, line) {
    let whitespaceToken = null;
    
    const matches = content.match(/([\t ]+)/);

    if (matches) {
      const firstMatch = first(matches);
      
      content = firstMatch; ///

      whitespaceToken = WhitespaceToken.fromContentAndLine(content, line);
    }

    return whitespaceToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/[\t ]+/);

    return position;
  }
}

WhitespaceToken.type = SignificantToken.types.whitespace;

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
