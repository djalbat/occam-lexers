"use strict";

import NonSignificantToken from "../../../../../token/nonSignificant";

import { startOfMultiLineCommentType } from "../../../../../types";

export default class PythonStyleStartOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleStartOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = startOfMultiLineCommentType;

  static regularExpression = /^###/;

  static match(content) { return NonSignificantToken.match(PythonStyleStartOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(PythonStyleStartOfMultiLineCommentToken, content); }
}
