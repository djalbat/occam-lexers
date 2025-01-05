"use strict";

import SignificantToken from "../../token/significant";

import { regularExpressionType } from "../../types";

export default class RegularExpressionToken extends SignificantToken {
  static type = regularExpressionType;

  static regularExpression = /^\/(?:\\[^\s]|[^\/\r\n\f])*\//;

  static match(content) { return SignificantToken.match(RegularExpressionToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(RegularExpressionToken, content); }
}
