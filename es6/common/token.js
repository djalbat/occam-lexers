'use strict';

class Token {
  constructor(string, line) {
    this.string = string;
    this.line = line;
  }

  getString() {
    return this.string;
  }
  
  getLine() {
    return this.line;
  }
  
  getSubstring(start, end) {
    return this.string.substring(start, end);
  }

  getLength() {
    return this.string.length; ///
  }
  
  setString(string) {
    this.string = string;
  }
  
  trimFromStart(start) {
    this.string = this.string.substring(start);
  }

  trimToEnd(end) {
    this.string = this.string.substring(0, end);
  }

  static withStartTrimmed(token, start) {
    var length = token.getLength();

    if (start === length) {
      return null;
    }

    var clonedToken = token.clone(),
        tokenWithStartTrimmed = clonedToken;  ///

    tokenWithStartTrimmed.trimFromStart(start);

    return tokenWithStartTrimmed;
  }

  static withEndTrimmed(token, end) {
    if (end === 0) {
      return null;
    }

    var clonedToken = token.clone(),
        tokenWithEndTrimmed = clonedToken;  ///

    tokenWithEndTrimmed.trimToEnd(end);

    return tokenWithEndTrimmed;
  }
}

module.exports = Token;
