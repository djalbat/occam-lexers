'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class MetaJSONLexer extends CommonLexer {
  matchMultiLineComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  static fromNothing() { return CommonLexer.fromEntries(MetaJSONLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }
}

Object.assign(MetaJSONLexer, {
  entries
});

module.exports = MetaJSONLexer;
