"use strict";

import SignificantToken from "../../significant";

import { brokenStringLiteralType } from "../../../types";

class DoublyQuotedBrokenStringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(DoublyQuotedBrokenStringLiteralToken, startPosition, endPosition); }

  static match(content) { return SignificantToken.match(DoublyQuotedBrokenStringLiteralToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(DoublyQuotedBrokenStringLiteralToken, content); }
}

const type = brokenStringLiteralType, ///
      regularExpression = /^"/;

Object.assign(DoublyQuotedBrokenStringLiteralToken, {
  type,
  regularExpression
});

module.exports = DoublyQuotedBrokenStringLiteralToken;
