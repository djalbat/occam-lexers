'use strict';

class Token {
  constructor(content, line, html) {
    this.content = content;
    this.line = line;
    this.html = html;
  }

  clone(startPosition, endPosition) { return Token.clone(this, startPosition, endPosition, Token); }

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

  static clone(token, startPosition = 0, endPosition = token.getLength(), Class) {
    var clonedToken = null;

    if (startPosition !== endPosition) {
      var content = token.getContent(),
          line = token.getLine();

      content = content.substring(startPosition, endPosition);

      clonedToken = Class.fromContentAndLine(content, line);
    }

    return clonedToken;
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
