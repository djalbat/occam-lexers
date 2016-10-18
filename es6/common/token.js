'use strict';

class Token {
  constructor(str, line) {
    this.str = str;
    this.line = line;
  }

  getString() {
    return this.str;
  }
  
  getLine() {
    return this.line;
  }
  
  getSubstring(start, end) {
    return this.str.substring(start, end);
  }

  getLength() {
    return this.str.length; ///
  }
  
  setString(str) {
    this.str = str;
  }
  
  trimFromStart(start) {
    this.str = this.str.substring(start);
  }

  trimToEnd(end) {
    this.str = this.str.substring(0, end);
  }
}

module.exports = Token;
