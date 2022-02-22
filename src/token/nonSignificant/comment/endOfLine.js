"use strict";

import NonSignificantToken from "../../../token/nonSignificant";

import { endOfLineCommentType } from "../../../types";

export default class EndOfLineNonCommentSignificantToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(EndOfLineNonCommentSignificantToken, startPosition, endPosition); }

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

  static match(content) { return NonSignificantToken.match(EndOfLineNonCommentSignificantToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineNonCommentSignificantToken, content); }
}
