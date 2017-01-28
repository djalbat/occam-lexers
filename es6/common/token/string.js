'use strict';

var SignificantToken = require('../token/significant');

class StringToken extends SignificantToken {
  static position(content) {
    var position = content.search(/"[^"]*"/);

    return position;
  }

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
}

StringToken.type = SignificantToken.types.string;

module.exports = StringToken;

function first(array) { return array[0]; }
