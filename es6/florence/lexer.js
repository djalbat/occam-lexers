'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    util = require('../util'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(false);  ///

    var lines = super.linesFromContent(content, context);

    return lines;
  }

  terminalSymbolsRegExpPattern() {
    var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
        keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,  ///
        terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern; ///

    return terminalSymbolsRegExpPattern;
  }

  terminalTypes() {
    var terminalTypes = [
      'includeDirective',
      'string'
    ];

    return terminalTypes;
  }

  static fromNothing() {
    var rules = Rules.fromGrammar(grammar),
        gallinaLexer = new FlorenceLexer(rules, Line);

    return gallinaLexer;
  }

}

module.exports = FlorenceLexer;
