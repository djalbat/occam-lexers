'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  merge(commentToken) {
    var content = this.getContent(),
        line = this.getLine(),
        commentTokenContent = commentToken.getContent();

    content += commentTokenContent;

    commentToken = CommentToken.fromContentAndLine(content, line);  ///

    return commentToken;
  }

  static htmlFromContent(content) {
    var innerHTML = content;

    innerHTML = Token.sanitiseHTML(innerHTML);  ///

    var html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }

  static fromContentAndLine(content, line, Class = CommentToken) { return Token.fromContentAndLine(content, line, Class); }
}

module.exports = CommentToken;
