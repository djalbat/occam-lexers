'use strict';

class Token {
  constructor(content, line, html) {
    this.content = content;
    this.line = line;
    this.html = html;
  }

  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }

  getHTML() {
    return this.html;
  }
  
  getLength() {
    return this.content.length; ///
  }

  replaceWith(token) {
    var tokens = this.line.getTokens(),
        index = tokens.indexOf(this);

    tokens.splice(index, 1, token);
  }

  toPosition(position) { return Token.toPosition(this, position) }

  fromPosition(position) { return Token.fromPosition(this, position) }

  static toPosition(token, position, Class = Token) {
    var tokenToPosition = null;

    if (position !== 0) {
      var content = token.getContent(),
          line = token.getLine();

      content = content.substring(0, position);

      tokenToPosition = Class.fromContentAndLine(content, line);
    }

    return tokenToPosition;
  }

  static fromPosition(token, position, Class = Token) {
    var tokenFromPosition = null,
        tokenLength = token.getLength();

    if (position !== tokenLength) {
      var content = token.getContent(),
          line = token.getLine();

      content = content.substring(position);

      tokenFromPosition = Class.fromContentAndLine(content, line);
    }

    return tokenFromPosition;
  }

  static fromContentAndLine(content, line, Class = Token) {
    var html = Class.htmlFromContent(content),
        token = new Class(content, line, html);

    return token;
  }

  static htmlFromContent(content) {
    var html = content; ///

    html = Token.sanitiseHTML(html);  ///

    return html;
  }

  static sanitiseHTML(html) {
    var sanitisedHTML = html.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedHTML;
  }
}

module.exports = Token;
