'use strict';

const SignificantToken = require('../../../common/token/significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken); }
  
  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(content, line, type, EndOfLineToken); }
  
  getHTML() {
    const html = '';
    
    return html;
  }

  static fromLine(line) {
    const content = '',
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);
    
    return endOfLineToken;
  }
}

EndOfLineToken.type = 'endOfLine';

module.exports = EndOfLineToken;
