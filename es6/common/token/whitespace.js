'use strict';

var SignificantToken = require('../token/significant');

class WhitespaceToken extends SignificantToken {
  constructor(content, line) {
    var type = SignificantToken.types.whitespace;
    
    super(content, line, type);
  }

  clone () { return super.clone(WhitespaceToken); }

  static position(content) {
    var position = content.search(/[\t ]+/);

    return position;
  }

  static fromContent(content, line) {
    var whitespaceToken = null,
        matches = content.match(/([\t ]+)/);

    if (matches) {
      var firstMatch = first(matches);
      
      content = firstMatch; ///

      whitespaceToken = new WhitespaceToken(content, line);
    }


    return whitespaceToken;
  }
}

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
