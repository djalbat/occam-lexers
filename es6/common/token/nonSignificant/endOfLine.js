"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { endOfLineType } from "../../types";
import { sanitiseContent } from "../../../utilities/content";

export default class EndOfLineNonSignificantToken extends NonSignificantToken {
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

  clone(startPosition, endPosition) { return super.clone(EndOfLineNonSignificantToken, startPosition, endPosition, this.index); }

  static match(content) {
    let endOfLineNonSignificantToken = null;

    const regularExpression = /\r\n|\r|\n/,
          match = content.match(regularExpression);

    if (match !== null) {
      const { index } = match;

      content = match[0]; ///

      const contentLength = content.length;

      if (contentLength > 0) {
        const type = endOfLineType, ///
              sanitisedContent = sanitiseContent(content),
              innerHTML = sanitisedContent, ///
              significant = false;

        endOfLineNonSignificantToken = new EndOfLineNonSignificantToken(type, content, innerHTML, significant, index);
      }
    }

    return endOfLineNonSignificantToken;
  }
}
