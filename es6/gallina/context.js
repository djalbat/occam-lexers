'use strict';

class Context {
  constructor(multiLineCommentDepth) {
    this.multiLineCommentDepth = multiLineCommentDepth;
  }
  
  getMultiLineCommentDepth() {
    return this.multiLineCommentDepth;
  }
  
  setMultiLineCommentDepth(multiLineCommentDepth) {
    this.multiLineCommentDepth = multiLineCommentDepth;
  }
}

module.exports = Context;
