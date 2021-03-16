"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { middleOfMultiLineCommentType } from "../../../../types";

export default class MiddleOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = true;

    return inComment;
  }

  static type = middleOfMultiLineCommentType;

  static regularExpression = /^(?:.+?(?=\*\/)|.+$)/;

  static match(content) { return NonSignificantToken.match(MiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(MiddleOfMultiLineCommentToken, content); }
}
