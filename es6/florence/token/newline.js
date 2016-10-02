'use strict';

var Token = require('../../common/token');

class NewlineToken extends Token {
  constructor(line) {
    var str = undefined;
    
    super(str, line);
  }
  
  static fromNothing(line) {
    var newLineToken = new NewlineToken(line);
    
    return newLineToken;
  }
}

module.exports = NewlineToken;
