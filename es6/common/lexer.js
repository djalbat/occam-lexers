'use strict';

class Lexer {
  static linesFromContent(content, context, Line) {
    var previousLineIsInMultiLineComment = context.isPreviousLineInMultiLineComment();
    
    if (content === '') {
      return [];
    }

    var contents = content.split(/\n/),
        lines = contents.map(function(content) {
      var line = Line.fromContent(content, previousLineIsInMultiLineComment),
          previousLine = line; ///

      previousLineIsInMultiLineComment = previousLine ? previousLine.isInMultiLineComment() : false;

      return line;
    });

    context.setPreviousLineInMultiLineComment(previousLineIsInMultiLineComment);
    
    return lines;
  }
}

module.exports = Lexer;
