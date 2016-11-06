'use strict';

var CommentToken = require('../../common/token/comment');

class StartOfCommentToken extends CommentToken {
  clone() { return super.clone(StartOfCommentToken); }

  static position(content) {
    var position = content.search(/\(\*/);

    return position;
  }

  static fromContent(content, line) {
    var startOfCommentToken = null,
        matches = content.match(/^\(\*/);

    if (matches) {
      var firstMatch = first(matches);
      
      content = firstMatch; ///

      startOfCommentToken = new StartOfCommentToken(content, line);
    }
    
    return startOfCommentToken;
  }
}

module.exports = StartOfCommentToken;

function first(array) { return array[0]; }
