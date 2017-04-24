'use strict';

const util = require('../../util');

class SignificantToken {
  constructor(content, line, type) {
    this.content = content;
    this.line = line;
    this.type = type;
  }
  
  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }

  getType() {
    return this.type;
  }

  getHTML() {
    const sanitisedContent = util.sanitiseContent(this.content),
          className = this.type, ///
          innerHTML = sanitisedContent, ///
          html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }
  
  getLength() {
    return this.content.length; ///
  }

  setType() {
    return this.type;
  }

  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, SignificantToken) }

  static clone(token, startPosition = 0, endPosition = token.getLength(), Class = SignificantToken) {
    let clonedSignificantToken = null;

    if (startPosition !== endPosition) {
      const line = token.getLine(),
            type = token.getType();

      let content = token.getContent();

      content = content.substring(startPosition, endPosition);

      clonedSignificantToken = new Class(content, line, type);
    }

    return clonedSignificantToken;
  }

  static fromSignificantToken(significantToken, Class = SignificantToken) {
    const content = significantToken.getContent(),
          line = significantToken.getLine(),
          type = significantToken.getType();
    
    significantToken = new Class(content, line, type);

    return significantToken;
  }
}

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
