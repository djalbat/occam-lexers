'use strict';

class Token {
  constructor(str) {
    this.str = str;
  }

  getString() {
    return this.str;
  }
  
  getSubstring(start, end) {
    return this.str.substring(start, end);
  }

  getLength() {
    return this.str.length; ///
  }

  trimFromStart(start) {
    this.str = this.str.substring(start);
  }

  trimToEnd(end) {
    this.str = this.str.substring(0, end);
  }
}

module.exports = Token;
