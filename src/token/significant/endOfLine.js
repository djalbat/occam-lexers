"use strict";

import SignificantToken from "../../token/significant";

import { endOfLineType } from "../../types";

export default class EndOfLineSignificantToken extends SignificantToken {
  asHTML() {
    const content = this.getContent(),
          html = content; ///

    return html;
  }

  static type = endOfLineType;

  static regularExpression = /^(?:\r\n|\r|\n|\f)/;

  static match(content) { return SignificantToken.match(EndOfLineSignificantToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(EndOfLineSignificantToken, content); }
}
