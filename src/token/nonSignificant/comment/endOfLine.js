"use strict";

import NonSignificantToken from "../../../token/nonSignificant";

import { endOfLineCommentType } from "../../../types";

export default class EndOfLineCommentNonSignificantToken extends NonSignificantToken {
  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = endOfLineCommentType;

  static regularExpression = /^(?:\r\n|\r|\n)/;

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfLineCommentNonSignificantToken, content); }
}
