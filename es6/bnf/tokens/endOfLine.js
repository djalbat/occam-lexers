'use strict';

const tokens = require('../../common/tokens'),
      EndOfLineNonSignificantToken = require('../../common/token/nonSignificant/endOfLine');

const { passGivenToken } = tokens,
      EndOfLineToken = EndOfLineNonSignificantToken;  ///

function pass(tokensOrContents) { passGivenToken(tokensOrContents, EndOfLineToken); }

module.exports = {
  pass: pass
};
