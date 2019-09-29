'use strict';

const types = require('../../../../../common/types'),
      NonSignificantToken = require('../../../../../common/token/nonSignificant');

const { commentType } = types;

class EntireMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(EntireMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(EntireMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EntireMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^###.*###/;

Object.assign(EntireMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = EntireMultiLineCommentToken;
