'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(str, line, type) {
    super(str, line);
    
    this.type = type;
  }

  clone() {
    var str = this.getString(),
        line = this.getLine(),
        type = this.getType();

    return new SignificantToken(str, line, type);
  }
  
  getType() {
    return this.type;
  }

  getHTML() {
    var str = this.getString(),
        type = this.getType(),
        html = '<span class="' + type + '">' + str + '</span>';

    return html;
  }
}

module.exports = SignificantToken;
