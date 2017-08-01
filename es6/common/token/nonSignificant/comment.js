'use strict';

const tokenUtil = require('../../../util/token'),
      NonSignificantToken = require('../nonSignificant');

class CommentToken extends NonSignificantToken {
  merge(commentToken) {
    let content = this.getContent();
    
    const line = this.getLine(),
          commentTokenContent = commentToken.getContent();

    content += commentTokenContent;

    commentToken = CommentToken.fromContentAndLine(content, line);  ///

    return commentToken;
  }

  clone(startPosition, endPosition) { return CommentToken.clone(CommentToken, this, startPosition, endPosition); }

  static clone(Class = CommentToken, token, startPosition, endPosition) { return NonSignificantToken.clone(Class, token, startPosition, endPosition) }

  static fromContentAndLine(Class, content, line) {
    if (line === undefined) {
      line = content;
      content = Class;
      Class = CommentToken;
    }
    
    const sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          html = `<span class="comment">${innerHTML}</span>`,
          commentToken = new Class(content, line, html);

    return commentToken;
  }
}

module.exports = CommentToken;
