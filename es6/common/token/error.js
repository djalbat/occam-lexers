'use strict';

var SignificantToken = require('./significant');

class ErrorToken extends SignificantToken {
  constructor(str, line, type, message) {
    super(str, line, type, message);

    this.message = message;
  }

  getHTML() {
    var innerHTML = this.getString(), ///
        className = this.getType(),  ///
        dataMessage = this.message,
        html = `<span class="${className}" data-message="${dataMessage}">${innerHTML}</span>`;

    return html;
  }

  static fromContent(content, line, message) {
    var str = content,  ///
        type = SignificantToken.types.ERROR,
        errorToken = new ErrorToken(str, line, type, message);

    return errorToken;
  }
}

module.exports = ErrorToken;
