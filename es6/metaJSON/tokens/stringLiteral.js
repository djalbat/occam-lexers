'use strict';

const Tokens = require('../../common/tokens'), 
      StringLiteralToken = require('../../common/token/significant/stringLiteral');

class StringLiteralTokens {
  static pass(tokensOrContents, line) { Tokens.pass(tokensOrContents, line, StringLiteralToken); }
}

module.exports = StringLiteralTokens;
