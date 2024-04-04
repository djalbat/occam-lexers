"use strict";

import StartOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/startOf";

export default class PythonStyleStartOfMultiLineCommentToken extends StartOfMultiLineCommentToken {
  static regularExpression = /^###/;

  static fromContent(content) { return StartOfMultiLineCommentToken.fromContent(PythonStyleStartOfMultiLineCommentToken, content); }
}
