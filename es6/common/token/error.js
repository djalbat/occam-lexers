'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  constructor(string, line, message) {
    super(string, line, message);

    this.message = message;
  }

  getHTML() {
    var innerHTML = this.getString(), ///
        className = 'error',  ///
        dataMessage = this.message,
        html = `<span class="${className}" data-message="${dataMessage}">${innerHTML}</span>`;

    return html;
  }

  static fromContent(content, line, message) {
    var string = content,  ///
        errorToken = new ErrorToken(string, line, message);

    return errorToken;
  }
}

module.exports = ErrorToken;
