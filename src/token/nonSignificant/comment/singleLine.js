"use strict";

import NonSignificantToken from "../../../token/nonSignificant";

import { singleLineCommentType } from "../../../types";

export default class SingleLineCommentToken extends NonSignificantToken {
  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = singleLineCommentType;

  static match(Class, content) { return NonSignificantToken.match(Class, content); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }
}
