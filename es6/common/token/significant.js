'use strict';

const util = require('../../util');

class SignificantToken {
  constructor(content, line, type, innerHTML) {
    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;

    this.error = undefined; ///
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

  getInnerHTML() {
    return this.innerHTML;
  }

  getError() {
    return this.error;
  }

  getHTML() {
    const className = (this.error === true) ?
                        'error' :
                          this.type,
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  getLength() {
    return this.content.length; ///
  }

  setError(error) {
    this.error = error;
  }

  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, SignificantToken) }

  static clone(token, startPosition = 0, endPosition = token.getLength(), Class = SignificantToken) {
    let clonedSignificantToken = null;

    if (startPosition !== endPosition) {
      let content = token.getContent();

      const line = token.getLine(),
            type = token.getType(),
            error = token.getError();

      content = content.substring(startPosition, endPosition);

      clonedSignificantToken = Class.fromContentLineAndType(content, line, type);

      clonedSignificantToken.setError(error);
    }

    return clonedSignificantToken;
  }

  static fromContentLineAndType(content, line, type, Class = SignificantToken) {
    const innerHTML = Class.innerHTMLFromContent(content),
          significantToken = new Class(content, line, type, innerHTML);

    return significantToken;
  }

  static innerHTMLFromContent(content) {
    const sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent; ///

    return innerHTML;
  }
}

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
