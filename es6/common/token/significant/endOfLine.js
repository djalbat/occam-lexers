"use strict";

const types = require("../../types"),
      SignificantToken = require("../../token/significant"),
      contentUtilities = require("../../../utilities/content");

const { endOfLineType } = types,
      { sanitiseContent } = contentUtilities;

const type = endOfLineType, ///
      regularExpression = /\r\n|\r|\n/;

class EndOfLineSignificantToken extends SignificantToken {
  constructor(type, content, innerHTML, significant, index) {
    super(type, content, innerHTML, significant);

    this.index = index;
  }

  getIndex() {
    return this.index;
  }

  asHTML() {
    const html = "\n";  ///
    
    return html;
  }

  clone(startPosition, endPosition) { return super.clone(EndOfLineSignificantToken, startPosition, endPosition, this.index); }

  static match(content) {
    let endOfLineSignificantToken = null;

    const match = content.match(regularExpression);

    if (match !== null) {
      const { index } = match;

      content = match[0]; ///

      const contentLength = content.length;

      if (contentLength > 0) {
        const sanitisedContent = sanitiseContent(content),
              innerHTML = sanitisedContent, ///
              significant = true;

        endOfLineSignificantToken = new EndOfLineSignificantToken(type, content, innerHTML, significant, index);
      }
    }

    return endOfLineSignificantToken;
  }
}

module.exports = EndOfLineSignificantToken;
