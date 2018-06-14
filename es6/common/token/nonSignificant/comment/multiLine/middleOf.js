'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { middleOfMultiLineCommentType } = types;

class MiddleOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content); }

  static fromStringLiteralToken(stringLiteralToken) {
    const content = stringLiteralToken.getContent(),
          middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(content);

    return middleOfMultiLineCommentToken;
  }
}

const type = middleOfMultiLineCommentType;  ///

Object.assign(MiddleOfMultiLineCommentToken, {
  type
});

module.exports = MiddleOfMultiLineCommentToken;
