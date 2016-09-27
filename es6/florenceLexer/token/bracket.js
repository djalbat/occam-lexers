'use strict';

var Token = require('../../common/token');

class BracketToken extends Token {
  constructor(str) {
    super(str);
  }

  html() {
    var str = this.getStr(),
        html = str; ///

    return html;
  }

  clone() {
    var str = this.getStr();

    return new BracketToken(str);
  }
}

module.exports = BracketToken;

