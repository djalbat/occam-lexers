"use strict";

import Token from "../token";

const significant = false;

export default class NonSignificantToken extends Token {
  static match(Class, content) { return Token.match(Class, content, significant); }

  static fromContent(Class, content) { return Token.fromContent(Class, content, significant); }

  static fromContentAndType(Class, content, type) { return Token.fromContentAndType(Class, content, type, significant); }
}
