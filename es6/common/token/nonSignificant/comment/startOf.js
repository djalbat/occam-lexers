'use strict';

const CommentToken = require('../comment');

class StartOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return super.clone(StartOfCommentToken, startPosition, endPosition); }

  static fromContent(content) { return CommentToken.fromContent(StartOfCommentToken, content); }

  static fromWithinContent(content) { return CommentToken.fromWithinContent(StartOfCommentToken, content); }

  static positionWithinContent(content) { return CommentToken.positionWithinContent(StartOfCommentToken, content); }
}

const type = 'comment',
      regularExpression = /\/\*/;

Object.assign(StartOfCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StartOfCommentToken;
