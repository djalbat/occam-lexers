'use strict';

var util = require('../../util'),
    Token = require('../token');

class SignificantToken extends Token {
  constructor(content, line, type) {
    super(content, line);
    
    this.type = type;
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
  
  getHTML() {
    var content = this.getContent(),
        type = this.getType(),
        innerHTML = content, ///
        className = type,  ///
        sanitisedInnerHTML = util.sanitise(innerHTML),
        html = `<span class="${className}">${sanitisedInnerHTML}</span>`;

    return html;
  }
}

SignificantToken.types = {
  string : 'string',
  endOfLine : 'endOfLine',
  whitespace : 'whitespace'
};

module.exports = SignificantToken;
