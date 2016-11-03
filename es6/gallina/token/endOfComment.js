'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  clone() {
    var string = this.getString(),
        line = this.getLine(),
        endOfCommentToken = new EndOfCommentToken(string, line);
    
    return endOfCommentToken;
  }
  
  static position(content) {
    var position = content.search(/\*\)/);

    return position;
  }

  static fromContent(content, line) {
    var endOfCommentToken = null,
        matches = content.match(/^\*\)/);

    if (matches) {
      var firstMatch = first(matches),
          string = firstMatch; ///

      endOfCommentToken = new EndOfCommentToken(string, line);
    }

    return endOfCommentToken;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
