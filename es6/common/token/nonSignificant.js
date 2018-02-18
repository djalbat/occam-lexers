'use strict';

const contentUtilities = require('../../utilities/content');

const { sanitiseContent } = contentUtilities;

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

  isSignificantToken() {
    const significantToken = false;

    return significantToken;
  }

  asHTML(filePath) {
    const html = this.html; ///
    
    return html;
  }

  clone(startPosition, endPosition) { return NonSignificantToken.clone(NonSignificantToken, this, startPosition, endPosition); }

  static clone(Class = NonSignificantToken, token, startPosition = 0, endPosition = token.getLength()) {
    let clonedNonSignificantToken = null;

    if (startPosition !== endPosition) {
      const line = token.getLine();

      let content = token.getContent();
      
      content = content.substring(startPosition, endPosition);

      clonedNonSignificantToken = Class.fromContentAndLine(Class, content, line);
    }

    return clonedNonSignificantToken;
  }
  
  static fromContentAndLine(Class, content, line) {
    if (line === undefined) {
      line = content;
      content = Class;
      Class = NonSignificantToken;
    }

    const sanitisedContent = sanitiseContent(content),
          html = sanitisedContent,
          token = new Class(content, line, html);

    return token;
  }
}

module.exports = NonSignificantToken;
