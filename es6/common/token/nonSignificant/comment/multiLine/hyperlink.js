'use strict';

const types = require('../../../../types'),
      MultiLineCommentToken = require('../../comment/multiLine');

const { hyperlinkMultiLineCommentType } = types;

class HyperlinkMultiLineCommentToken extends MultiLineCommentToken {
  asHTML(filePath) {
    const href = this.content,  ///
          className = this.type,  ///
          html = `<span class="${className}"><a href="${href}" target="_blank">${this.innerHTML}</a></span>`;

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(HyperlinkMultiLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return MultiLineCommentToken.fromContent(HyperlinkMultiLineCommentToken, content); }

  static fromWithinContent(content) { return MultiLineCommentToken.fromWithinContent(HyperlinkMultiLineCommentToken, content); }

  static positionWithinContent(content) { return MultiLineCommentToken.positionWithinContent(HyperlinkMultiLineCommentToken, content); }
}

const type = hyperlinkMultiLineCommentType,
      regularExpression = /\bhttps?:\/\/[^\s\*]+/;

Object.assign(HyperlinkMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkMultiLineCommentToken;
