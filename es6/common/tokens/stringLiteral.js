'use strict';

const tokens = require('../../common/tokens'),
      StringLiteralToken = require('../token/significant/stringLiteral');

const { processByToken } = tokens;

function process(tokensOrContents) { processByToken(tokensOrContents, StringLiteralToken); }

module.exports = {
  process: process
};
