'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(str, type, line) {
    super(str);
    
    this.type = type;
    this.line = line;
  }

  clone() {
    var str = this.getString(),
        type = this.getType(),
        line = this.getLine();

    return new SignificantToken(str, type, line);
  }
  
  getType() {
    return this.type;
  }

  getLine() {
    return this.line;
  }

  getHTML() {
    var str = this.getString(),
        type = this.getType(),
        html = '<span class="' + type + '">' + str + '</span>';

    return html;
  }
}

module.exports = SignificantToken;
