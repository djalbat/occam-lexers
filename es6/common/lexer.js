'use strict';

const Rules = require('./rules'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      SignificantTokens = require('./tokens/significant'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      MiddleOfCommentTokens = require('./tokens/middleOfComment'),
      RegularExpressionTokens = require('./tokens/regularExpression'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class CommonLexer {
  constructor(rules) {
    this.rules = rules;
  }
  
  getRules() {
    return this.rules;
  }

  tokenise(content) {
    const tokensOrContents = [content], ///
          commentType = null;

    this.processEndOfLineTokens(tokensOrContents);

    this.processAllBarEndOfLineTokens(tokensOrContents, commentType);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  processAllBarEndOfLineTokens(tokensOrContents, commentType) {
    this.processStringLiteralTokens(tokensOrContents);

    commentType = this.processCommentTokens(tokensOrContents, commentType);

    this.postProcessMiddleOfCommentTokens(tokensOrContents);

    this.processRegularExpressionTokens(tokensOrContents);

    this.processWhitespaceTokens(tokensOrContents);

    this.processSignificantTokens(tokensOrContents);

    return commentType;
  }

  processEndOfLineTokens(tokensOrContents) { NonSignificantEndOfLineTokens.process(tokensOrContents); }

  processStringLiteralTokens(tokensOrContents) { StringLiteralTokens.process(tokensOrContents); }

  processCommentTokens(tokensOrContents, commentType) { return CommentTokens.process(tokensOrContents, commentType); }

  postProcessMiddleOfCommentTokens(tokensOrContents) { MiddleOfCommentTokens.postProcess(tokensOrContents); }

  processRegularExpressionTokens(tokensOrContents) { RegularExpressionTokens.process(tokensOrContents); }

  processWhitespaceTokens(tokensOrContents) { WhitespaceTokens.process(tokensOrContents); }

  processSignificantTokens(tokensOrContents) { SignificantTokens.process(tokensOrContents, this.rules) }

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
