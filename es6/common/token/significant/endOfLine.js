'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken); }

  static fromLine(line) {
    const content = '',
          endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);
    
    return endOfLineToken;
  }

  static htmlFromContent(content) {
    const html = '';  ///

    return html;
  }
}

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
