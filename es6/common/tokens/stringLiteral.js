'use strict';

const Tokens = require('../tokens'),
      StringLiteralToken = require('../token/significant/stringLiteral');

class StringLiteralTokens {
  static pass(tokensOrContents, line) { Tokens.pass(tokensOrContents, line, StringLiteralToken); }
}

module.exports = StringLiteralTokens;
