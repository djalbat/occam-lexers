'use strict';

const tokens = require('../../common/tokens'),
      StringLiteralToken = require('../token/significant/stringLiteral');

const { passGivenToken } = tokens;

function pass(tokensOrContents) { passGivenToken(tokensOrContents, StringLiteralToken); }

module.exports = {
  pass: pass
};
