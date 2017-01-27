'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  clone(Class) {
    var content = this.getContent(),
        line = this.getLine(),
        commentToken = new Class(content, line);

    return commentToken;
  }
  
  merge(commentToken) {
    var content = this.getContent(),
        commentTokenContent = commentToken.getContent();

    content += commentTokenContent;
    
    this.setContent(content);

    return this;  ///
  }

  updateHTML() {
    var content = this.getContent(),
        innerHTML = content, ///
        sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
        html = `<span class="comment">${sanitisedInnerHTML}</span>`;

    this.setHTML(html);
  }
}

module.exports = CommentToken;
