"use strict";

import StartOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/startOf";

export default class PythonStyleStartOfMultiLineCommentToken extends StartOfMultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleStartOfMultiLineCommentToken, startPosition, endPosition); }

  static regularExpression = /^###/;

  static match(content) { return StartOfMultiLineCommentToken.match(PythonStyleStartOfMultiLineCommentToken, content); }

  static fromContent(content) { return StartOfMultiLineCommentToken.fromContent(PythonStyleStartOfMultiLineCommentToken, content); }
}
