'use strict';

module.exports = {
  'BasicLexer': require('./lib/bnf/basic'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'PlainLexer': require('./lib/plain/lexer'),
  'MetaJSONLexer': require('./lib/metaJSON/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'CustomGrammarBNFLexer': require('./lib/customGrammarBNF/lexer'),
  'CustomGrammarLexicalPatternLexer': require('./lib/customGrammarLexicalPattern/lexer')
};
