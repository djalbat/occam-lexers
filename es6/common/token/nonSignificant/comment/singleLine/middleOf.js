'use strict';

const types = require('../../../../types'),
      SingleLineCommentToken = require('../../comment/singleLine');

const { singleLineCommentType } = types;

class MiddleOfSingleLineCommentToken extends SingleLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfSingleLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(MiddleOfSingleLineCommentToken, content); }
}

const type = singleLineCommentType;

Object.assign(MiddleOfSingleLineCommentToken, {
  type: type
});

module.exports = MiddleOfSingleLineCommentToken;
