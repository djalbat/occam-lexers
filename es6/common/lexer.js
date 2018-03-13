'use strict';

const Rules = require('./rules'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      SignificantTokens = require('./tokens/significant'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class CommonLexer {
  constructor(rules) {
    this.rules = rules;
  }
  
  getRules() {
    return this.rules;
  }

  tokensFromContent(content) {
    const tokensOrContents = [content]; ///

    this.processEndOfLineTokens(tokensOrContents);

    this.processAllBarEndOfLineTokens(tokensOrContents);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  processAllBarEndOfLineTokens(tokensOrContents, commentType) {
    commentType = this.processCommentTokens(tokensOrContents, commentType);

    this.processRegularExpressionTokens(tokensOrContents);

    this.processStringLiteralTokens(tokensOrContents);

    this.processWhitespaceTokens(tokensOrContents);

    this.processSignificantTokens(tokensOrContents);

    return commentType;
  }

  processCommentTokens(tokensOrContents, commentType = null) {
    commentType = CommentTokens.process(tokensOrContents, commentType);

    return commentType;
  }

  processRegularExpressionTokens(tokensOrContents) {
    RegularExpressionTokens.process(tokensOrContents);
  }

  processStringLiteralTokens(tokensOrContents) {
    StringLiteralTokens.process(tokensOrContents);
  }

  processWhitespaceTokens(tokensOrContents) {
    WhitespaceTokens.process(tokensOrContents);
  }

  processSignificantTokens(tokensOrContents) {
    SignificantTokens.process(tokensOrContents, this.rules)
  }

  static fromNothing(Class) {
    const { entries } = Class,
          rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }
}

module.exports = CommonLexer;
