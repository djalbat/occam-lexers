'use strict';

const necessary = require('necessary');

const types = require('./types');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { commentType, middleType, multiLineType, singleLineType, endOfLineType, whitespaceType } = types;

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

  getContentLength() {
    const contentLength = this.content.length;

    return contentLength;
  }

  isSignificant() {
    return this.significant;
  }
  
  isCommentToken() {
    const typeIncludesCommentType = this.type.includes(commentType),
          commentToken = typeIncludesCommentType; ///

    return commentToken;
  }

  isEndOfLineToken() {
    const typeEndOfLineType = (this.type === endOfLineType),
          endOfLineToken = typeEndOfLineType; ///

    return endOfLineToken;
  }

  isWhitespaceToken() {
    const typeWhitespaceType = (this.type === whitespaceType),
          whitespaceToken = typeWhitespaceType; ///

    return whitespaceToken;
  }

  isMiddleOfCommentToken() {
    const typeIncludesMiddleType = this.type.includes(middleType),
          typeIncludesCommentType = this.type.includes(commentType),
          middleOfCommentToken = typeIncludesMiddleType && typeIncludesCommentType; ///

    return middleOfCommentToken;

  }

  isMultiLineCommentToken() {
    const typeIncludesCommentType = this.type.includes(commentType),
          typeIncludesMultiLineType = this.type.includes(multiLineType),
          multiLineCommentToken = typeIncludesMultiLineType && typeIncludesCommentType; ///

    return multiLineCommentToken;
  }

  isSingleLineCommentToken() {
    const typeIncludesCommentType = this.type.includes(commentType),
          typeIncludesSingleLineType = this.type.includes(singleLineType),
          singleLineCommentToken = typeIncludesSingleLineType && typeIncludesCommentType; ///

    return singleLineCommentToken;
  }

  isEqualTo(token) {
    let equalTo = false;

    const tokenSignificant = token.isSignificant();

    if (this.significant === tokenSignificant) {
      const tokenContent = token.getContent();

      if (this.content === tokenContent) {
        const tokenType = token.getType();

        if (this.type === tokenType) {
          equalTo = true;
        }
      }
    }

    return equalTo;
  }

  asHTML() {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  clone(Class, startPosition, endPosition, significant, ...remainingArguments) {
    let token = null;

    if (startPosition !== endPosition) {
      let content = this.getContent();

      content = content.substring(startPosition, endPosition);  ///

      const type = this.getType(),
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

      token = new Class(type, content, innerHTML, significant, ...remainingArguments);
    }

    return token;
  }

  static fromContentAndType(Class, content, type, significant, ...remainingArguments) {
    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant, ...remainingArguments);

    return token;
  }

  static fromContent(Class, content, significant, ...remainingArguments) {
    const { type } = Class,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant, ...remainingArguments);

    return token;
  }

  static fromWithinContent(Class, content, significant, ...remainingArguments) {
    let token = null;

    const { regularExpression } = Class,
          matches = content.match(regularExpression);

    if (matches) {
      const firstMatch = first(matches);

      content = firstMatch; ///

      const { type } = Class,
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

      token = new Class(type, content, innerHTML, significant, ...remainingArguments);
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
