"use strict";

import NonSignificantToken from "../../../../token/nonSignificant";

import { singleLineCommentType } from "../../../../types";

export default class CStyleSingleLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(CStyleSingleLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = singleLineCommentType;

  static regularExpression = /^\/\/(?:.*?(?=\r\n|\r|\n)|.*)/;

  static match(content) { return NonSignificantToken.match(CStyleSingleLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(CStyleSingleLineCommentToken, content); }
}
