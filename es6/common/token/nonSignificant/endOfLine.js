"use strict";

import { arrayUtilities } from "necessary";

import NonSignificantToken from "../../token/nonSignificant";

import { endOfLineType } from "../../types";
import { sanitiseContent } from "../../../utilities/content";

const { first } = arrayUtilities;

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
          matches = content.match(regularExpression);

    if (matches !== null) {
      const firstMatch = first(matches);

      content = firstMatch; ///

      const contentLength = content.length;

      if (contentLength > 0) {
        const type = endOfLineType, ///
              sanitisedContent = sanitiseContent(content),
              innerHTML = sanitisedContent, ///
              significant = false,
              { index } = matches;

        endOfLineNonSignificantToken = new EndOfLineNonSignificantToken(type, content, innerHTML, significant, index);
      }
    }

    return endOfLineNonSignificantToken;
  }
}
