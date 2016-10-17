'use strict';

class Token {
  constructor(str, type, line) {
    this.str = str;
    this.type = type;
    this.line = line;
  }

  getString() {
    return this.str;
  }
  
  getType() {
    return this.type;
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

  getHTML() {
    var innerHTML = this.str, ///
        className = this.type,  ///
        html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }
}

module.exports = Token;
