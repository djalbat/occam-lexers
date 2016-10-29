'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  merge(commentToken) {
    var string = this.getString(),
        commentTokenString = commentToken.getString();

    string += commentTokenString;
    
    this.setString(string);

    return this;
  }

  getHTML() {
    var innerHTML = this.getString(), ///
        html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
