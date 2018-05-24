'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class MetaJSONLexer extends CommonLexer {
  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processCommentTokens(tokensOrContents, inComment) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(MetaJSONLexer); }
}

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
