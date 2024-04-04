"use strict";

import EndOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/endOf";

export default class PythonStyleEndOfMultiLineCommentToken extends EndOfMultiLineCommentToken {
  static regularExpression = /^###/;

  static fromContent(content) { return EndOfMultiLineCommentToken.fromContent(PythonStyleEndOfMultiLineCommentToken, content); }
}
