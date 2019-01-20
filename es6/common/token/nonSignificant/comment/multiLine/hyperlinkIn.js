'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { hyperlinkInMultiLineCommentType } = types;

class HyperlinkInMultiLineCommentToken extends MultiLineCommentToken {
  asHTML() {
    const href = this.content,  ///
          className = this.type,  ///
          html = `<span class="${className}"><a href="${href}" target="_blank">${this.innerHTML}</a></span>`;

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(HyperlinkInMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(HyperlinkInMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(HyperlinkInMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(HyperlinkInMultiLineCommentToken, content); }
}

const type = hyperlinkInMultiLineCommentType,
      regularExpression = /\bhttps?:\/\/[^\s\*]+/;

Object.assign(HyperlinkInMultiLineCommentToken, {
  type,
  regularExpression
});

module.exports = HyperlinkInMultiLineCommentToken;
