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

  increaseMultiLineCommentDepth() {
    this.multiLineCommentDepth++;
  }

  decreaseMultiLineCommentDepth() {
    this.multiLineCommentDepth--;
  }
}

module.exports = Context;
