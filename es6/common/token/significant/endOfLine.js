'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(EndOfLineToken, this, startPosition, endPosition); }
  
  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(EndOfLineToken, content, line, type); }
  
  asHTML() {
    const html = '';  ///
    
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
