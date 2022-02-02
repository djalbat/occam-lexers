"use strict";

import NonSignificantToken from "../../../../../token/nonSignificant";

import { middleOfMultiLineCommentType } from "../../../../../types";

export default class CStyleMiddleOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(CStyleMiddleOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = middleOfMultiLineCommentType;

  static regularExpression = /^(?:.+?(?=\*\/|\r\n|\r|\n)|.+$)/;

  static match(content) { return NonSignificantToken.match(CStyleMiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(CStyleMiddleOfMultiLineCommentToken, content); }
}
