"use strict";

import NonSignificantToken from "../../../../../token/nonSignificant";

import { startOfMultiLineCommentType } from "../../../../../types";

export default class CStyleStartOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(CStyleStartOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = startOfMultiLineCommentType;

  static regularExpression = /^\/\*/;

  static match(content) { return NonSignificantToken.match(CStyleStartOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(CStyleStartOfMultiLineCommentToken, content); }
}
