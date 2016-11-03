'use strict';

var CommentToken = require('../../common/token/comment');

class StartOfCommentToken extends CommentToken {
  clone() {
    var string = this.getString(),
        line = this.getLine(),
        startOfCommentToken = new StartOfCommentToken(string, line);

    return startOfCommentToken;
  }

  static position(content) {
    var position = content.search(/\/\*/);

    return position;
  }

  static fromContent(content, line) {
    var startOfCommentToken = null,
        matches = content.match(/^\/\*/);

    if (matches) {
      var firstMatch = first(matches),
          string = firstMatch; ///

      startOfCommentToken = new StartOfCommentToken(string, line);
    }
    
    return startOfCommentToken;
  }
}

module.exports = StartOfCommentToken;

function first(array) { return array[0]; }
