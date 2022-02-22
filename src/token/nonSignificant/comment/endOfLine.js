"use strict";

import NonSignificantToken from "../../../token/nonSignificant";

import { endOfLineCommentType } from "../../../types";

export default class EndOfLineCommentNonSignificantToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(EndOfLineCommentNonSignificantToken, startPosition, endPosition); }

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

  static match(content) { return NonSignificantToken.match(EndOfLineCommentNonSignificantToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineCommentNonSignificantToken, content); }
}
