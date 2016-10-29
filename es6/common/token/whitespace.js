'use strict';

var SignificantToken = require('../token/significant');

class WhitespaceToken extends SignificantToken {
  constructor(string, line) {
    var type = SignificantToken.types.WHITESPACE;
    
    super(string, line, type);
  }
  
  getHTML() {
    var string = this.getString(),
        html = string; ///

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
        string = firstMatch, ///
        whitespaceToken = new WhitespaceToken(string, line);

    return whitespaceToken;
  }
}

module.exports = WhitespaceToken;

function first(array) { return array[0]; }
