"use strict";

import SingleLineCommentToken from "../../../../token/nonSignificant/comment/singleLine";

export default class CStyleSingleLineCommentToken extends SingleLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(CStyleSingleLineCommentToken, startPosition, endPosition); }

  static regularExpression = /^\/\*[^\r\n]*/;

  static match(content) { return SingleLineCommentToken.match(CStyleSingleLineCommentToken, content); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(CStyleSingleLineCommentToken, content); }
}
