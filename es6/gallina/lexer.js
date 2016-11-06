'use strict';

var util = require('../util'),
    Line = require('./line'),
    Context = require('./context'),
    grammar = require('../grammar/gallina'),
    CommonLexer = require('../common/lexer'),
    RegExpPattern = require('../regExpPattern');

class GallinaLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(0);  ///
    
    var lines = super.linesFromContent(content, context);
    
    return lines;
  }

  static terminalSymbolsRegExpPattern() {
    var specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
        keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
        specialSymbolsRegExpPatternString = RegExpPattern.fromRegExp(specialSymbolsRegExp).toString(),
        keywordSymbolsRegExpPatternString = RegExpPattern.fromRegExp(keywordSymbolsRegExp).removeAnchors().removeNonCapturingGroup().toString(),
        terminalSymbolsRegExpPattern = `${specialSymbolsRegExpPatternString}|${keywordSymbolsRegExpPatternString}`;

    return terminalSymbolsRegExpPattern;
  }
  
  static significantTokenTypes() { return CommonLexer.significantTokenTypes(grammar); }
  
  static fromNothing() {
    var rules = CommonLexer.rulesFromGrammar(grammar),
        gallinaLexer = new GallinaLexer(rules, Line);

    return gallinaLexer;
  }
}

module.exports = GallinaLexer;
