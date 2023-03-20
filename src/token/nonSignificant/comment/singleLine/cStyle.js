"use strict";

import SingleLineCommentToken from "../../../../token/nonSignificant/comment/singleLine";

export default class CStyleSingleLineCommentToken extends SingleLineCommentToken {
  static regularExpression = /^\/\/[^\r\n]*/;

  static match(content) { return SingleLineCommentToken.match(CStyleSingleLineCommentToken, content); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(CStyleSingleLineCommentToken, content); }
}
