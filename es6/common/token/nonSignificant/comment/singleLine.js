'use strict';

const NonSignificantToken = require('../../../token/nonSignificant');

class SingleLineCommentToken extends NonSignificantToken {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }

  static fromWithinContent(Class, content) { return NonSignificantToken.fromWithinContent(Class, content); }

  static positionWithinContent(Class, content) { return NonSignificantToken.positionWithinContent(Class, content); }
}

module.exports = SingleLineCommentToken;
