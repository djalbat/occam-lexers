"use strict";

import NonSignificantToken from "../../token/nonSignificant";

import { whitespaceType } from "../../types";

export default class WhitespaceToken extends NonSignificantToken {
  asHTML() {
    const html = this.innerHTML;  ///

    return html;
  }

  clone(startPosition, endPosition) { return super.clone(WhitespaceToken, startPosition, endPosition); }

  static type = whitespaceType;

  static regularExpression = /^[\t ]+/;

  static match(content) { return NonSignificantToken.match(WhitespaceToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(WhitespaceToken, content); }
}
