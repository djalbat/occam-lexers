'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  clone() {
    var str = this.getString(),
        line = this.getLine(),
        type = this.getType();

    return new SignificantToken(str, line, type);
  }
}

module.exports = SignificantToken;
