'use strict';

const Token = require('../token');

const significant = true;

class SignificantToken extends Token {
  clone(Class, startPosition, endPosition, ...remainingArguments) {
    if (endPosition === undefined) {
      endPosition = startPosition;
      startPosition = Class;
      Class = SignificantToken;
    }

    const significantToken = super.clone(Class, startPosition, endPosition, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContentAndType(Class, content, type, ...remainingArguments) {
    if (type === undefined) {
      type = content;
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromContentAndType(Class, content, type, significant, ...remainingArguments);

    return significantToken;
  }

  static match(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.match(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromMatch(Class, match, ...remainingArguments) {
    if (match === undefined) {
      match = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromMatch(Class, match, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContent(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromContent(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromWithinContent(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromWithinContent(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static positionWithinContent(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const position = Token.positionWithinContent(Class, content, ...remainingArguments) ;

    return position;
  }
}

module.exports = SignificantToken;
