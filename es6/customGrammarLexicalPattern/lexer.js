'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      CustomGrammarLexicalPatternLine = require('./line');

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          customGrammarLexicalPatternLexer = new CustomGrammarLexicalPatternLexer(rules, CustomGrammarLexicalPatternLine);

    return customGrammarLexicalPatternLexer;
  }

  static fromNothing() {
    const customGrammarLexicalPatternLexer = CustomGrammarLexicalPatternLexer.fromEntries(entries);

    return customGrammarLexicalPatternLexer;
  }
}

module.exports = CustomGrammarLexicalPatternLexer;
