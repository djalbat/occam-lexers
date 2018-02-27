'use strict';

const Tokens = require('../tokens'),
      RegularExpression = require('../token/significant/regularExpression');

class RegularExpressions {
  static pass(tokensOrContents) { Tokens.pass(tokensOrContents, RegularExpression); }
}

module.exports = RegularExpressions;
