'use strict';

const types = require('../../../../types'),
      SingleLineCommentToken = require('../../comment/singleLine');

const { hyperlinkInSingleLineCommentType } = types;

class HyperlinkInSingleLineCommentToken extends SingleLineCommentToken {
  asHTML() {
    const href = this.content,  ///
          className = this.type,  ///
          html = `<span class="${className}"><a href="${href}" target="_blank">${this.innerHTML}</a></span>`;

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(HyperlinkInSingleLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(HyperlinkInSingleLineCommentToken, content); }

  static fromWithinContent(content) { return SingleLineCommentToken.fromWithinContent(HyperlinkInSingleLineCommentToken, content); }

  static positionWithinContent(content) { return SingleLineCommentToken.positionWithinContent(HyperlinkInSingleLineCommentToken, content); }
}

const type = hyperlinkInSingleLineCommentType,
      regularExpression = /\bhttps?:\/\/[^\s]+/;

Object.assign(HyperlinkInSingleLineCommentToken, {
  type,
  regularExpression
});

module.exports = HyperlinkInSingleLineCommentToken;
