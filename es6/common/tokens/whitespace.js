'use strict';

const tokens = require('../../common/tokens'),
      WhitespaceToken = require('../token/significant/whitespace');

const { passGivenToken } = tokens;

function pass(tokensOrContents) { passGivenToken(tokensOrContents, WhitespaceToken); }

module.exports = {
  pass: pass
};
