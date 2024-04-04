"use strict";

import { stringUtilities } from "necessary";

import { sanitiseContent } from "./utilities/content";
import { commentType, endOfLineType, whitespaceType } from "./types";

const { strlen } = stringUtilities;

export default class Token {
  constructor(type, content, significant) {
    this.type = type;
    this.content = content;
    this.significant = significant;
  }

  getType() {
    return this.type;
  }

  getContent() {
    return this.content;
  }
  
  getContentLength(naive = false) {
    const contentLength = naive ?
                            this.content.length :
                              strlen(this.content); ///

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

  match(token) {
    let matches = false;

    if (token !== null) {
      const type = token.getType(),
            content = token.getContent(),
            significant = token.isSignificant();

      matches = ((this.type === type) && (this.content === content) && (this.significant === significant));
    }

    return matches;
  }

  asHTML() {
    const className = this.type, ///
          sanitisedContent = sanitiseContent(this.content),
          html = `<span class="${className}">${sanitisedContent}</span>`;

    return html;
  }

  static fromContent(Class, content, significant, ...remainingArguments) {
    const { type } = Class,
          token = new Class(type, content, significant, ...remainingArguments);

    return token;
  }

  static fromContentAndType(Class, content, type, significant, ...remainingArguments) { return new Class(type, content, significant, ...remainingArguments); }
}
