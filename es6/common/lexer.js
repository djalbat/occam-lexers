'use strict';

var Line = require('./line'),
    util = require('../util');

class CommonLexer {
  constructor(rules, Line) {
    this.rules = rules;
    this.Line = Line;
  }

  linesFromContent(content, context) {
    var contents = content.split(/\n/),
        lines = contents.map(function(content) {
          var line = this.Line.fromContent(content, context, this.rules);
  
          return line;
        }.bind(this));
  
    return lines;
  }
  
  tokensFromContent(content) {
    var lines = this.linesFromContent(content),
        tokens = lines.reduce(function(tokens, line) {
          var lineTokens = line.getTokens();

          tokens = tokens.concat(lineTokens);

          return tokens;
        }, []);
    
    return tokens;    
  }

  terminalSymbolsRegExpPattern(grammar) {
    var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
        specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
        keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,  ///
        specialSymbolsRegExpPattern = specialSymbolsRegExp.source.replace(/^(?:\^\(\?:)/, '').replace(/(?:\)\$)$/, ''),  ///
        terminalSymbolsRegExpPattern = `${keywordSymbolsRegExpPattern}|${specialSymbolsRegExpPattern}`;

    return terminalSymbolsRegExpPattern;
  }
}

module.exports = CommonLexer;
