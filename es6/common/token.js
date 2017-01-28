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
    var tokenTrimmedToPosition = null,
        tokenLength = token.getLength();

    if (position !== tokenLength) {
      var content = token.getContent(),
          line = token.getLine();

      content = content.substring(position);

      tokenTrimmedToPosition = Class.fromContentAndLine(content, line);
    }

    return tokenTrimmedToPosition;
  }

  static fromPosition(token, position, Class = Token) {
    var tokenTrimmedFromPosition = null;

    if (position !== 0) {
      var content = token.getContent(),
          line = token.getLine();

      content = content.substring(0, position);

      tokenTrimmedFromPosition = Class.fromContentAndLine(content, line);
    }

    return tokenTrimmedFromPosition;
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
