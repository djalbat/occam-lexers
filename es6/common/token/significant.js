'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(str, line, type) {
    super(str, line);
    
    this.type = type;
  }
  
  getType() {
    return this.type;
  }
  
  clone() {
    var str = this.getString(),
        line = this.getLine(),
        type = this.getType();

    return new SignificantToken(str, line, type);
  }

  getHTML() {
    var innerHTML = this.str, ///
        className = this.type,  ///
        html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }
}

SignificantToken.types = {
  ERROR : 'ERROR',
  WHITESPACE : 'WHITESPACE',
  END_OF_LINE : 'END_OF_LINE'
};

module.exports = SignificantToken;
