'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { commentType } = types;

class EntireMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(EntireMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return MultiLineCommentToken.match(EntireMultiLineCommentToken, content); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(EntireMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^\/\*.*\*\//;

Object.assign(EntireMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = EntireMultiLineCommentToken;
