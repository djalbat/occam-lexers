'use strict';

var Line = require('./line');

class Lexer {
  static linesFromContent(content, context) {
    var lines = CommonLexer.linesFromContent(content, context, Line);
    
    return lines;
  }
}

module.exports = Lexer;
