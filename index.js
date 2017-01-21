'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'specialSymbols': require('./lib/specialSymbols'),
  'Line': require('./lib/common/line'),
  'Token': require('./lib/common/token'),
  'SelectedToken': require('./lib/common/token/selected'),
  'SignificantToken': require('./lib/common/token/significant')
};

module.exports = lexers;
