"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { middleOfMultiLineCommentType } from "../../../../types";

export default class MiddleOfMultiLineCommentToken extends NonSignificantToken {
  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = middleOfMultiLineCommentType;

  static match(Class, content) { return NonSignificantToken.match(Class, content); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }
}
