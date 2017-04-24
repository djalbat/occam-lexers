'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken); }
  
  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(content, line, type, EndOfLineToken); }
  
  getHTML() {
    const html = '';
    
    return html;
  }

  static fromLine(line) {
    const content = '',
          type = SignificantToken.types.endOfLine,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);
    
    return endOfLineToken;
  }
}

module.exports = EndOfLineToken;
