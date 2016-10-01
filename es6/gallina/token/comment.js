'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  getHTML() {
    var str = this.getStr(),
        html = '<span class="comment">' + str + '</span>';

    return html;
  }
}

module.exports = CommentToken;
