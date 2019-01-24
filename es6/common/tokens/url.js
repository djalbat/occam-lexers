'use strict';

const tokens = require('../tokens'),
      URLToken = require('../token/significant/url');

const { tokeniseByToken } = tokens;

function tokenise(tokensAndContents) { tokeniseByToken(tokensAndContents, URLToken); }

module.exports = {
  tokenise
};
