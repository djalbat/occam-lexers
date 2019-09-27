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

  static fromMatch(match) { return MultiLineCommentToken.fromMatch(EndOfMultiLineCommentToken, match); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(EndOfMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(EndOfMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(EndOfMultiLineCommentToken, content); }
}

const type = commentType,  ///
      regularExpression = /\*\//;

Object.assign(EndOfMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = EndOfMultiLineCommentToken;
