'use strict';

var SignificantToken = require('./significant');

class ErrorToken extends SignificantToken {
  static fromContent(content, line) {
    var str = content,  ///
        type = SignificantToken.types.ERROR,
        errorToken = new ErrorToken(str, line, type);

    return errorToken;
  }
}

module.exports = ErrorToken;
