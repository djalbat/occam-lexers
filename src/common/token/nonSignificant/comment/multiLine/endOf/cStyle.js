"use strict";

import EndOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/endOf";

export default class CStyleEndOfMultiLineCommentToken extends EndOfMultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(CStyleEndOfMultiLineCommentToken, startPosition, endPosition); }

  static regularExpression = /^\*\//;

  static match(content) { return EndOfMultiLineCommentToken.match(CStyleEndOfMultiLineCommentToken, content); }

  static fromContent(content) { return EndOfMultiLineCommentToken.fromContent(CStyleEndOfMultiLineCommentToken, content); }
}
