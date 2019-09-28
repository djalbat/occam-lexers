'use strict';

const NonSignificantToken = require('../../../token/nonSignificant');

class MultiLineCommentToken extends NonSignificantToken {
  clone(Class, startPosition, endPosition) { return super.clone(Class, startPosition, endPosition); }

  static match(Class, content) { return NonSignificantToken.match(Class, content); }

  static fromContent(Class, content) { return NonSignificantToken.fromContent(Class, content); }
}

module.exports = MultiLineCommentToken;
