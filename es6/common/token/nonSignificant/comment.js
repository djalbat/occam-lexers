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

  static fromContentAndLine(Class = CommentToken, content, line) { return NonSignificantToken.fromContentAndLine(Class, content, line); }

  static htmlFromContent(content) {
    const sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
