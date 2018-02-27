'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      CommentTokens = require('./tokens/comment'),
      EndOfLineTokens = require('./tokens/endOfLine'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class MetaJSONLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          metaJSONLexer = new MetaJSONLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return metaJSONLexer;
  }

  static fromNothing() { return metaJSONLexer.fromEntries(entries); }
}

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
