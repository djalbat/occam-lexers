"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { startOfMultiLineCommentType } from "../../../../types";

export default class StartOfMultiLineCommentToken extends NonSignificantToken {
  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = startOfMultiLineCommentType;

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }
}
