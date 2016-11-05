'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'GallinaLexer': require('./lib/gallina/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'Line': require('./lib/common/line'),
  'Token': require('./lib/common/token'),
  'ErrorToken': require('./lib/common/token/error'),
  'SelectedToken': require('./lib/common/token/selected'),
  'SignificantToken': require('./lib/common/token/significant'),
  'IncludeDirectiveToken': require('./lib/florence/token/includeDirective'),
  'specialSymbols': require('./lib/specialSymbols')
};

module.exports = lexers;
