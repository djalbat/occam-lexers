'use strict';

var Tokens = require('../common/tokens'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceToken = require('../common/token/whitespace');

class WhitespaceTokens {
  static pass(tokensOrContents, line) { 
    Tokens.pass(tokensOrContents, line, WhitespaceToken);
    
    var endOfLineToken = EndOfLineToken.fromNothing(line);

    tokensOrContents.push(endOfLineToken);
  }
}

module.exports = WhitespaceTokens;
