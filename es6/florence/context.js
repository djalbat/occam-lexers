'use strict';

class Context {
  constructor(content, inMultiLineComment) {
    this.content = content;
    this.inMultiLineComment = inMultiLineComment;

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

  isInMultiLineComment() {
    return this.inMultiLineComment;
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

  setInMultiLineComment(inMultiLineComment) {
    this.inMultiLineComment = inMultiLineComment;
  }
}

module.exports = Context;
