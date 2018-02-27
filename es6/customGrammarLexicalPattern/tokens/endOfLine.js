'use strict';

const Tokens = require('../../common/tokens'),
      EndOfLineNonSignificantToken = require('../../common/token/nonSignificant/endOfLine');

const EndOfLineToken = EndOfLineNonSignificantToken;  ///

class EndOfLineTokens {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, EndOfLineToken); }
}

module.exports = EndOfLineTokens;
