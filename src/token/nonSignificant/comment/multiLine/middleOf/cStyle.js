"use strict";

import MiddleOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/middleOf";

export default class CStyleMiddleOfMultiLineCommentToken extends MiddleOfMultiLineCommentToken {
  static regularExpression = /^(?:[^\r\n\f]+?(?=\*\/)|[^\r\n\f]+)/;

  static match(content) { return MiddleOfMultiLineCommentToken.match(CStyleMiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return MiddleOfMultiLineCommentToken.fromContent(CStyleMiddleOfMultiLineCommentToken, content); }
}
