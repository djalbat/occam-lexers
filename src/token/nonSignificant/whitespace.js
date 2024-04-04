"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { whitespaceType } from "../../types";

export default class WhitespaceToken extends NonSignificantToken {
  static type = whitespaceType;

  static regularExpression = /^[\t ]+/;

  static fromContent(content) { return NonSignificantToken.fromContent(WhitespaceToken, content); }
}
