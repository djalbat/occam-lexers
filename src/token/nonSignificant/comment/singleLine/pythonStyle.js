"use strict";

import SingleLineCommentToken from "../../../../token/nonSignificant/comment/singleLine";

export default class PythonStyleSingleLineCommentToken extends SingleLineCommentToken {
  static regularExpression = /^#[^\r\n]*/;

  static match(content) { return SingleLineCommentToken.match(PythonStyleSingleLineCommentToken, content); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(PythonStyleSingleLineCommentToken, content); }
}
