'use strict';

const Tokens = require('../../common/tokens'), 
      StringLiteralToken = require('../../common/token/significant/stringLiteral');

class StringLiteralTokens {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, StringLiteralToken); }
}

module.exports = StringLiteralTokens;
