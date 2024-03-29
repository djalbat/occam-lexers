"use strict";

import EndOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/endOf";

export default class CStyleEndOfMultiLineCommentToken extends EndOfMultiLineCommentToken {
  static regularExpression = /^\*\//;

  static match(content) { return EndOfMultiLineCommentToken.match(CStyleEndOfMultiLineCommentToken, content); }

  static fromContent(content) { return EndOfMultiLineCommentToken.fromContent(CStyleEndOfMultiLineCommentToken, content); }
}
