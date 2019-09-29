'use strict';

const types = require('../../types'),
      NonSignificantToken = require('../../token/nonSignificant');

const { brokenCommentType } = types;

class BrokenCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(BrokenCommentToken, startPosition, endPosition); }

  static match(content) { return NonSignificantToken.match(BrokenCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(BrokenCommentToken, content); }
}

const type = brokenCommentType,  ///
      regularExpression = /^\//;

Object.assign(BrokenCommentToken, {
  type,
  regularExpression
});

module.exports = BrokenCommentToken;
