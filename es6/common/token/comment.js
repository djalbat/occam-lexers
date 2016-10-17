'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  constructor(str) {
    var type = "comment",
        line = null;
    
    super(str, type, line);
  }
  
  merge(commentToken) {
    var str = this.getString(),
        commentTokenStr = commentToken.getString();

    str += commentTokenStr;
    
    this.setString(str);

    return this;
  }
}

module.exports = CommentToken;
