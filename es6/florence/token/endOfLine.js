'use strict';

var Token = require('../../common/token');

class EndOfLineToken extends Token {
  constructor(line) {
    var str = undefined;
    
    super(str, line);
  }

  getHTML() {
    var html = '<span class="endOfLine"></span>';

    return html;
  }
  
  static fromNothing(line) {
    var endOfLineToken = new EndOfLineToken(line);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
