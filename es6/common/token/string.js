'use strict';

var SignificantToken = require('../token/significant');

class StringToken extends SignificantToken {
  toPosition(position) { return SignificantToken.toPosition(this, position, StringToken) }

  fromPosition(position) { return SignificantToken.fromPosition(this, position, StringToken) }

  static fromContentAndLine(content, line) {
    var stringToken = null,
        matches = content.match(/("[^"]*")/);

    if (matches) {
      var firstMatch = first(matches);
      
      content = firstMatch; ///

      stringToken = SignificantToken.fromContentAndLine(content, line, StringToken);
    }
    
    return stringToken;
  }

  static position(content) {
    var position = content.search(/"[^"]*"/);

    return position;
  }
}

StringToken.type = SignificantToken.types.string;

module.exports = StringToken;

function first(array) { return array[0]; }
