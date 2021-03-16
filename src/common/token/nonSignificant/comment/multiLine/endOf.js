"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { endOfMultiLineCommentType } from "../../../../types";

export default class EndOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(EndOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static type = endOfMultiLineCommentType;

  static regularExpression = /^\*\//;

  static match(content) { return NonSignificantToken.match(EndOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfMultiLineCommentToken, content); }
}
