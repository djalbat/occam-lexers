'use strict';

const util = require('../util');

class CommentTokens {
  static pass(tokensOrRemainingContent, line, context) {
    const inComment = false;  ///

    return inComment;
  }
}

module.exports = CommentTokens;
