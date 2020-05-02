"use strict";

const types = require("../../../../types"),
      NonSignificantToken = require("../../../../token/nonSignificant");

const { middleOfMultiLineCommentType } = types;

class MiddleOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = true;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(MiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(MiddleOfMultiLineCommentToken, content); }
}

const type = middleOfMultiLineCommentType,  ///
      regularExpression = /^(?:.+?(?=\*\/)|.+$)/;

Object.assign(MiddleOfMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = MiddleOfMultiLineCommentToken;
