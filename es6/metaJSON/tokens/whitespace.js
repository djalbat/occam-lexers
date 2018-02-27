'use strict';

const Tokens = require('../../common/tokens'), 
      WhitespaceToken = require('../../common/token/significant/whitespace');

class WhitespaceTokens {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, WhitespaceToken); }
}

module.exports = WhitespaceTokens;
