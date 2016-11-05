'use strict';

class Token {
  constructor(content, line) {
    this.content = content;
    this.line = line;
  }

  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }
  
  getLength() {
    return this.content.length; ///
  }
  
  setContent(content) {
    this.content = content;
  }
  
  trimFromStart(start) {
    this.content = this.content.substr(start);
  }

  trimToEnd(end) {
    this.content = this.content.substr(0, end);
  }

  static withStartTrimmed(token, start) {
    var clonedToken = token.clone(),
        tokenWithStartTrimmed = clonedToken;  ///

    tokenWithStartTrimmed.trimFromStart(start);

    return tokenWithStartTrimmed;
  }

  static withEndTrimmed(token, end) {
    var clonedToken = token.clone(),
        tokenWithEndTrimmed = clonedToken;  ///

    tokenWithEndTrimmed.trimToEnd(end);

    return tokenWithEndTrimmed;
  }
}

module.exports = Token;
