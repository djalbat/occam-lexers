'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  static fromNothing(line) {
    var string = '',  ///
        type = SignificantToken.types.END_OF_LINE,
        endOfLineToken = new EndOfLineToken(string, line, type);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
