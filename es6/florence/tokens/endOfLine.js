'use strict';

const tokens = require('../../common/tokens'),
      EndOfLineSignificantToken = require('../../common/token/significant/endOfLine');

const { passGivenToken } = tokens,
      EndOfLineToken = EndOfLineSignificantToken;  ///

function pass(tokensOrContents) { passGivenToken(tokensOrContents, EndOfLineToken); }

module.exports = {
  pass: pass
};
