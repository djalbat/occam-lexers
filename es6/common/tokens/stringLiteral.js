'use strict';

const tokens = require('../tokens'),
      StringLiteralToken = require('../token/significant/stringLiteral');

const { tokeniseByToken } = tokens;

function tokenise(tokensAndContents) { tokeniseByToken(tokensAndContents, StringLiteralToken); }

module.exports = {
  tokenise
};
