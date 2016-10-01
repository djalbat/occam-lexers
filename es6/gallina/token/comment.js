'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  getHTML() {
    var str = this.getString(),
        html = '<span class="comment">' + str + '</span>';

    return html;
  }

  merge(commentToken) {
    var str = this.getString(),
        commentTokenStr = commentToken.getString();

    str += commentTokenStr;
    
    this.setString(str);

    return this;
  }
}

module.exports = CommentToken;
