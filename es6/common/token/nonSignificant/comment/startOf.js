'use strict';

const arrayUtil = require('../../../../util/array'),
      CommentToken = require('../comment');

class StartOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, StartOfCommentToken); }

  static fromContentAndLine(content, line) { return CommentToken.fromContentAndLine(content, line, StartOfCommentToken); }

  static fromWithinContentAndLine(content, line) {
    let startOfCommentToken = null;
    
    const matches = content.match(/^\/\*/);

    if (matches) {
      const firstMatch = arrayUtil.first(matches);

      content = firstMatch; ///

      startOfCommentToken = StartOfCommentToken.fromContentAndLine(content, line);
    }
    
    return startOfCommentToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/\/\*/);

    return position;
  }
}

module.exports = StartOfCommentToken;
