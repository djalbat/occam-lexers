'use strict';

const necessary = require('necessary');

const types = require('./types');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { endOfLineType, whitespaceType, commentType, multiLineCommentType, singleLineCommentType } = types;

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
    const endOfLineToken = (this.type === endOfLineType); ///

    return endOfLineToken;
  }

  isWhitespaceToken() {
    const whitespaceToken = (this.type === whitespaceType); ///

    return whitespaceToken;
  }

  isCommentToken() {
    const commentToken = this.type.includes(commentType); ///

    return commentToken;
  }

  isMultiLineCommentToken() {
    const multiLineCommentToken = this.type.includes(multiLineCommentType); ///

    return multiLineCommentToken;
  }

  isSingleLineCommentToken() {
    const singleLineCommentToken = this.type.includes(singleLineCommentType); ///

    return singleLineCommentToken;
  }

  asHTML(filePath) {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  clone(Class, startPosition, endPosition, significant) {
    let token = null;

    if (startPosition !== endPosition) {
      let content = this.getContent();

      content = content.substring(startPosition, endPosition);  ///

      const type = this.getType(),
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

      token = new Class(type, content, innerHTML, significant);
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

      const { type } = Class,
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

      token = new Class(type, content, innerHTML, significant);
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

function sanitiseContent(content) {
  const sanitisedContent = content.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

  return sanitisedContent;
}
