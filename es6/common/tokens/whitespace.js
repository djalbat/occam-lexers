'use strict';

const tokens = require('../../common/tokens'),
      WhitespaceToken = require('../token/significant/whitespace');

const { processByToken } = tokens;

function process(tokensOrContents) { processByToken(tokensOrContents, WhitespaceToken); }

module.exports = {
  process: process
};
