'use strict';

var SignficantToken = require('./significant');

class ErrorToken extends SignficantToken {
  static fromContent(content, line) {
    var str = content,  ///
        type = 'error',
        errorToken = new ErrorToken(str, line, type);

    return errorToken;
  }
}

module.exports = ErrorToken;
