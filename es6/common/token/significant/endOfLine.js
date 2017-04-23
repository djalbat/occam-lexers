'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken); }

  static fromLine(line) {
    const content = '',
          type = SignificantToken.types.endOfLine,
          endOfLineToken = SignificantToken.fromContentLineAndType(content, line, type, EndOfLineToken);
    
    return endOfLineToken;
  }

  static htmlFromContent(content) {
    const html = '';  ///

    return html;
  }
}

module.exports = EndOfLineToken;
