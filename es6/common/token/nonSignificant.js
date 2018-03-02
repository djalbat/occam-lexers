'use strict';

const Token = require('../token');

const significant = false;

class NonSignificantToken extends Token {
  isCommentToken() {
    const commentToken = false;

    return commentToken;
  }

  static fromContent(Class, content) { return Token.fromContent(Class, content, significant); }

  static fromWithinContent(Class, content) { return Token.fromWithinContent(Class, content, significant); }

  static positionWithinContent(Class, content) { return Token.positionWithinContent(Class, content) ; }
}

module.exports = NonSignificantToken;
