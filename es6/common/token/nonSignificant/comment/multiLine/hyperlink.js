'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { hyperlinkMultiLineCommentType } = types;

class HyperlinkMultiLineCommentTokenn extends MultiLineCommentToken {
  asHTML(filePath) {
    const href = this.content,  ///
          className = this.type,  ///
          html = `<span class="${className}"><a href="${href}" target="_blank">${this.innerHTML}</a></span>`;

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(HyperlinkMultiLineCommentTokenn, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(HyperlinkMultiLineCommentTokenn, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(HyperlinkMultiLineCommentTokenn, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(HyperlinkMultiLineCommentTokenn, content); }
}

const type = hyperlinkMultiLineCommentType,
      regularExpression = /https?:\/\/[^\s]+/;

Object.assign(HyperlinkMultiLineCommentTokenn, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkMultiLineCommentTokenn;
