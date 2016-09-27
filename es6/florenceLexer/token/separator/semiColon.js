'use strict';

var SeparatorToken = require('../separator');

class SemiColonSeparatorToken extends SeparatorToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new SemiColonSeparatorToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/(^;)\b/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        equals = new SemiColonSeparatorToken(str);

    return equals;
  }
}

module.exports = SemiColonSeparatorToken;

