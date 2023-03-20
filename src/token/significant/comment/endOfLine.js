"use strict";

import SignificantToken from "../../../token/significant";

import { endOfLineCommentType } from "../../../types";

export default class EndOfLineCommentSignificantToken extends SignificantToken {
  asHTML() {
    const html = this.innerHTML;  ///

    return html;
  }

  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = endOfLineCommentType;

  static regularExpression = /^(?:\r\n|\r|\n)/;

  static match(content) { return SignificantToken.match(EndOfLineCommentSignificantToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(EndOfLineCommentSignificantToken, content); }
}
