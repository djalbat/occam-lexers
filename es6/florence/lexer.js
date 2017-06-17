'use strict';

const Line = require('./line'),
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
    const grammar = FlorenceLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            StringToken.type,
            EndOfLineToken.type,
            WhitespaceToken.type
          ]);

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromNothing() {
    const grammar = FlorenceLexer.grammar,
          florenceLexer = FlorenceLexer.fromGrammar(grammar);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;

FlorenceLexer.grammar = [

  { "special"    : ",|;|\\{|\\}|=|::|:|\\(|\\)|\\.\\.\\.|\\.\\." },

  { "include"    : "^include$" },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Variables|Variable|Metavariables|Metavariable|Constructors|Constructor|Type|Object|Definition|from|by|let|is|not|in|free|defined|undefined)$" },

  { "unassigned" : "^[\\u{21}-\\u{7E}\\u{A1}-\\u{FF}\\u{2200}-\\u{22FF}\\u{2A00}-\\u{2AFF}\\u{2300}-\\u{23ff}\\u{1D400}-\\u{1D7FF}]+$" }

];
