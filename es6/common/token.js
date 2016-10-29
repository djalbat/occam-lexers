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
}

module.exports = Token;
