'use strict';

const arrayUtil = require('../../../../util/array'),
      CommentToken = require('../comment');

class EndOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, EndOfCommentToken); }

  static fromContentAndLine(content, line) { return CommentToken.fromContentAndLine(content, line, EndOfCommentToken); }

  static fromWithinContentAndLine(content, line) {
    let endOfCommentToken = null;
    
    const matches = content.match(/^\*\//);

    if (matches) {
      const firstMatch = arrayUtil.first(matches);

      content = firstMatch; ///

      endOfCommentToken = EndOfCommentToken.fromContentAndLine(content, line);
    }

    return endOfCommentToken;
  }

  static positionWithinContent(content) {
    const position = content.search(/\*\//);

    return position;
  }
}

module.exports = EndOfCommentToken;
