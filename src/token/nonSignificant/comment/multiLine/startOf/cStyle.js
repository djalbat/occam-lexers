"use strict";

import StartOfMultiLineCommentToken from "../../../../../token/nonSignificant/comment/multiLine/startOf";

export default class CStyleStartOfMultiLineCommentToken extends StartOfMultiLineCommentToken {
  static regularExpression = /^\/\*/;

  static fromContent(content) { return StartOfMultiLineCommentToken.fromContent(CStyleStartOfMultiLineCommentToken, content); }
}
