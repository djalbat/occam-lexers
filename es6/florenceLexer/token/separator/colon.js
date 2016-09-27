'use strict';

var SeparatorToken = require('../separator');

class ColonSeparatorToken extends SeparatorToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new ColonSeparatorToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/(^:)\b/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        equals = new ColonSeparatorToken(str);

    return equals;
  }
}

module.exports = ColonSeparatorToken;

