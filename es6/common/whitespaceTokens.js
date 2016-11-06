'use strict';

var Tokens = require('./tokens'),
    WhitespaceToken = require('./token/whitespace');

class WhitespaceTokens {
  static pass(tokensOrContents, line) { return Tokens.pass(tokensOrContents, line, WhitespaceToken); }
}

module.exports = WhitespaceTokens;
