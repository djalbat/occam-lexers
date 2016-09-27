'use strict';

var Token = require('../../common/token');

class SeparatorToken extends Token {
  constructor(str) {
    super(str);
  }

  html() {
    var str = this.getStr(),
        html = '<span class="separator">' + str + '</span>';

    return html;
  }

  clone() {
    var str = this.getStr();

    return new SeparatorToken(str);
  }
}

module.exports = SeparatorToken;

