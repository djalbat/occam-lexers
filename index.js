'use strict';

var lexers = {
  'Line': require('./lib/common/line'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'PrimitiveLexer': require('./lib/primitive/lexer'),
  'StringToken': require('./lib/common/token/significant/string'),
  'SignificantToken': require('./lib/common/token/significant'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant'),
  'EndOfLineToken': require('./lib/florence/token/significant/endOfLine'),
  'specialSymbols': require('./lib/specialSymbols')
};

module.exports = lexers;
