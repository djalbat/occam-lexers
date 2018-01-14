'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('../common/tokens/regularExpression');

class BNFLine extends CommonLine {
  static fromContentRulesAndConfiguration(content, rules, configuration) {
    const bnfLine = super.fromContentRulesAndConfiguration(BNFLine, content, rules, configuration);

    bnfLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return bnfLine;
  }
}

module.exports = BNFLine;
