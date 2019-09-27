'use strict';

const Token = require('../token');

const significant = false;

class NonSignificantToken extends Token {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition, significant); }

  static fromContentAndType(Class, content, type) { return Token.fromContentAndType(Class, content, type, significant); }

  static match(Class, content) { return Token.match(Class, content, significant); }

  static fromMatch(Class, match) { return Token.fromMatch(Class, match, significant); }

  static fromContent(Class, content) { return Token.fromContent(Class, content, significant); }

  static fromWithinContent(Class, content) { return Token.fromWithinContent(Class, content, significant); }

  static positionWithinContent(Class, content) { return Token.positionWithinContent(Class, content) ; }
}

module.exports = NonSignificantToken;
