"use strict";

const types = require("../../../types"),
      NonSignificantToken = require("../../../token/nonSignificant");

const { singleLineCommentType } = types;

class SingleLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(SingleLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(SingleLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(SingleLineCommentToken, content); }
}

const type = singleLineCommentType,
      regularExpression = /^\/\/.*/;

Object.assign(SingleLineCommentToken, {
  type,
  regularExpression
});

module.exports = SingleLineCommentToken;
