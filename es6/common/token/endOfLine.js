'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  static htmlFromContent(content) {
    var html = '';

    return html;
  }

  static fromLine(line) {
    var content = '',
        endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);
    
    return endOfLineToken;
  }
}

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
