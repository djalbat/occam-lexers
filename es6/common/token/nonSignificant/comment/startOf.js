'use strict';

const CommentToken = require('../comment');

class StartOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return super.clone(startPosition, endPosition); }

  static fromContent(content) { return CommentToken.fromContent(content); }

  static fromWithinContent(content) { return CommentToken.fromWithinContent(content); }

  static positionWithinContent(content) { return CommentToken.positionWithinContent(content); }
}

const regularExpression = /\/\*/;

Object.assign(StartOfCommentToken, {
  regularExpression: regularExpression
});

module.exports = StartOfCommentToken;
