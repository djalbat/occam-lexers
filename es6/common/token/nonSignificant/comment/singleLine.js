'use strict';

const types = require('../../../types'),
      NonSignificantToken = require('../../../token/nonSignificant');

const { commentType } = types;

class SingleLineCommentToken extends NonSignificantToken {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(SingleLineCommentToken, content); }

  static fromMatch(match) { return NonSignificantToken.fromMatch(SingleLineCommentToken, match); }

  static fromContent(content) { return NonSignificantToken.fromContent(SingleLineCommentToken, content); }

  static fromWithinContent(content) { return NonSignificantToken.fromWithinContent(SingleLineCommentToken, content); }

  static positionWithinContent(content) { return NonSignificantToken.positionWithinContent(SingleLineCommentToken, content); }
}

const type = commentType,
      regularExpression = /^\/\/.*/;

Object.assign(SingleLineCommentToken, {
  type,
  regularExpression
});

module.exports = SingleLineCommentToken;
