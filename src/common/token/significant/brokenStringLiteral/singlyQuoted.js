"use strict";

import SignificantToken from "../../significant";

import { brokenStringLiteralType } from "../../../types";

export default class SinglyQuotedBrokenStringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(SinglyQuotedBrokenStringLiteralToken, startPosition, endPosition); }

  static type = brokenStringLiteralType;

  static regularExpression = /^'/;

  static match(content) { return SignificantToken.match(SinglyQuotedBrokenStringLiteralToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(SinglyQuotedBrokenStringLiteralToken, content); }
}
