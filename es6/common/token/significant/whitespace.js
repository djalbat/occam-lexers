'use strict';

const types = require('../../types'),
      SignificantToken = require('../significant');

const { whitespaceType } = types;

class WhitespaceToken extends SignificantToken {
  asHTML(filePath) {
    const html = this.innerHTML;  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(WhitespaceToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(WhitespaceToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(WhitespaceToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(WhitespaceToken, content); }
}

const type = whitespaceType,  ///
      regularExpression = /[\t ]+/;

Object.assign(WhitespaceToken, {
  type,
  regularExpression
});

module.exports = WhitespaceToken;
