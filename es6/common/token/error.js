'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  constructor(content, line, message) {
    super(content, line, message);

    this.message = message;
  }
  
  clone() {
    var content = this.getContent(),
        line = this.getLine(),
        message = this.getMessage(),
        errorToken = new ErrorToken(content, line, message);
    
    return errorToken;
  }
  
  getMessage() {
    return this.message;
  }

  getHTML() {
    var content = this.getContent(),
        innerHTML = content, ///
        className = 'error',  ///
        message = this.message,
        html = `<span class="${className}" data-message="${message}">${innerHTML}</span>`;

    return html;
  }
}

module.exports = ErrorToken;
