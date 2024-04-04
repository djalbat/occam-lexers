"use strict";

import { stringUtilities } from "necessary";

import SignificantToken from "../../token/significant";

import { stringLiteralType } from "../../types";

const { substring } = stringUtilities;

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

  static fromContent(Class, content) { return SignificantToken.fromContent(Class, content); }
}
