'use strict';

var Context = require('./context'),
    CommonLine = require('../common/line'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

class Line extends CommonLine {
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

    inMultiLineComment = context.isInMultiLineComment();

    var tokens = context.getTokens(),
        line = new Line(tokens, inMultiLineComment);

    return line;
  }
}

module.exports = Line;
