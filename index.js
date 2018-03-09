'use strict';

module.exports = {
  'NonSignificantToken': require('./lib/common/token/nonSignificant'),
  'SignificantToken': require('./lib/common/token/significant'),
  'BasicLexer': require('./lib/basic/lexer'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'PlainLexer': require('./lib/plain/lexer'),
  'MetaJSONLexer': require('./lib/metaJSON/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'CustomGrammarBNFLexer': require('./lib/customGrammarBNF/lexer'),
  'CustomGrammarLexicalPatternLexer': require('./lib/customGrammarLexicalPattern/lexer')
};
