"use strict";

import StringLiteralToken from "../../significant/stringLiteral";

export default class SinglyQuotedStringLiteralToken extends StringLiteralToken {
  clone(startPosition, endPosition) { return super.clone(SinglyQuotedStringLiteralToken, startPosition, endPosition); }

  static regularExpression = /^'(?:\\[^\s]|[^'\\\r\n])*'/;

  static match(content) { return StringLiteralToken.match(SinglyQuotedStringLiteralToken, content); }

  static fromContent(content) { return StringLiteralToken.fromContent(SinglyQuotedStringLiteralToken, content); }
}
