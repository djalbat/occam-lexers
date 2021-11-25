"use strict";

import NonSignificantToken from "../../../token/nonSignificant";

import { singleLineCommentType } from "../../../types";

export default class SingleLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(SingleLineCommentToken, startPosition, endPosition); }

  isCommentPreserving() {
    const commentPreserving = false;

    return commentPreserving;
  }

  static type = singleLineCommentType;

  static regularExpression = /^\/\/.*/;

  static match(content) { return NonSignificantToken.match(SingleLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(SingleLineCommentToken, content); }
}
