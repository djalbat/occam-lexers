'use strict';

const types = require('../../../../types'),
      SingleLineCommentToken = require('../../comment/singleLine');

const { hyperlinkSingleLineCommentType } = types;

class HyperlinkSingleLineCommentToken extends SingleLineCommentToken {
  asHTML(filePath) {
    const href = this.content,  ///
          className = this.type,  ///
          html = `<span class="${className}"><a href="${href}" target="_blank">${this.innerHTML}</a></span>`;

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(HyperlinkSingleLineCommentToken, startPosition, endPosition); }

  static fromContent(content) { return SingleLineCommentToken.fromContent(HyperlinkSingleLineCommentToken, content); }

  static fromWithinContent(content) { return SingleLineCommentToken.fromWithinContent(HyperlinkSingleLineCommentToken, content); }

  static positionWithinContent(content) { return SingleLineCommentToken.positionWithinContent(HyperlinkSingleLineCommentToken, content); }
}

const type = hyperlinkSingleLineCommentType,
      regularExpression = /https?:\/\/[^\s]+/;

Object.assign(HyperlinkSingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkSingleLineCommentToken;
