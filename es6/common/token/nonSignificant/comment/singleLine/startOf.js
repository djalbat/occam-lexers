'use strict';

const types = require('../../../../types'),
      SingleLineCommentToken = require('../../comment/singleLine');

const { singleLineCommentType } = types;

class StartOfSingleLineCommentToken extends SingleLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(StartOfSingleLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(StartOfSingleLineCommentToken, content); }

  static fromWithinContent(content) { return SingleLineCommentToken.fromWithinContent(StartOfSingleLineCommentToken, content); }

  static positionWithinContent(content) { return SingleLineCommentToken.positionWithinContent(StartOfSingleLineCommentToken, content); }
}

const type = singleLineCommentType,
      regularExpression = /\/\//;

Object.assign(StartOfSingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StartOfSingleLineCommentToken;
