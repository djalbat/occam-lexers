'use strict';

var BracketToken = require('../bracket');

class RoundOpeningBracketToken extends BracketToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new RoundOpeningBracketToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\()/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        roundOpeningBracketToken = new RoundOpeningBracketToken(str);

    return roundOpeningBracketToken;
  }
}

module.exports = RoundOpeningBracketToken;

