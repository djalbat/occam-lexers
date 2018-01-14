'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class MetaJSONLine extends CommonLine {
  static fromContentRulesAndConfiguration(content, rules, configuration) {
    const metaJSONLine = super.fromContentRulesAndConfiguration(MetaJSONLine, content, rules, configuration);

    metaJSONLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return metaJSONLine;
  }
}

module.exports = MetaJSONLine;
