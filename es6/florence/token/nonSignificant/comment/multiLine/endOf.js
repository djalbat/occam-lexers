'use strict';

const types = require('../../../../../common/types'),
      NonSignificantToken = require('../../../../../common/token/nonSignificant');

const { commentType } = types;

class EndOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(EndOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(EndOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^###/;

Object.assign(EndOfMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = EndOfMultiLineCommentToken;
