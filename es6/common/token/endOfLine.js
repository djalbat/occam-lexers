'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  static fromNothing(line) {
    var str = '',
        type = EndOfLineToken.type,
        endOfLineToken = new EndOfLineToken(str, line, type);
    
    return endOfLineToken;
  }
}

EndOfLineToken.type = 'end_of_line';

module.exports = EndOfLineToken;
