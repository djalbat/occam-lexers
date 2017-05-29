'use strict';

var lexers = {
  'Line': require('./lib/common/line'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'PrimitiveLexer': require('./lib/primitive/lexer'),
  'specialSymbols': require('./lib/specialSymbols'),
  'StringToken': require('./lib/common/token/significant/string'),
  'EndOfLineToken': require('./lib/common/token/significant/endOfLine'),
  'SignificantToken': require('./lib/common/token/significant'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant')
};

module.exports = lexers;
