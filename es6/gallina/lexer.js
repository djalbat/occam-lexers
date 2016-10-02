'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules');

var rules = Rules.fromGrammar(grammar);

class Lexer {
  linesFromContent(content, context) {
    context = context || new Context(0);  ///
    
    var contents = content.split(/\n/),
        lines = contents.map(function(content) {
          var line = Line.fromContent(content, context, rules);
  
          return line;
        });
  
    return lines;
  }
  
  tokensFromContent(content, context) {
    var lines = this.linesFromContent(content, context),
        tokens = lines.reduce(function(tokens, line) {
          var lineTokens = line.getTokens();

          tokens = tokens.concat(lineTokens);

          return tokens;
        }, []);
    
    return tokens;    
  }
}

module.exports = Lexer;

