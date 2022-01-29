"use strict";

import { characters, arrayUtilities } from "necessary";

import SignificantToken from "../../token/significant";

import { endOfLineType } from "../../types";
import { sanitiseContent } from "../../../utilities/content";

const { first } = arrayUtilities,
      { NEW_LINE_CHARACTER } = characters;

export default class EndOfLineSignificantToken extends SignificantToken {
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

  clone(startPosition, endPosition) { return super.clone(EndOfLineSignificantToken, startPosition, endPosition, this.index); }

  static match(content) {
    let endOfLineSignificantToken = null;

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
              significant = true,
              { index } = matches;

        endOfLineSignificantToken = new EndOfLineSignificantToken(type, content, innerHTML, significant, index);
      }
    }

    return endOfLineSignificantToken;
  }
}
