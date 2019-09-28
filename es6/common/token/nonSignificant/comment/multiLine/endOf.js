'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { commentType } = types;

class EndOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(EndOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return MultiLineCommentToken.match(EndOfMultiLineCommentToken, content); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(EndOfMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^.*\*\//;

Object.assign(EndOfMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = EndOfMultiLineCommentToken;
