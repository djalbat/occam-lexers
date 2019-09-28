'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { commentType } = types;

class MiddleOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = true;

    return inComment;
  }

  static match(content) { return MultiLineCommentToken.match(MiddleOfMultiLineCommentToken, content); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^.*/;

Object.assign(MiddleOfMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = MiddleOfMultiLineCommentToken;
