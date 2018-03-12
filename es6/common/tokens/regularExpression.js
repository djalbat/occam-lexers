'use strict';

const tokens = require('../../common/tokens'),
      RegularExpression = require('../token/significant/regularExpression');

const { processByToken } = tokens;

function process(tokensOrContents) { processByToken(tokensOrContents, RegularExpression); }

module.exports = {
  process: process
};

