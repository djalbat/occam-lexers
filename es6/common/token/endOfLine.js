'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  static fromNothing(line) {
    var content = '',  ///
        type = SignificantToken.types.endOfLine,
        endOfLineToken = new EndOfLineToken(content, line, type);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
