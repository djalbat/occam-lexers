'use strict';

var Line = require('./line'),
    Rules = require('../common/rules');

class Lexer {
  constructor(rules) {
    this.rules = rules;
  }

  linesFromContent(content) {
    var contents = content.split(/\n/),
        lines = contents.map(function(content) {
          var line = Line.fromContent(content, this.rules);
  
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

  static fromTerminalSymbolsRegExpPattern(terminalSymbolsRegExpPattern) {
    var terminalSymbolsRegExp = new RegExp('^(' + terminalSymbolsRegExpPattern + ')'),
        grammar = [
          { terminal : terminalSymbolsRegExp }
        ];

    var rules = Rules.fromGrammar(grammar),
        lexer = new Lexer(rules);

    return lexer;
  }
}

module.exports = Lexer;
