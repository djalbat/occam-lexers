'use strict';

class Context {
  constructor(content, inMultilineComment) {
    this.content = content;
    this.inMultilineComment = inMultilineComment;

    this.tokens = [];
  }
  
  getTokens() {
    return this.tokens;
  }
  
  getContent() {
    return this.content;
  }
  
  getContentLength() {
    return this.content.length;
  }
  
  getContentSubstring(length) {
    return this.content.substring(0, length);
  }

  isInMultilineComment() {
    return this.inMultilineComment;
  }
  
  pushToken(token) {
    this.tokens.push(token);
  }

  setContent(content) {
    this.content = content;
  }

  chopContent(length) {
    this.content = this.content.substring(length);
  }

  setInMultilineComment(inMultilineComment) {
    this.inMultilineComment = inMultilineComment;
  }
}

module.exports = Context;
