'use strict';

const NonSignificantToken = require('../../nonSignificant');

class MultiLineCommentToken extends NonSignificantToken {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }

  static fromWithinContent(Class, content) { return NonSignificantToken.fromWithinContent(Class, content); }

  static positionWithinContent(Class, content) { return NonSignificantToken.positionWithinContent(Class, content); }
}

module.exports = MultiLineCommentToken;
