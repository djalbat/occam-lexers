'use strict';

const SignificantToken = require('../significant');

class WhitespaceToken extends SignificantToken {
  isWhitespaceToken() {
    const whitespaceToken = true;

    return whitespaceToken;
  }

  asHTML(filePath) {
    const html = this.innerHTML;  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(WhitespaceToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(WhitespaceToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(WhitespaceToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(WhitespaceToken, content); }
}

const type = 'whitespace',
      regularExpression = /[\t ]+/;

Object.assign(WhitespaceToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = WhitespaceToken;
