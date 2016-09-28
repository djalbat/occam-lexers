'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  getHTML() {
    var str = this.getStr(),
        html = '<span class="comment">' + str + '</span>';

    return html;
  }

  clone() {
    var str = this.getStr();

    return new CommentToken(str);
  }
}

module.exports = CommentToken;
