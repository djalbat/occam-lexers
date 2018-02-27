'use strict';

const NonSignificantToken = require('../nonSignificant');

class EndOfLineNonSignificantToken extends NonSignificantToken {
  isEndOfLineToken() {
    const endOfLineToken = true;

    return endOfLineToken;
  }

  asHTML(filePath) {
    const html = '\n';  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(EndOfLineNonSignificantToken, startPosition, endPosition); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineNonSignificantToken, content); }

  static fromWithinContent(content) { return NonSignificantToken.fromWithinContent(EndOfLineNonSignificantToken, content); }

  static positionWithinContent(content) { return NonSignificantToken.positionWithinContent(EndOfLineNonSignificantToken, content); }
}

const type = 'endOfLine',
      regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineNonSignificantToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfLineNonSignificantToken;
