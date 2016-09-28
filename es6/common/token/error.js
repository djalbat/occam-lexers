'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  clone() {
    var str = this.getString();

    return new ErrorToken(str);
  }

  getHTML() {
    var str = this.getString(),
        html = '<span class="error">' + str + '</span>';

    return html;
  }

  static fromContent(content) {
    var str = content,  ///
        errorToken = new ErrorToken(str);

    return errorToken;
  }
}

module.exports = ErrorToken;
