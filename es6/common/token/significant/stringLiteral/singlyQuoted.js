"use strict";

import StringLiteralToken from "../../significant/stringLiteral";

import { stringLiteralType } from "../../../types";

export default class SinglyQuotedStringLiteralToken extends StringLiteralToken {
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
