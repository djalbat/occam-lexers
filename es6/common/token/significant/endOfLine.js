'use strict';

const SignificantToken = require('../significant');

class EndOfLineSignificantToken extends SignificantToken {
  isEndOfLineToken() {
    const endOfLineToken = true;

    return endOfLineToken;
  }

  asHTML(filePath) {
    const html = '\n';  ///
    
    return html;
  }

  clone(startPosition, endPosition) { return super.clone(EndOfLineSignificantToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(EndOfLineSignificantToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(EndOfLineSignificantToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(EndOfLineSignificantToken, content); }
}

const type = 'endOfLine',
      regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineSignificantToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfLineSignificantToken;
