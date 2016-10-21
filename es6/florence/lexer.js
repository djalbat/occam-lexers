'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(false);  ///

    var lines = super.linesFromContent(content, context);

    return lines;
  }

  significantTokenTypes() {
    var significantTokenTypes = [
      'string',
      'unassigned'
    ];

    return significantTokenTypes;
  }

  static fromNothing() {
    var rules = Rules.fromGrammar(grammar),
        gallinaLexer = new FlorenceLexer(rules, Line);

    return gallinaLexer;
  }

}

module.exports = FlorenceLexer;
