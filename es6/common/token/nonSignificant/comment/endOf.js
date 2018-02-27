'use strict';

const CommentToken = require('../comment');

class EndOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return super.clone(EndOfCommentToken, startPosition, endPosition); }

  static fromContent(content) { return CommentToken.fromContent(EndOfCommentToken, content); }

  static fromWithinContent(content) { return CommentToken.fromWithinContent(EndOfCommentToken, content); }

  static positionWithinContent(content) { return CommentToken.positionWithinContent(EndOfCommentToken, content); }
}

const type = 'comment',
      regularExpression = /\*\//;

Object.assign(EndOfCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfCommentToken;
