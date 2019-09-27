'use strict';

const NonSignificantToken = require('../../../token/nonSignificant');

class MultiLineCommentToken extends NonSignificantToken {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  static match(Class, content) { return NonSignificantToken.match(Class, content); }

  static fromMatch(Class, match) { return NonSignificantToken.fromMatch(Class, match); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }

  static fromWithinContent(Class, content) { return NonSignificantToken.fromWithinContent(Class, content); }

  static positionWithinContent(Class, content) { return NonSignificantToken.positionWithinContent(Class, content); }
}

module.exports = MultiLineCommentToken;
