'use strict';

var FlorenceLexerLine = require('./florenceLexer/line');

class FlorenceLexer extends CommonLexer {
  updateLines(content, previousLineIsInMultiLineComment) {
    var lastLineIsInMultiLineComment = super.updateLines(content, previousLineIsInMultiLineComment, FlorenceLexerLine);
    
    return lastLineIsInMultiLineComment;
  }
}

module.exports = FlorenceLexer;
