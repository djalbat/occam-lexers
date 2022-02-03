"use strict";

import MiddleOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/middleOf";

export default class PythonStyleMiddleOfMultiLineCommentToken extends MiddleOfMultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(PythonStyleMiddleOfMultiLineCommentToken, startPosition, endPosition); }

  static regularExpression = /^(?:[^\r\n]+?(?=###)|[^\r\n]+)/;

  static match(content) { return MiddleOfMultiLineCommentToken.match(PythonStyleMiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return MiddleOfMultiLineCommentToken.fromContent(PythonStyleMiddleOfMultiLineCommentToken, content); }
}
