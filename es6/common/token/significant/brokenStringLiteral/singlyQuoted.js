"use strict";

const types = require("../../../types"),
      SignificantToken = require("../../significant");

const { brokenStringLiteralType } = types;

class SinglyQuotedBrokenStringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(SinglyQuotedBrokenStringLiteralToken, startPosition, endPosition); }

  static match(content) { return SignificantToken.match(SinglyQuotedBrokenStringLiteralToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(SinglyQuotedBrokenStringLiteralToken, content); }
}

const type = brokenStringLiteralType, ///
      regularExpression = /^'/;

Object.assign(SinglyQuotedBrokenStringLiteralToken, {
  type,
  regularExpression
});

module.exports = SinglyQuotedBrokenStringLiteralToken;
