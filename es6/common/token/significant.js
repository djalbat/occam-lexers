'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(string, line, type) {
    super(string, line);
    
    this.type = type;
  }

  clone() {
    var string = this.getString(),
        line = this.getLine(),
        type = this.getType();

    return new SignificantToken(string, line, type);
  }

  getType() {
    return this.type;
  }
  
  getHTML() {
    var innerHTML = this.string, ///
        className = this.type,  ///
        html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }
}

SignificantToken.types = {
  WHITESPACE : 'WHITESPACE',
  END_OF_LINE : 'END_OF_LINE'
};

module.exports = SignificantToken;
