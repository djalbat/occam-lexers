'use strict';

var SignificantToken = require('../token/significant');

class StringToken extends SignificantToken {
  constructor(content, line) {
    var type = SignificantToken.types.string;
    
    super(content, line, type);
  }

  clone () { return super.clone(StringToken); }

  static position(content) {
    var position = content.search(/"[^"]*"/);

    return position;
  }

  static fromContent(content, line) {
    var stringToken = null,
        matches = content.match(/("[^"]*")/);

    if (matches) {
      var firstMatch = first(matches);
      
      content = firstMatch; ///

      stringToken = new StringToken(content, line);
    }
    
    return stringToken;
  }
}

module.exports = StringToken;

function first(array) { return array[0]; }
