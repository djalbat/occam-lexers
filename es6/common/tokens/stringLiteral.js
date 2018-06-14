'use strict';

const tokens = require('../tokens'),
      StringLiteralToken = require('../token/significant/stringLiteral');

const { processByToken } = tokens;

function process(tokensAndContents) { processByToken(tokensAndContents, StringLiteralToken); }

module.exports = {
  process
};
