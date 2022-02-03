"use strict";

import EndOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/endOf";

export default class PythonStyleEndOfMultiLineCommentToken extends EndOfMultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleEndOfMultiLineCommentToken, startPosition, endPosition); }

  static regularExpression = /^###/;

  static match(content) { return EndOfMultiLineCommentToken.match(PythonStyleEndOfMultiLineCommentToken, content); }

  static fromContent(content) { return EndOfMultiLineCommentToken.fromContent(PythonStyleEndOfMultiLineCommentToken, content); }
}
