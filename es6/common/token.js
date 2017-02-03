'use strict';

class Token {
  constructor(content, line, html) {
    this.content = content;
    this.line = line;
    this.html = html;

    this.updatedHTML = null;
  }

  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }

  getHTML() {
    var html = (this.updateHTML !== null) ?
                  this.updatedHTML :
                    this.html;

    return html;
  }
  
  getLength() {
    return this.content.length; ///
  }

  updateHTML(updatedHTML) {
    this.updatedHTML = updatedHTML;
  }

  resetHTML() {
    this.updatedHTML = null;
  }

  clone(startPosition, endPosition) { return Token.clone(this, startPosition, endPosition, Token); }

  static clone(token, startPosition = 0, endPosition = token.getLength(), Class) {
    var clonedToken = null;

    if (startPosition !== endPosition) {
      var content = token.getContent(),
          line = token.getLine();

      content = content.substring(startPosition, endPosition);

      clonedToken = Class.fromContentAndLine(content, line, Class);
    }

    return clonedToken;
  }
  
  static fromContentAndLine(content, line, Class = Token) {
    var html = Class.htmlFromContent(content),
        token = new Class(content, line, html);

    return token;
  }

  static fromToken(token, Class = Token) {
    var content = token.getContent(),
        line = token.getLine();

    token = Class.fromContentAndLine(content, line, Class);
    
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
