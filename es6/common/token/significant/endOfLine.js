'use strict';

const SignificantToken = require('../significant');

class EndOfLineToken extends SignificantToken {
  getLength() {
    const length = 0; ///

    return length;
  }

  asHTML(filePath) {
    const html = '';  ///
    
    return html;
  }

  clone(startPosition, endPosition) { return EndOfLineToken.clone(this, startPosition, endPosition); }

  static clone(endOfLineToken, startPosition = 0, endPosition = endOfLineToken.getLength()) {
    let clonedEndOfLineToken = null;

    if (startPosition !== endPosition) {
      const content = null,
            line = endOfLineToken.getLine(),
            type = endOfLineToken.getType(),

      clonedEndOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);
    }

    return clonedEndOfLineToken;
  }

  static fromLine(line) {
    const content = null, ///
          { type } = EndOfLineToken,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);
    
    return endOfLineToken;
  }

  static fromContentLineAndType(content, line, type) {
    const innerHTML = null, ///
          endOfLineToken = new EndOfLineToken(content, line, type, innerHTML);

    return endOfLineToken;
  }
}

const type = 'endOfLine';

Object.assign(EndOfLineToken, {
  type: type
});

module.exports = EndOfLineToken;
