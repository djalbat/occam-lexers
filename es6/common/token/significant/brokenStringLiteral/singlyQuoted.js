"use strict";

import SignificantToken from "../../significant";

import { brokenStringLiteralType } from "../../../types";

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
