"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { singleLineCommentType } from "../../../../types";

export default class PythonStyleSingleLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleSingleLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = singleLineCommentType;

  static regularExpression = /^#(?:.*?(?=\r\n|\r|\n)|.*)/;

  static match(content) { return NonSignificantToken.match(PythonStyleSingleLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(PythonStyleSingleLineCommentToken, content); }
}
