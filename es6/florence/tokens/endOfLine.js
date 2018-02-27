'use strict';

const Tokens = require('../../common/tokens'),
      EndOfLineSignificantToken = require('../../common/token/significant/endOfLine');

const EndOfLineToken = EndOfLineSignificantToken;  ///

class EndOfLineTokens {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, EndOfLineToken); }
}

module.exports = EndOfLineTokens;
