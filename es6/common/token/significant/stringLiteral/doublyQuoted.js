'use strict';

const types = require('../../../types'),
      StringLiteralToken = require('../../significant/stringLiteral');

const { stringLiteralType } = types;

class DoublyQuotedStringLiteralToken extends StringLiteralToken {
  clone(startPosition, endPosition) { return super.clone(DoublyQuotedStringLiteralToken, startPosition, endPosition); }

  static fromContent(content) { return StringLiteralToken.fromContent(DoublyQuotedStringLiteralToken, content); }

  static fromWithinContent(content) { return StringLiteralToken.fromWithinContent(DoublyQuotedStringLiteralToken, content); }

  static positionWithinContent(content) { return StringLiteralToken.positionWithinContent(DoublyQuotedStringLiteralToken, content); }
}

const type = stringLiteralType, ///
      regularExpression = /"(?:\\.|[^"])*"/;

Object.assign(DoublyQuotedStringLiteralToken, {
  type,
  regularExpression
});

module.exports = DoublyQuotedStringLiteralToken;
