'use strict';

const tokens = require('../../tokens'),
      EndOfLineSignificantToken = require('../../token/significant/endOfLine');

const { tokeniseByToken } = tokens;

function tokenise(tokensOrContents) { tokeniseByToken(tokensOrContents, EndOfLineSignificantToken); }

module.exports = {
  tokenise
};
