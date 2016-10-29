'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  constructor(str, line, message) {
    super(str, line, message);

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
    var str = content,  ///
        errorToken = new ErrorToken(str, line, message);

    return errorToken;
  }
}

module.exports = ErrorToken;
