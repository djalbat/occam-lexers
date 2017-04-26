'use strict';

const util = require('../../util');

class NonSignificantToken {
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
    const replacedToken = this;
    
    this.line.replaceToken(replacedToken, token);
  }
  
  clone(startPosition, endPosition) { return NonSignificantToken.clone(this, startPosition, endPosition, NonSignificantToken); }

  static clone(token, startPosition = 0, endPosition = token.getLength(), Class = NonSignificantToken) {
    let clonedNonSignificantToken = null;

    if (startPosition !== endPosition) {
      const line = token.getLine();

      let content = token.getContent();
      
      content = content.substring(startPosition, endPosition);

      clonedNonSignificantToken = Class.fromContentAndLine(content, line, Class);
    }

    return clonedNonSignificantToken;
  }
  
  static fromContentAndLine(content, line, Class = NonSignificantToken) {
    const html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

    return token;
  }

  static htmlFromContent(content) {
    const sanitisedContent = util.sanitiseContent(content),
          html = sanitisedContent;

    return html;
  }
}

module.exports = NonSignificantToken;
