'use strict';

const CommentToken = require('../comment');

class EndOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return super.clone(startPosition, endPosition); }

  static fromContent(content) { return CommentToken.fromContent(content); }

  static fromWithinContent(content) { return CommentToken.fromWithinContent(content); }

  static positionWithinContent(content) { return CommentToken.positionWithinContent(content); }
}

const regularExpression = /\*\//;

Object.assign(EndOfCommentToken, {
  regularExpression: regularExpression
});

module.exports = EndOfCommentToken;
