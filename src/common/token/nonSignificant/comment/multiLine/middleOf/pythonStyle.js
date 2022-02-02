"use strict";

import NonSignificantToken from "../../../../../token/nonSignificant";

import { middleOfMultiLineCommentType } from "../../../../../types";

export default class PythonStyleMiddleOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleMiddleOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = middleOfMultiLineCommentType;

  static regularExpression = /^(?:.+?(?=###|\r\n|\r|\n)|.+$)/;

  static match(content) { return NonSignificantToken.match(PythonStyleMiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(PythonStyleMiddleOfMultiLineCommentToken, content); }
}
