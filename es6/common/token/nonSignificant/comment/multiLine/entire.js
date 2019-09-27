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

  static fromMatch(match) { return MultiLineCommentToken.fromMatch(EntireMultiLineCommentToken, match); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(EntireMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(EntireMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(EntireMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /^\/\*.*\*\//;

Object.assign(EntireMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = EntireMultiLineCommentToken;
