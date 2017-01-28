'use strict';

var SignificantToken = require('./significant');

class EndOfLineToken extends SignificantToken {
  toPosition(position) { return SignificantToken.toPosition(this, position, EndOfLineToken) }

  fromPosition(position) { return SignificantToken.fromPosition(this, position, EndOfLineToken) }

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
