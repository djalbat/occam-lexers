'use strict';

const NonSignificantToken = require('../nonSignificant');

class CommentToken extends NonSignificantToken {
  isCommentToken() {
    const commentToken = true;

    return commentToken;
  }

  merge(commentToken) {
    let content = this.getContent();
    
    const commentTokenContent = commentToken.getContent();

    content = `${content}${commentTokenContent}`; ///

    commentToken = NonSignificantToken.fromContent(CommentToken, content);

    return commentToken;
  }

  clone(startPosition, endPosition) { return super.clone(CommentToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(CommentToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(CommentToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(CommentToken, content); }
}

const type = 'comment';

Object.assign(CommentToken, {
  type: type
});

module.exports = CommentToken;
