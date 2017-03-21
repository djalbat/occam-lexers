'use strict';

const Tokens = require('./tokens'),
      WhitespaceToken = require('./token/significant/whitespace');

class WhitespaceTokens {
  static pass(tokensOrContents, line) { return Tokens.pass(tokensOrContents, line, WhitespaceToken); }
}

module.exports = WhitespaceTokens;
