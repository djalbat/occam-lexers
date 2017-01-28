'use strict';

var SignificantToken = require('../token/significant');

class WhitespaceToken extends SignificantToken {
  static position(content) {
    var position = content.search(/[\t ]+/);

    return position;
  }

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
}

WhitespaceToken.type = 'whitespace';

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
