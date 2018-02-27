'use strict';

const Tokens = require('../tokens'),
      WhitespaceToken = require('../token/significant/whitespace');

class WhitespaceTokens {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, WhitespaceToken); }
}

module.exports = WhitespaceTokens;
