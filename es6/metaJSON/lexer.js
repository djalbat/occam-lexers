'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class MetaJSONLexer extends CommonLexer {
  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processCommentTokens(tokensOrContents, inComment) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(MetaJSONLexer); }
}

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
