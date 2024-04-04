"use strict";

import Token from "../token";

export default class NonSignificantToken extends Token {
  static match(Class, content) {
    const significant = false,
          nonSignificantToken = Token.match(Class, content, significant);

    return nonSignificantToken;
  }

  static fromContent(Class, content) {
    const significant = false,
          nonSignificantToken = Token.fromContent(Class, content, significant);

    return nonSignificantToken;
  }

  static fromContentAndType(Class, content, type) {
    const significant = false,
          nonSignificantToken = Token.fromContentAndType(Class, content, type, significant);

    return nonSignificantToken;
  }
}
