'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('../common/tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression'),
      EndOfLineToken = require('../common/token/significant/endOfLine');

class FlorenceLine extends CommonLine {
  initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
    super.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    const florenceLine = this,  ///
          line = florenceLine;  ///

    const endOfLineToken = EndOfLineToken.fromLine(line);

    this.pushToken(endOfLineToken);
  }

  static fromContentRulesAndConfiguration(content, rules, configuration) {
    const florenceLine = super.fromContentRulesAndConfiguration(FlorenceLine, content, rules, configuration);

    florenceLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return florenceLine;
  }
}

module.exports = FlorenceLine;
