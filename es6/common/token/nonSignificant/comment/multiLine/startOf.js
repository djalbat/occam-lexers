'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { commentType } = types;

class StartOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(StartOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = true;

    return inComment;
  }

  static match(content) { return MultiLineCommentToken.match(StartOfMultiLineCommentToken, content); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(StartOfMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^\/\*/;

Object.assign(StartOfMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = StartOfMultiLineCommentToken;
