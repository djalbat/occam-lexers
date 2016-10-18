'use strict';

var SignificantToken = require('../../common/token/significant');

class EndOfLineToken extends SignificantToken {
  static fromNothing(line) {
    var str = '',
        type = 'EOL',
        endOfLineToken = new EndOfLineToken(str, line, type);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
