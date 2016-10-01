'use strict';

class Context {
  constructor(commentDepth) {
    this.commentDepth = commentDepth;
  }
  
  getCommentDepth() {
    return this.commentDepth;
  }
  
  increaseCommentDepth() {
    this.commentDepth++;
  }

  decreaseCommentDepth() {
    this.commentDepth--;
  }
}

module.exports = Context;
