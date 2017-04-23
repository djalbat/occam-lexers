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
    const html = (this.updatedHTML !== null) ?
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

  static clone(token, startPosition = 0, endPosition = token.getLength(), Class = Token) {
    let clonedToken = null;

    if (startPosition !== endPosition) {
      const line = token.getLine();

      let content = token.getContent();
      
      content = content.substring(startPosition, endPosition);

      clonedToken = Class.fromContentAndLine(content, line, Class);
    }

    return clonedToken;
  }
  
  static fromContentAndLine(content, line, Class = Token) {
    const html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

    return token;
  }

  static fromToken(token, Class = Token) {
    const content = token.getContent(),
          line = token.getLine();

    token = Class.fromContentAndLine(content, line, Class);
    
    return token;
  }

  static htmlFromContent(content) {
    let html = content; ///

    html = Token.sanitiseHTML(html);  ///

    return html;
  }

  static sanitiseHTML(html) {
    const sanitisedHTML = html.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedHTML;
  }
}

module.exports = Token;
