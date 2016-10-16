'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var rules = Rules.fromGrammar(grammar);

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(false);  ///

    var lines = super.linesFromContent(content, context);

    return lines;
  }

  static fromNothing() {
    var gallinaLexer = new FlorenceLexer(rules, Line);

    return gallinaLexer;
  }

}

module.exports = FlorenceLexer;
