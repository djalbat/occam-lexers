'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  getHTML() {
    var str = this.getString(),
        html = '<span class="error">' + str + '</span>';

    return html;
  }

  static fromContent(content, line) {
    var str = content,  ///
        errorToken = new ErrorToken(str, line);

    return errorToken;
  }
}

module.exports = ErrorToken;
