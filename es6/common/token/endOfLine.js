'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken); }

  static fromLine(line) {
    var content = '',
        endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);
    
    return endOfLineToken;
  }

  static htmlFromContent(content) {
    var html = '';  ///

    return html;
  }
}

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
