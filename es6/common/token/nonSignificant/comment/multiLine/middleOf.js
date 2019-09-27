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

  static fromMatch(match) { return MultiLineCommentToken.fromMatch(MiddleOfMultiLineCommentToken, match); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(MiddleOfMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(MiddleOfMultiLineCommentToken, content); }
}

const type = commentType;  ///

Object.assign(MiddleOfMultiLineCommentToken, {
  type
});

module.exports = MiddleOfMultiLineCommentToken;
