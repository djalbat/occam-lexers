'use strict';

const tokens = require('../tokens'),
      HyperlinkToken = require('../token/significant/hyperlink');

const { tokeniseByToken } = tokens;

function tokenise(tokensAndContents) { tokeniseByToken(tokensAndContents, HyperlinkToken); }

module.exports = {
  tokenise
};
