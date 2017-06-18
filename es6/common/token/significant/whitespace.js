'use strict';

const arrayUtil = require('../../../util/array'),
      SignificantToken = require('../significant');

class WhitespaceToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(this, startPosition, endPosition, WhitespaceToken); }

  getHTML() {
    const html = this.innerHTML;  ///

    return html;
  }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(content, line, type, WhitespaceToken); }

  static fromWithinContentAndLine(content, line) {
    let whitespaceToken = null;
    
    const matches = content.match(/([\t ]+)/);

    if (matches) {
      const firstMatch = arrayUtil.first(matches);
      
      content = firstMatch; ///
      
      const type = WhitespaceToken.type;

      whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, type);
    }

    return whitespaceToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/[\t ]+/);

    return position;
  }
}

module.exports = WhitespaceToken;

WhitespaceToken.type = 'whitespace'; 
