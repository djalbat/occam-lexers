'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { multiLineCommentType } = types;

class EndOfMultiLineCommentToken extends MultiLineCommentToken {
  clone(startPosition, endPosition) { return super.clone(EndOfMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(EndOfMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(EndOfMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(EndOfMultiLineCommentToken, content); }
}

const type = multiLineCommentType,  ///
      regularExpression = /\*\//;

Object.assign(EndOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfMultiLineCommentToken;
