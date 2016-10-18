'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'GallinaLexer': require('./lib/gallina/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'WhitespaceToken': require('./lib/common/token/whitespace')
};

module.exports = lexers;
