'use strict';

const types = require('../../types'),
      SignificantToken = require('../significant');

const { stringLiteralType } = types;

class StringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(StringLiteralToken, startPosition, endPosition); }

  getString() {
    const content = this.getContent(),
          contentLength = content.length,
          start = 1,
          end = contentLength - 1,
          string = content.substring(start, end);

    return string;
  }

  static fromContent(content) { return SignificantToken.fromContent(StringLiteralToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(StringLiteralToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(StringLiteralToken, content); }
}

const type = stringLiteralType, ///
      regularExpression = /"(?:\\.|[^"])*"/;

Object.assign(StringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StringLiteralToken;
