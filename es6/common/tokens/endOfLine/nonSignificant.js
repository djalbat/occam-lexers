'use strict';

const tokens = require('../../tokens'),
      EndOfLineNonSignificantToken = require('../../token/nonSignificant/endOfLine');

const { tokeniseByToken } = tokens;

function tokenise(tokensOrContents) { tokeniseByToken(tokensOrContents, EndOfLineNonSignificantToken); }

module.exports = {
  tokenise
};
