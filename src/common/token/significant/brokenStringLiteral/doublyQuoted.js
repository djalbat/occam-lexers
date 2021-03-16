"use strict";

import SignificantToken from "../../significant";

import { brokenStringLiteralType } from "../../../types";

export default class DoublyQuotedBrokenStringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(DoublyQuotedBrokenStringLiteralToken, startPosition, endPosition); }

  static type = brokenStringLiteralType;

  static regularExpression = /^"/;

  static match(content) { return SignificantToken.match(DoublyQuotedBrokenStringLiteralToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(DoublyQuotedBrokenStringLiteralToken, content); }
}
