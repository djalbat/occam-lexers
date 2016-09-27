'use strict';

class CommonLexer {
  constructor() {
    this.lines = undefined; ///
  }

  updateLines(content, previousLineIsInMultiLineComment, Line) {
    if (content === '') {
      this.lines = [];
    } else {
      var contents = content.split(/\n/);

      this.lines = contents.map(function(content) {
        var line = Line.fromContent(content, previousLineIsInMultiLineComment),
            previousLine = line; ///

        previousLineIsInMultiLineComment = previousLine ? previousLine.isInMultiLineComment() : false;

        return line;
      });
    }

    var lastLineIsInMultiLineComment = previousLineIsInMultiLineComment;
    
    return lastLineIsInMultiLineComment;
  }
}

module.exports = CommonLexer;
