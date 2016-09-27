'use strict';

var Context = require('./context'),
    CommonLexerLine = require('../commonLexer/line'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

class FlorenceLexerLine extends CommonLexerLine {
  constructor(tokens, inMultiLineComment) {
    super(tokens);

    this.inMultiLineComment = inMultiLineComment;
    
    this.update();
  }

  isInMultiLineComment() { 
    return this.inMultiLineComment; 
  }
  
  hasEndOfMultiLineCommentToken() { return NonSignificantTokens.hasEndOfMultiLineCommentToken(this.tokens); }
  hasStartOfMultiLineCommentToken() { return NonSignificantTokens.hasStartOfMultiLineCommentToken(this.tokens); }

  static fromContent(content, previousLineIsInMultiLineComment, parser) {
    var inMultiLineComment = previousLineIsInMultiLineComment,
        context = new Context(content, inMultiLineComment);

    NonSignificantTokens.pass(context);
    
    SignificantTokens.pass(context, parser);

    inMultiLineComment = context.isInMultilineComment();

    var tokens = context.getTokens(),
        line = new FlorenceLine(tokens, inMultiLineComment);

    return line;
  }
}

module.exports = FlorenceLexerLine;
