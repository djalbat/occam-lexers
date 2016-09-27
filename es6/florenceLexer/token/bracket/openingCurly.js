'use strict';

var BracketToken = require('../bracket');

class CurlyOpeningBracketToken extends BracketToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new CurlyOpeningBracketToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\{)/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        curly = new CurlyOpeningBracketToken(str);

    return curly;
  }
}

module.exports = CurlyOpeningBracketToken;

