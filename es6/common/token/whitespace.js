'use strict';

var Token = require('../token');

class WhitespaceToken extends Token {
  constructor(str) {
    var type = "comment",
        line = null;

    super(str, type, line);
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

  static fromContent(content) {
    var matches = content.match(/^([\t ]+)/);

    if (!matches) {
      return null;
    }

    var firstMatch = first(matches),
        str = firstMatch, ///
        whitespaceToken = new WhitespaceToken(str);

    return whitespaceToken;
  }
}

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
