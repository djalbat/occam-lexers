'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { middleOfMultiLineCommentType } = types;

class MiddleOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content); }
}

const type = middleOfMultiLineCommentType;  ///

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type
});

module.exports = MiddleOfMultiLineCommentToken;
