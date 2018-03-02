'use strict';

const necessary = require('necessary');

const contentUtilities = require('../utilities/content');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { sanitiseContent } = contentUtilities;

class Token {
  constructor(type, content, innerHTML, significant) {
    this.type = type;
    this.content = content;
    this.innerHTML = innerHTML;
    this.significant = significant;
  }

  getType() {
    return this.type;
  }

  getContent() {
    return this.content;
  }
  
  getInnerHTML() {
    return this.innerHTML;
  }

  isSignificant() {
    return this.significant;
  }
  
  getContentLength() {
    const contentLength = this.content.length;

    return contentLength;
  }

  isEndOfLineToken() {
    const endOfLineToken = false;

    return endOfLineToken;
  }

  asHTML(filePath) {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  clone(Class, startPosition, endPosition) {
    let token = null;

    if (startPosition !== endPosition) {
      let content = this.getContent();

      content = content.substring(startPosition, endPosition);  ///

      token = Class.fromContent(content);
    }

    return token;
  }

  static fromContentAndType(Class, content, type, significant) {
    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant);

    return token;
  }

  static fromContent(Class, content, significant) {
    const { type } = Class,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant);

    return token;
  }

  static fromWithinContent(Class, content, significant) {
    let token = null;

    const { regularExpression } = Class,
          matches = content.match(regularExpression);

    if (matches) {
      const firstMatch = first(matches);

      content = firstMatch; ///

      token = Token.fromContent(Class, content, significant);
    }

    return token;
  }

  static positionWithinContent(Class, content) {
    const { regularExpression } = Class,
          position = content.search(regularExpression);

    return position;
  }
}

module.exports = Token;
