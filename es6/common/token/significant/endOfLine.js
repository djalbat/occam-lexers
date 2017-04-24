'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken); }
  
  getHTML() {
    const html = '';
    
    return html;
  }

  static fromLine(line) {
    const content = null,
          type = SignificantToken.types.endOfLine,
          endOfLineToken = new EndOfLineToken(content, line, type);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
