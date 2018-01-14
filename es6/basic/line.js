'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class BasicLine extends CommonLine {
  static fromContentRulesAndConfiguration(content, rules, configuration) {
    const basicLine = super.fromContentRulesAndConfiguration(BasicLine, content, rules, configuration);

    basicLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return basicLine;
  }
}

module.exports = BasicLine;
