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

  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }

  static fromWithinContent(Class, content) { return NonSignificantToken.fromWithinContent(Class, content); }

  static positionWithinContent(Class, content) { return NonSignificantToken.positionWithinContent(Class, content); }
}

const type = 'comment';

Object.assign(CommentToken, {
  type: type
});

module.exports = CommentToken;
