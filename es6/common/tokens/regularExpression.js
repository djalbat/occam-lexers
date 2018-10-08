'use strict';

const tokens = require('../tokens'),
      RegularExpression = require('../token/significant/regularExpression');

const { tokeniseByToken } = tokens;

function tokenise(tokensOrContents) { tokeniseByToken(tokensOrContents, RegularExpression); }

module.exports = {
  tokenise
};

