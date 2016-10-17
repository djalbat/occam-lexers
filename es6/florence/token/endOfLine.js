'use strict';

var Token = require('../../common/token');

class EndOfLineToken extends Token {
  static fromNothing(line) {
    var str = '',
        type = 'EOL',
        endOfLineToken = new EndOfLineToken(str, type, line);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
