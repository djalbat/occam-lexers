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

    this.tokeniseEndOfLines(tokensOrContents);

    this.tokeniseAllBarEndOfLines(tokensOrContents, commentType);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  tokeniseAllBarEndOfLines(tokensOrContents, commentType) {
    this.tokeniseStringLiterals(tokensOrContents);

    commentType = this.tokeniseComments(tokensOrContents, commentType);

    this.reTokeniseMiddleOfCommentTokens(tokensOrContents);

    this.tokeniseRegularExpressions(tokensOrContents);

    this.tokeniseWhitespace(tokensOrContents);

    this.tokeniseSignificantContent(tokensOrContents);

    return commentType;
  }

  tokeniseEndOfLines(tokensOrContents) { NonSignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseStringLiterals(tokensOrContents) { StringLiteralTokens.tokenise(tokensOrContents); }

  tokeniseComments(tokensOrContents, commentType) { return CommentTokens.tokenise(tokensOrContents, commentType); }

  reTokeniseMiddleOfCommentTokens(tokensOrContents) { MiddleOfCommentTokens.reTokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) { RegularExpressionTokens.tokenise(tokensOrContents); }

  tokeniseWhitespace(tokensOrContents) { WhitespaceTokens.tokenise(tokensOrContents); }

  tokeniseSignificantContent(tokensOrContents) { SignificantTokens.tokenise(tokensOrContents, this.rules) }

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
