'use strict';

const tokenUtil = require('../../util/token');

class NonSignificantToken {
  constructor(content, line, html) {
    this.content = content;
    this.line = line;
    this.html = html;
  }

  isSignificant() {
    const significant = false;

    return significant;
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

    const sanitisedContent = tokenUtil.sanitiseContent(content),
          html = sanitisedContent,
          token = new Class(content, line, html);

    return token;
  }
}

module.exports = NonSignificantToken;
