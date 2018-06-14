'use strict';

const tokens = require('../../tokens'),
      EndOfLineSignificantToken = require('../../token/significant/endOfLine');

const { processByToken } = tokens;

function process(tokensOrContents) { processByToken(tokensOrContents, EndOfLineSignificantToken); }

module.exports = {
  process
};
