'use strict';

const Tokens = require('../../common/tokens'),
      WhitespaceToken = require('../../common/token/significant/whitespace');

class WhitespaceTokens {
  static pass(tokensOrContents, line) { Tokens.pass(tokensOrContents, line, WhitespaceToken); }
}

module.exports = WhitespaceTokens;
