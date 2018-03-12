'use strict';

const tokens = require('../../tokens'),
      EndOfLineNonSignificantToken = require('../../token/nonSignificant/endOfLine');

const { processByToken } = tokens;

function process(tokensOrContents) { processByToken(tokensOrContents, EndOfLineNonSignificantToken); }

module.exports = {
  process: process
};
