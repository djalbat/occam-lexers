'use strict';

const SignificantToken = require('../../token/significant');

class StringLiteralToken extends SignificantToken {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  getString() {
    const content = this.getContent(),
          contentLength = content.length,
          start = 1,
          end = contentLength - 1,
          string = content.substring(start, end);

    return string;
  }

  static match(Class, content) { return SignificantToken.match(Class, content); }

  static fromContent(Class, content) { return SignificantToken.fromContent(Class, content); }

  static fromWithinContent(Class, content) { return SignificantToken.fromWithinContent(Class, content); }

  static positionWithinContent(Class, content) { return SignificantToken.positionWithinContent(Class, content); }
}

module.exports = StringLiteralToken;
