'use strict';

const tokens = require('../../common/tokens'),
      RegularExpression = require('../token/significant/regularExpression');

const { passGivenToken } = tokens;

function pass(tokensOrContents) { passGivenToken(tokensOrContents, RegularExpression); }

module.exports = {
  pass: pass
};

