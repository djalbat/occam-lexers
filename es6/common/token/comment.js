'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  merge(commentToken) {
    var str = this.getString(),
        commentTokenStr = commentToken.getString();

    str += commentTokenStr;
    
    this.setString(str);

    return this;
  }

  getHTML() {
    var innerHTML = this.getString(), ///
        html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
