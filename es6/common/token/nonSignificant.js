"use strict";

const Token = require("../token");

const significant = false;

class NonSignificantToken extends Token {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition, significant); }

  static match(Class, content) { return Token.match(Class, content, significant); }

  static fromContent(Class, content) { return Token.fromContent(Class, content, significant); }

  static fromContentAndType(Class, content, type) { return Token.fromContentAndType(Class, content, type, significant); }
}

module.exports = NonSignificantToken;
