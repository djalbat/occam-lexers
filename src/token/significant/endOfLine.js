"use strict";

import SignificantToken from "../../token/significant";

import { endOfLineType } from "../../types";

export default class EndOfLineSignificantToken extends SignificantToken {
  asHTML() {
    const html = this.innerHTML;  ///

    return html;
  }

  static type = endOfLineType;

  static regularExpression = /^(?:\r\n|\r|\n)/;

  static match(content) { return SignificantToken.match(EndOfLineSignificantToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(EndOfLineSignificantToken, content); }
}
