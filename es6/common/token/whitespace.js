'use strict';

var SignificantToken = require('../token/significant');

class WhitespaceToken extends SignificantToken {
  toPosition(position) { return SignificantToken.toPosition(this, position, WhitespaceToken) }

  fromPosition(position) { return SignificantToken.fromPosition(this, position, WhitespaceToken) }

  static fromContentAndLine(content, line) {
    var whitespaceToken = null,
        matches = content.match(/([\t ]+)/);

    if (matches) {
      var firstMatch = first(matches);
      
      content = firstMatch; ///

      whitespaceToken = SignificantToken.fromContentAndLine(content, line, WhitespaceToken);
    }

    return whitespaceToken;
  }

  static position(content) {
    var position = content.search(/[\t ]+/);

    return position;
  }
}

WhitespaceToken.type = SignificantToken.types.whitespace;

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
