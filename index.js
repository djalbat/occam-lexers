'use strict';

var lexers = {
  'Line': require('./lib/common/line'),
  'Token': require('./lib/common/token'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'specialSymbols': require('./lib/specialSymbols'),
  'StringToken': require('./lib/common/token/string'),
  'EndOfLineToken': require('./lib/common/token/endOfLine'),
  'WhitespaceToken': require('./lib/common/token/whitespace'),
  'SignificantToken': require('./lib/common/token/significant')
};

module.exports = lexers;
