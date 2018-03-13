'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { multiLineCommentType } = types;

class MiddleOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content); }
}

const type = multiLineCommentType;  ///

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type
});

module.exports = MiddleOfMultiLineCommentToken;
