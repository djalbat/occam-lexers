'use strict';

class Context {
  constructor(inComment) {
    this.inComment = inComment;
  }
  
  isInComment() {
    return this.inComment;
  }

  setInComment(inComment) {
    this.inComment = inComment;
  }
}

module.exports = Context;
