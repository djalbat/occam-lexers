'use strict';

const tokenUtil = require('../../util/token');

class SignificantToken {
  constructor(content, line, type, innerHTML) {
    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;

    this.error = undefined; ///
  }
  
  isSignificant() {
    const significant = true;
    
    return significant;
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

  clone(startPosition, endPosition) { return SignificantToken.clone(SignificantToken, this, startPosition, endPosition) }

  static clone(Class = SignificantToken, significantToken, startPosition = 0, endPosition = significantToken.getLength()) {
    let clonedSignificantToken = null;

    if (startPosition !== endPosition) {
      let content = significantToken.getContent();

      const line = significantToken.getLine(),
            type = significantToken.getType(),
            error = significantToken.getError();

      content = content.substring(startPosition, endPosition);

      clonedSignificantToken = Class.fromContentLineAndType(content, line, type);

      clonedSignificantToken.setError(error);
    }

    return clonedSignificantToken;
  }

  static fromContentLineAndType(Class, content, line, type) {
    if (type === undefined) {
      type = line;
      line = content;
      content = Class;
      Class = SignificantToken;
    }

    const sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          significantToken = new Class(content, line, type, innerHTML);

    return significantToken;
  }
}

module.exports = SignificantToken;
