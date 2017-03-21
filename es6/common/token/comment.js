'use strict';

const Token = require('../token');

class CommentToken extends Token {
  merge(commentToken) {
    let content = this.getContent();
    
    const line = this.getLine(),
          commentTokenContent = commentToken.getContent();

    content += commentTokenContent;

    commentToken = CommentToken.fromContentAndLine(content, line);  ///

    return commentToken;
  }

  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, CommentToken); }

  static clone(token, startPosition, endPosition, Class) { return Token.clone(token, startPosition, endPosition, Class); }

  static fromContentAndLine(content, line, Class = CommentToken) { return Token.fromContentAndLine(content, line, Class); }

  static htmlFromContent(content) {
    let  innerHTML = content;

    innerHTML = Token.sanitiseHTML(innerHTML);  ///

    const html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
