"use strict";

import MiddleOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/middleOf";

export default class PythonStyleMiddleOfMultiLineCommentToken extends MiddleOfMultiLineCommentToken {
  static regularExpression = /^(?:[^\r\n]+?(?=###)|[^\r\n]+)/;

  static fromContent(content) { return MiddleOfMultiLineCommentToken.fromContent(PythonStyleMiddleOfMultiLineCommentToken, content); }
}
