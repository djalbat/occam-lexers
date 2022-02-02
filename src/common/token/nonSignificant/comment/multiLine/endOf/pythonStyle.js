"use strict";

import NonSignificantToken from "../../../../../token/nonSignificant";

import { endOfMultiLineCommentType } from "../../../../../types";

export default class PythonStyleEndOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleEndOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = endOfMultiLineCommentType;

  static regularExpression = /^###/;

  static match(content) { return NonSignificantToken.match(PythonStyleEndOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(PythonStyleEndOfMultiLineCommentToken, content); }
}
