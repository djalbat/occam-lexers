"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { whitespaceType } from "../../types";

class WhitespaceToken extends NonSignificantToken {
  asHTML() {
    const html = this.innerHTML;  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(WhitespaceToken, startPosition, endPosition); }

  static match(content) { return NonSignificantToken.match(WhitespaceToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(WhitespaceToken, content); }
}

const type = whitespaceType,  ///
      regularExpression = /^[\t ]+/;

Object.assign(WhitespaceToken, {
  type,
  regularExpression
});

module.exports = WhitespaceToken;
