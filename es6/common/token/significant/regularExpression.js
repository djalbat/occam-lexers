"use strict";

import SignificantToken from "../../token/significant";

import { regularExpressionType } from "../../types";

class RegularExpressionToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(RegularExpressionToken, startPosition, endPosition); }

  static match(content) { return SignificantToken.match(RegularExpressionToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(RegularExpressionToken, content); }
}

const type = regularExpressionType, ///
      regularExpression = /^\/(?:\\.|[^\/])*\//;

Object.assign(RegularExpressionToken, {
  type,
  regularExpression
});

module.exports = RegularExpressionToken;
