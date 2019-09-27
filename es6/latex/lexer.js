'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class LaTeXLexer extends CommonLexer {
  matchMultiLineComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  matchDoublyQuotedStringLiteral(content) { return null; }

  static fromNothing() { return CommonLexer.fromNothing(LaTeXLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(LaTeXLexer, entries); }
}

Object.assign(LaTeXLexer, {
  entries
});

module.exports = LaTeXLexer;
