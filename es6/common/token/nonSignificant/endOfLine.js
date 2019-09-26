'use strict';

const types = require('../../types'),
      NonSignificantToken = require('../../token/nonSignificant');

const { endOfLineType } = types;

class EndOfLineNonSignificantToken extends NonSignificantToken {
  asHTML() {
    const html = '\n';  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(EndOfLineNonSignificantToken, startPosition, endPosition); }

  static fromMatch(match) { return NonSignificantToken.fromMatch(EndOfLineNonSignificantToken, match); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineNonSignificantToken, content); }

  static fromWithinContent(content) { return NonSignificantToken.fromWithinContent(EndOfLineNonSignificantToken, content); }

  static positionWithinContent(content) { return NonSignificantToken.positionWithinContent(EndOfLineNonSignificantToken, content); }
}

const type = endOfLineType,
      regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineNonSignificantToken, {
  type,
  regularExpression
});

module.exports = EndOfLineNonSignificantToken;
