"use strict";

import StringLiteralToken from "../../significant/stringLiteral";

export default class DoublyQuotedStringLiteralToken extends StringLiteralToken {
  static regularExpression = /^"(?:\\[^\s]|[^"\\\r\n])*"/;

  static match(content) { return StringLiteralToken.match(DoublyQuotedStringLiteralToken, content); }

  static fromContent(content) { return StringLiteralToken.fromContent(DoublyQuotedStringLiteralToken, content); }
}
