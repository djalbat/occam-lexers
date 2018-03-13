'use strict';

const tokens = require('../tokens'),
      WhitespaceToken = require('../token/significant/whitespace');

const { processByToken } = tokens;

function process(tokensAndContents) { processByToken(tokensAndContents, WhitespaceToken); }

module.exports = {
  process: process
};
