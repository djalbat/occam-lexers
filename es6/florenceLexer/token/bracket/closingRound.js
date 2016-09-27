'use strict';

var BracketToken = require('../bracket');

class RoundClosingBracketToken extends BracketToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new RoundClosingBracketToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\)).*/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        round = new RoundClosingBracketToken(str);

    return round;
  }
}

module.exports = RoundClosingBracketToken;

