'use strict';

var util = require('../util'),
    Line = require('./line'),
    Context = require('./context'),
    grammar = require('../grammar/florence'),
    CommonLexer = require('../common/lexer'),
    RegExpPattern = require('../regExpPattern');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(false);  ///

    var lines = super.linesFromContent(content, context);

    return lines;
  }

  static terminalSymbolsRegExpPattern() {
    var specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
        includeSymbolsRegExp = util.findRegExpFromType(grammar, 'include'),
        keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
        specialSymbolsRegExpPatternString = RegExpPattern.fromRegExp(specialSymbolsRegExp).toString(),
        includeSymbolsRegExpPatternString = RegExpPattern.fromRegExp(includeSymbolsRegExp).removeAnchors().toString(),
        keywordSymbolsRegExpPatternString = RegExpPattern.fromRegExp(keywordSymbolsRegExp).removeAnchors().removeNonCapturingGroup().toString(),
        terminalSymbolsRegExpPattern = `${specialSymbolsRegExpPatternString}|${includeSymbolsRegExpPatternString}|${keywordSymbolsRegExpPatternString}`;

    return terminalSymbolsRegExpPattern;
  }
  
  static significantTokenTypes() { return CommonLexer.significantTokenTypes(grammar); }

  static fromNothing() {
    var rules = CommonLexer.rulesFromGrammar(grammar),
        florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;
