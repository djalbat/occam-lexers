'use strict';

var CommonLine = require('../common/line'),
    SpecialTokens = require('./specialTokens'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

class GallinaLine extends CommonLine {
  constructor(content, multiLineCommentDepth) {
    super(content);
    
    this.multiLineCommentDepth = multiLineCommentDepth;
  }

  getMultiLineCommentDepth() {
    return this.multiLineCommentDepth;
  }

  increaseMultiLineCommentDepth() {
    this.multiLineCommentDepth++;
  }

  decreaseMultiLineCommentDepth() {
    this.multiLineCommentDepth--;
  }

  getContentSubstring(length) {
    var content = this.getContent(),
        contentSubString = content.substring(0, length);
    
    return contentSubString;
  }

  chopContent(length) {
    var content = this.getContent();
    
    content = content.substring(length);
    
    this.setContent(content);
  }

  static fromContent(content, multiLineCommentDepth) {
    var line = new GallinaLine(content, multiLineCommentDepth);

    NonSignificantTokens.pass(line);

    SpecialTokens.pass(line);
    
    SignificantTokens.pass(line);
    
    line.setContent(content); ///
    
    return line;
  }
}

module.exports = GallinaLine;
