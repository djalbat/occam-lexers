"use strict";

import StringLiteralToken from "../../significant/stringLiteral";

export default class DoublyQuotedStringLiteralToken extends StringLiteralToken {
  clone(startPosition, endPosition) { return super.clone(DoublyQuotedStringLiteralToken, startPosition, endPosition); }

  static regularExpression = /^"(?:\\[^\s]|[^"\\\r\n])*"/;

  static match(content) { return StringLiteralToken.match(DoublyQuotedStringLiteralToken, content); }

  static fromContent(content) { return StringLiteralToken.fromContent(DoublyQuotedStringLiteralToken, content); }
}
