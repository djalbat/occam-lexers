'use strict';

var BracketToken = require('../bracket');

class ClosingCurlyBracketToken extends BracketToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new ClosingCurlyBracketToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\}).*/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        closingCurlyBracketToken = new ClosingCurlyBracketToken(str);

    return closingCurlyBracketToken;
  }
}

module.exports = ClosingCurlyBracketToken;

