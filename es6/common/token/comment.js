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

  toPosition(position) { return CommentToken.toPosition(this, position) }

  fromPosition(position) { return CommentToken.fromPosition(this, position) }

  static toPosition(position, Class = CommentToken) { return Token.toPosition(this, position, Class) }

  static fromPosition(position, Class = CommentToken) { return Token.fromPosition(this, position, Class) }

  static fromContentAndLine(content, line, Class = CommentToken) { return Token.fromContentAndLine(content, line, Class); }

  static htmlFromContent(content) {
    var innerHTML = content;

    innerHTML = Token.sanitiseHTML(innerHTML);  ///

    var html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
