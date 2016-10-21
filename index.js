'use strict';

var lexers = {
  'SignificantToken': require('./lib/common/token/significant'),
  'specialSymbols': require('./lib/specialSymbols'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'GallinaLexer': require('./lib/gallina/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'IncludeDirectiveToken': require('./lib/florence/token/includeDirective')
};

module.exports = lexers;
