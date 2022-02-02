"use strict";

import NonSignificantToken from "../../../../../token/nonSignificant";

import { endOfMultiLineCommentType } from "../../../../../types";

export default class CStyleEndOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(CStyleEndOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = endOfMultiLineCommentType;

  static regularExpression = /^\*\//;

  static match(content) { return NonSignificantToken.match(CStyleEndOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(CStyleEndOfMultiLineCommentToken, content); }
}
