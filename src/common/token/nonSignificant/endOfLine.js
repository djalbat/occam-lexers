"use strict";

import { characters, arrayUtilities } from "necessary";

import NonSignificantToken from "../../token/nonSignificant";

import { endOfLineType } from "../../types";
import { sanitiseContent } from "../../../utilities/content";

const { first } = arrayUtilities,
      { NEW_LINE_CHARACTER } = characters;

export default class EndOfLineNonSignificantToken extends NonSignificantToken {
  constructor(type, content, innerHTML, significant, index) {
    super(type, content, innerHTML, significant);

    this.index = index;
  }

  getIndex() {
    return this.index;
  }

  asHTML() {
    const html = NEW_LINE_CHARACTER;

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
