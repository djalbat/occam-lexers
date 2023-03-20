"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { endOfMultiLineCommentType } from "../../../../types";

export default class EndOfMultiLineCommentToken extends NonSignificantToken {
  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = endOfMultiLineCommentType;

  static match(Class, content) { return NonSignificantToken.match(Class, content); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }
}
