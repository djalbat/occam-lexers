'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      Rule = require('../common/rule'),
      Context = require('../common/context'),
      CommonLexer = require('../common/lexer'),
      StringToken = require('../common/token/significant/string'),
      EndOfLineToken = require('../common/token/significant/endOfLine'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = super.linesFromContent(content, firstLineIndex, context);

    return lines;
  }

  static significantTokenTypes() {
    const grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            StringToken.type,
            EndOfLineToken.type,
            WhitespaceToken.type
          ]);

    return significantTokenTypes;
  }

  static fromCustomGrammars(customGrammars) {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          customSignificantTokenType = 'custom',  ///
          customGrammarsRegularExpressionPattern = regularExpressionPatternFromGrammars(customGrammars),
          customRule =  CommonLexer.ruleFromSignificantTokenTypeAndRegularExpressionPattern(customSignificantTokenType, customGrammarsRegularExpressionPattern);

    rules.addRule(customRule);

    const florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromGrammar(grammar) {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromNothing() {
    const florenceLexer = FlorenceLexer.fromGrammar(grammar);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;

FlorenceLexer.grammar = grammar;

function regularExpressionPatternFromGrammars(grammars) {
  const regularExpressionPattern = grammars.reduce(function(regularExpressionPattern, grammar) {
    if (regularExpressionPattern === null) {
      regularExpressionPattern = grammar;
    } else {
      regularExpressionPattern = `${grammar}|${regularExpressionPattern}`;
    }

    return regularExpressionPattern;
  }, null);

  return regularExpressionPattern;
}
