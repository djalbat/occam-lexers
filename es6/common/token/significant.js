'use strict';

const Token = require('../token');

const significant = true;

class SignificantToken extends Token {
  clone(Class, startPosition, endPosition) {
    if (endPosition === undefined) {
      endPosition = startPosition;
      startPosition = Class;
      Class = SignificantToken;
    }

    const significantToken = super.clone(Class, startPosition, endPosition);

    return significantToken;
  }

  static fromContentAndType(content, type) { return Token.fromContentAndType(SignificantToken, content, type, significant); }

  static fromContent(Class, content) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromContent(Class, content, significant);

    return significantToken;
  }

  static fromWithinContent(Class, content) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromWithinContent(Class, content, significant);

    return significantToken;
  }

  static positionWithinContent(Class, content) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const position = Token.positionWithinContent(Class, content) ;

    return position;
  }
}

module.exports = SignificantToken;
