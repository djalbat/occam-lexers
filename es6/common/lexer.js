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

  tokensFromContent(content, inComment = false) {
    const tokensOrContents = [content]; ///

    this.processEndOfLineTokens(tokensOrContents);

    this.processAllBarEndOfLineTokens(tokensOrContents, inComment);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  processEndOfLineTokens(tokensOrContents) {}

  processAllBarEndOfLineTokens(tokensOrContents, inComment) {
    inComment = this.processCommentTokens(tokensOrContents, inComment);

    this.processRegularExpressionTokens(tokensOrContents);

    this.processStringLiteralTokens(tokensOrContents);

    this.processWhitespaceTokens(tokensOrContents);

    this.processSignificantTokens(tokensOrContents);

    return inComment;
  }

  processCommentTokens(tokensOrContents, inComment) {
    inComment = CommentTokens.process(tokensOrContents, inComment);

    return inComment;
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
