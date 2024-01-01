"use strict";

import SignificantToken from "../../token/significant";

import { substring } from "../../utilities/string";
import { stringLiteralType } from "../../types";

export default class StringLiteralToken extends SignificantToken {
  getString() {
    const content = this.getContent(),
          contentLength = this.getContentLength(),
          start = 1,
          end = contentLength - 1,
          string = substring(content, start, end);

    return string;
  }

  static type = stringLiteralType;

  static match(Class, content) { return SignificantToken.match(Class, content); }

  static fromContent(Class, content) { return SignificantToken.fromContent(Class, content); }
}
