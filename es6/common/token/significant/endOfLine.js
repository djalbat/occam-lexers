'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(EndOfLineToken, this, startPosition, endPosition); }
  
  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(EndOfLineToken, content, line, type); }
  
  asHTML(filePath) {
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

const type = 'endOfLine';

Object.assign(EndOfLineToken, {
  type: type
});

module.exports = EndOfLineToken;
