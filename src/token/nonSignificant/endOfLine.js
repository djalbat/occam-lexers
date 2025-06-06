"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { endOfLineType } from "../../types";

export default class EndOfLineNonSignificantToken extends NonSignificantToken {
  asHTML() {
    const content = this.getContent(),
          html = content; ///

    return html;
  }

  static type = endOfLineType;

  static regularExpression = /^(?:\r\n|\r|\n|\f)/;

  static match(content) { return NonSignificantToken.match(EndOfLineNonSignificantToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineNonSignificantToken, content); }
}
