'use strict';

const types = require('../../../types'),
      StringLiteralToken = require('../../significant/stringLiteral');

const { stringLiteralType } = types;

class SinglyQuotedStringLiteralToken extends StringLiteralToken {
  clone(startPosition, endPosition) { return super.clone(SinglyQuotedStringLiteralToken, startPosition, endPosition); }

  static match(content) { return StringLiteralToken.match(SinglyQuotedStringLiteralToken, content); }

  static fromContent(content) { return StringLiteralToken.fromContent(SinglyQuotedStringLiteralToken, content); }
}

const type = stringLiteralType, ///
      regularExpression = /^'(?:\\.|[^'])*'/;

Object.assign(SinglyQuotedStringLiteralToken, {
  type,
  regularExpression
});

module.exports = SinglyQuotedStringLiteralToken;
