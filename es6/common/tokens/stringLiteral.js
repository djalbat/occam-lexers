'use strict';

const Tokens = require('../tokens'),
      StringLiteralToken = require('../token/significant/stringLiteral');

class StringLiteralTokens {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, StringLiteralToken); }
}

module.exports = StringLiteralTokens;
