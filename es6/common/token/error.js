'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  static fromContent(content, line) {
    var str = content,  ///
        type = 'error',
        errorToken = new ErrorToken(str, type, line);

    return errorToken;
  }
}

module.exports = ErrorToken;
