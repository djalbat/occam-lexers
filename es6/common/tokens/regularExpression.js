'use strict';

const Tokens = require('../tokens'),
      RegularExpression = require('../token/significant/regularExpression');

class RegularExpressions {
  static pass(tokensOrContents, line) { Tokens.pass(tokensOrContents, line, RegularExpression); }
}

module.exports = RegularExpressions;
