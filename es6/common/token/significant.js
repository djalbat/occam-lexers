'use strict';

const necessary = require('necessary');

const contentUtilities = require('../../utilities/content');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { sanitiseContent } = contentUtilities;

class SignificantToken {
  constructor(content, type, innerHTML) {
    this.content = content;
    this.type = type;
    this.innerHTML = innerHTML;
  }
  
  getContent() {
    return this.content;
  }
  
  getType() {
    return this.type;
  }

  getInnerHTML() {
    return this.innerHTML;
  }

  getContentLength() {
    const contentLength = this.content.length;

    return contentLength;
  }

  isSignificantToken() {
    const significantToken = true;

    return significantToken;
  }

  isWhitespaceToken() {
    const whitespaceToken = false;

    return whitespaceToken;
  }

  isEndOfLineToken() {
    const endOfLineToken = false;

    return endOfLineToken;
  }

  isCommentToken() {
    const commentToken = false;

    return commentToken;
  }

  asHTML(filePath) {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  clone(Class, startPosition = 0, endPosition = this.getContentLength()) {  ///
    let significantToken = null;

    if (startPosition !== endPosition) {
      let content = this.getContent();

      content = content.substring(startPosition, endPosition);  ///

      significantToken = Class.fromContent(content);
    }

    return significantToken;
  }

  static fromContentAndType(content, type) {
    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          significantToken = new SignificantToken(content, type, innerHTML);

    return significantToken;
  }

  static fromContent(Class, content) {
    const sanitisedContent = sanitiseContent(content),
          { type } = Class,
          innerHTML = sanitisedContent, ///
          significantToken = new Class(content, type, innerHTML);

    return significantToken;
  }

  static fromWithinContent(Class, content) {
    let significantToken = null;

    const { regularExpression } = Class,
          matches = content.match(regularExpression);

    if (matches) {
      const firstMatch = first(matches);

      content = firstMatch; ///

      significantToken = SignificantToken.fromContent(Class, content);
    }

    return significantToken;
  }

  static positionWithinContent(Class, content) {
    const { regularExpression } = Class,
        position = content.search(regularExpression);

    return position;
  }
}

module.exports = SignificantToken;
