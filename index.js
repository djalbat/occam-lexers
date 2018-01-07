'use strict';

const lexers = {
  'CommonLine': require('./lib/common/line'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'CommonLexer': require('./lib/common/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'PlainLexer': require('./lib/plain/lexer'),
  'MetaJSONLexer': require('./lib/metaJSON/lexer'),
  'CustomGrammarBNFLexer': require('./lib/customGrammarBNF/lexer'),
  'CustomGrammarLexicalPatternLexer': require('./lib/customGrammarLexicalPattern/lexer'),
  'SignificantToken': require('./lib/common/token/significant'),
  'EndOfLineToken': require('./lib/common/token/significant/endOfLine'),
  'WhitespaceToken': require('./lib/common/token/significant/whitespace'),
  'StringLiteralToken': require('./lib/common/token/significant/stringLiteral'),
  'RegularExpressionToken': require('./lib/common/token/significant/regularExpression'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant')
};

module.exports = lexers;
