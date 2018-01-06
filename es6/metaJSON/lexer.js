'use strict';

const entries = require('./entries'),
      MetaJSONLine = require('./line'),
      CommonLexer = require('../common/lexer');

class MetaJSONLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          plainLexer = new MetaJSONLexer(rules, MetaJSONLine);

    return plainLexer;
  }

  static fromNothing() {
    const plainLexer = MetaJSONLexer.fromEntries(entries);

    return plainLexer;
  }
}

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
