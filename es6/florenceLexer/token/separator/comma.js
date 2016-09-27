'use strict';

var SeparatorToken = require('../separator');

class CommaSeparatorToken extends SeparatorToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new CommaSeparatorToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/(^,\s*)\b/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        comma = new CommaSeparatorToken(str);

    return comma;
  }
}

module.exports = CommaSeparatorToken;
