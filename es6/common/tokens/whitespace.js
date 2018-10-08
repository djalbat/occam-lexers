'use strict';

const tokens = require('../tokens'),
      WhitespaceToken = require('../token/nonSignificant/whitespace');

const { tokeniseByToken } = tokens;

function tokenise(tokensAndContents) { tokeniseByToken(tokensAndContents, WhitespaceToken); }

module.exports = {
  tokenise
};
