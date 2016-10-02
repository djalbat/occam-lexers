'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/bnf/basic'),
  'GallinaLexer': require('./lib/gallina/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer')
};

module.exports = lexers;
