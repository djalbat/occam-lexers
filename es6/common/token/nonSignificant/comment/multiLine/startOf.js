"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { startOfMultiLineCommentType } from "../../../../types";

export default class StartOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(StartOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = true;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(StartOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(StartOfMultiLineCommentToken, content); }
}

const type = startOfMultiLineCommentType,  ///
      regularExpression = /^\/\*/;

Object.assign(StartOfMultiLineCommentToken, {
  type,
  regularExpression
});
