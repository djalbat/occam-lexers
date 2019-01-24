'use strict';

const types = require('../../types'),
      NonSignificantToken = require('../../token/nonSignificant');

const { whitespaceType } = types;

class WhitespaceToken extends NonSignificantToken {
  asHTML() {
    const html = this.innerHTML;  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(WhitespaceToken, startPosition, endPosition); }

  static fromContent(content) { return NonSignificantToken.fromContent(WhitespaceToken, content); }

  static fromWithinContent(content) { return NonSignificantToken.fromWithinContent(WhitespaceToken, content); }

  static positionWithinContent(content) { return NonSignificantToken.positionWithinContent(WhitespaceToken, content); }
}

const type = whitespaceType,  ///
      regularExpression = /[\t ]+/;

Object.assign(WhitespaceToken, {
  type,
  regularExpression
});

module.exports = WhitespaceToken;
