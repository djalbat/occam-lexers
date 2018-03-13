'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { multiLineCommentType } = types;

class StartOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(StartOfMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(StartOfMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(StartOfMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(StartOfMultiLineCommentToken, content); }
}

const type = multiLineCommentType,  ///
      regularExpression = /\/\*/;

Object.assign(StartOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StartOfMultiLineCommentToken;
