'use strict';

const necessary = require('necessary');

const contentUtilities = require('../../utilities/content');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { sanitiseContent } = contentUtilities;

class NonSignificantToken {
  constructor(content, type, innerHTML) {
    this.content = content;
    this.type = type;
    this.innerHTML = innerHTML;
  }

  getContent() {
    return this.content;
  }
  
  getInnerHTML() {
    return this.innerHTML;
  }
  
  getContentLength() {
    const contentLength = this.content.length;

    return contentLength;
  }

  isSignificantToken() {
    const significantToken = false;

    return significantToken;
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

  clone(Class, startPosition, endPosition) {
    if (endPosition === undefined) {
      endPosition = startPosition;
      startPosition = Class;
      Class = NonSignificantToken;
    }

    let nonSignificantToken = null;

    if (startPosition !== endPosition) {
      let content = this.getContent();

      content = content.substring(startPosition, endPosition);  ///

      nonSignificantToken = Class.fromContent(content);
    }

    return nonSignificantToken;
  }

  static fromContentAndType(content, type) {
    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          nonSignificantToken = new NonSignificantToken(content, type, innerHTML);

    return nonSignificantToken;
  }

  static fromContent(Class, content) {
    if (content === undefined) {
      content = Class;
      Class = NonSignificantToken;
    }

    const sanitisedContent = sanitiseContent(content),
          { type } = Class,
          innerHTML = sanitisedContent, ///
          nonSignificantToken = new Class(content, type, innerHTML);

    return nonSignificantToken;
  }

  static fromWithinContent(Class, content) {
    if (content === undefined) {
      content = Class;
      Class = NonSignificantToken;
    }

    let nonSignificantToken = null;

    const { regularExpression } = Class,
          matches = content.match(regularExpression);

    if (matches) {
      const firstMatch = first(matches);

      content = firstMatch; ///

      nonSignificantToken = NonSignificantToken.fromContent(Class, content);
    }

    return nonSignificantToken;
  }

  static positionWithinContent(Class, content) {
    if (content === undefined) {
      content = Class;
      Class = NonSignificantToken;
    }

    const { regularExpression } = Class,
          position = content.search(regularExpression);

    return position;
  }
}

module.exports = NonSignificantToken;
