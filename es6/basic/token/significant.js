'use strict';

var Token = require('../../common/token');

class SignificantToken extends Token {
  constructor(str) {
    var line = null;
    
    super(str, line);
  }
  
  static fromContent(content) {
    var str = content,  ///
        significantToken = new SignificantToken(str);
    
    return significantToken;
  }
}

module.exports = SignificantToken;
