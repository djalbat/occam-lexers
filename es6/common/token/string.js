'use strict';

var SignificantToken = require('../token/significant');

class StringToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, StringToken); }

  static fromContentAndLine(content, line) { return SignificantToken.fromContentAndLine(content, line, StringToken); }

  static fromWithinContentAndLine(content, line) {
    var stringToken = null,
        matches = content.match(/("[^"]*")/);

    if (matches) {
      var firstMatch = first(matches);
      
      content = firstMatch; ///

      stringToken = StringToken.fromContentAndLine(content, line);
    }
    
    return stringToken;
  }

  static positionWithinContent(content) {
    var position = content.search(/"[^"]*"/);

    return position;
  }
}

StringToken.type = SignificantToken.types.string;

module.exports = StringToken;

function first(array) { return array[0]; }
