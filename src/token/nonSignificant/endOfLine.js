"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { endOfLineType } from "../../types";

export default class EndOfLineNonSignificantToken extends NonSignificantToken {
  static type = endOfLineType;

  static regularExpression = /^(?:\r\n|\r|\n)/;

  static match(content) { return NonSignificantToken.match(EndOfLineNonSignificantToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineNonSignificantToken, content); }
}
