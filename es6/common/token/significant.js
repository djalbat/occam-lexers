'use strict';

var Token = require('../token');

class SignificantToken extends Token {
  constructor(content, line, type, updateHTML = true) {
    super(content, line, false);  ///
    
    this.type = type;

    if (updateHTML) {
      this.updateHTML();
    }
  }

  clone(Class) {
    Class = Class || SignificantToken;
    
    var content = this.getContent(),
        line = this.getLine(),
        type = this.getType(),
        significantToken = new Class(content, line, type);
    
    return significantToken;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }
  
  updateHTML() {
    var content = this.getContent(),
        type = this.type,
        innerHTML = content, ///
        className = type,  ///
        sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
        html = `<span class="${className}">${sanitisedInnerHTML}</span>`;

    this.setHTML(html);
  }
}

SignificantToken.types = {
  string : 'string',
  endOfLine : 'endOfLine',
  whitespace : 'whitespace'
};

module.exports = SignificantToken;
