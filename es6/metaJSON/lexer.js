'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class MetaJSONLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromEntries(MetaJSONLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }
}

Object.assign(MetaJSONLexer, {
  entries
});

module.exports = MetaJSONLexer;
