'use strict';

var Tokens = require('./tokens'),
    StringToken = require('./token/string');

class StringTokens {
  static pass(tokensOrContents, line) { Tokens.pass(tokensOrContents, line, StringToken); }
}

module.exports = StringTokens;
