"use strict";

import StartOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/startOf";

export default class CStyleStartOfMultiLineCommentToken extends StartOfMultiLineCommentToken {
  static regularExpression = /^\/\*/;

  static match(content) { return StartOfMultiLineCommentToken.match(CStyleStartOfMultiLineCommentToken, content); }

  static fromContent(content) { return StartOfMultiLineCommentToken.fromContent(CStyleStartOfMultiLineCommentToken, content); }
}
