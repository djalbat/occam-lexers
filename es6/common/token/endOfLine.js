'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  static fromNothing(line) {
    var str = '',
        type = SignificantToken.types.END_OF_LINE,
        endOfLineToken = new EndOfLineToken(str, line, type);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
