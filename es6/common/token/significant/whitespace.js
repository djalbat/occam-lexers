'use strict';

const necessary = require('necessary');

const SignificantToken = require('../significant');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class WhitespaceToken extends SignificantToken {
  clone(startPosition, endPosition) { return SignificantToken.clone(WhitespaceToken, this, startPosition, endPosition); }

  asHTML(filePath) {
    const html = this.innerHTML;  ///

    return html;
  }

  static fromContentLineAndType(content, line, type) { return SignificantToken.fromContentLineAndType(WhitespaceToken, content, line, type); }

  static fromWithinContentAndLine(content, line) {
    let whitespaceToken = null;
    
    const matches = content.match(WhitespaceToken.regularExpression);

    if (matches) {
      const firstMatch = first(matches);
      
      content = firstMatch; ///
      
      const type = WhitespaceToken.type;

      whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, type);
    }

    return whitespaceToken;
  }

  static positionWithinContent(content) {
    const position = content.search(WhitespaceToken.regularExpression);

    return position;
  }
}

WhitespaceToken.type = 'whitespace';

WhitespaceToken.regularExpression = /[\t ]+/;

module.exports = WhitespaceToken;
