'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'GallinaLexer': require('./lib/gallina/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'SignificantToken': require('./lib/common/token/significant'),
  'symbolTypes': require('./lib/symbolTypes')
};

module.exports = lexers;
