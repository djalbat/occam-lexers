'use strict';

var Token = require('../token');

class WhitespaceToken extends Token {
  clone() {
    var str = this.getString();

    return new WhitespaceToken(str);
  }

  getHTML() {
    var str = this.getString(),
        html = str; ///

    return html;
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

  static positionInContent(content) {
    var position = content.search(/[\t ]+/);

    return position;
  }
}

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
