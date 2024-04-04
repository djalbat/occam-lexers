"use strict";

import StringLiteralToken from "../../significant/stringLiteral";

export default class SinglyQuotedStringLiteralToken extends StringLiteralToken {
  static regularExpression = /^'(?:\\[^\s]|[^'\\\r\n])*'/;

  static fromContent(content) { return StringLiteralToken.fromContent(SinglyQuotedStringLiteralToken, content); }
}
