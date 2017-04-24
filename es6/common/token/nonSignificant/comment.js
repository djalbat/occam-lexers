'use strict';

const util = require('../../../util'),
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

  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, CommentToken); }

  static clone(token, startPosition, endPosition, Class = CommentToken) { return NonSignificantToken.clone(token, startPosition, endPosition, Class) }

  static fromContentAndLine(content, line, Class = CommentToken) { return NonSignificantToken.fromContentAndLine(content, line, Class); }

  static htmlFromContent(content) {
    const sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
