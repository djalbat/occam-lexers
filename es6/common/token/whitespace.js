'use strict';

var SignificantToken = require('../token/significant');

class WhitespaceToken extends SignificantToken {
  constructor(str, line) {
    var type = SignificantToken.types.WHITESPACE;
    
    super(str, line, type);
  }
  
  getHTML() {
    var str = this.getString(),
        html = str; ///

    return html;
  }

  static position(content) {
    var position = content.search(/[\t ]+/);

    return position;
  }

  static fromContent(content, line) {
    var matches = content.match(/^([\t ]+)/);

    if (!matches) {
      return null;
    }

    var firstMatch = first(matches),
        str = firstMatch, ///
        whitespaceToken = new WhitespaceToken(str, line);

    return whitespaceToken;
  }
}

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
