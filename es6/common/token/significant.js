'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(content, line, type) {
    super(content, line);
    
    this.type = type;
  }

  clone() {
    var content = this.getContent(),
        line = this.getLine(),
        type = this.getType();

    return new SignificantToken(content, line, type);
  }

  getType() {
    return this.type;
  }
  
  getHTML() {
    var content = this.getContent(),
        type = this.getType(),
        innerHTML = content, ///
        className = type,  ///
        html = `<span class="${className}">${innerHTML}</span>`;

    return html;
  }
}

SignificantToken.types = {
  WHITESPACE : 'WHITESPACE',
  END_OF_LINE : 'END_OF_LINE'
};

module.exports = SignificantToken;
