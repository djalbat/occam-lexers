"use strict";

import { arrayUtilities } from "necessary";

import { sanitiseContent } from "./utilities/content";
import { commentType, endOfLineType, whitespaceType } from "./types";

const { first } = arrayUtilities;

export default class Token {
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
    const typeEndOfLineType = (this.type.includes(endOfLineType)),
          endOfLineToken = typeEndOfLineType; ///

    return endOfLineToken;
  }

  isWhitespaceToken() {
    const typeWhitespaceType = (this.type === whitespaceType),
          whitespaceToken = typeWhitespaceType; ///

    return whitespaceToken;
  }

  isEqualTo(token) {
    const equalToToken = (this === token);

    return equalToToken;
  }

  match(token) {
    const type = token.getType(),
          content = token.getContent(),
          significant = token.isSignificant(),
          matches = ((this.type === type) && (this.content === content) && (this.significant === significant));

    return matches;
  }

  asHTML() {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  static match(Class, content, significant, ...remainingArguments) {
    let token = null;

    const { regularExpression } = Class,
          matches = content.match(regularExpression);

    if (matches !== null) {
      const { index } = matches;

      if (index === 0) {
        const firstMatch = first(matches);

        content = firstMatch; ///

        const contentLength = content.length;

        if (contentLength > 0) {
          const { type } = Class,
                sanitisedContent = sanitiseContent(content),
                innerHTML = sanitisedContent; ///

          token = new Class(type, content, innerHTML, significant, ...remainingArguments);
        }
      }
    }

    return token;
  }

  static fromContent(Class, content, significant, ...remainingArguments) {
    const { type } = Class,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant, ...remainingArguments);

    return token;
  }

  static fromContentAndType(Class, content, type, significant, ...remainingArguments) {
    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant, ...remainingArguments);

    return token;
  }
}
