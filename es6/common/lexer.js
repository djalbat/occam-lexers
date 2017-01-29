'use strict';

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    SignificantToken = require('./token/significant');

class CommonLexer {
  constructor(rules, Line) {
    this.rules = rules;
    this.Line = Line;
  }

  linesFromContent(content, context) {
    var contents = content.split(/\n/),
        lines = this.linesFromContents(contents, context);
  
    return lines;
  }

  linesFromContents(contents, context) {
    var lines = contents.map(function(content) {
          var line = this.Line.fromContent(content, context, this.rules);

          return line;
        }.bind(this));

    return lines;
  }
  
  tokensFromContent(content) {
    var lines = this.linesFromContent(content),
        tokens = tokensFromLines(lines);
    
    return tokens;    
  }

  static rulesFromGrammar(grammar) { return Rules.fromGrammar(grammar); }

  static getSignificantTokenTypes(grammar) {
    var significantTokenTypes = Object.keys(SignificantToken.types),
        grammarTypes = grammar.map(function(grammarEntry) {
          var type = util.typeFromGrammarEntry(grammarEntry),
              grammarType = type;  ///

          return grammarType;
        });

    significantTokenTypes = significantTokenTypes.concat(grammarTypes); ///

    return significantTokenTypes;
  }
}

module.exports = CommonLexer;

function tokensFromLines(lines) {
  var tokens = lines.reduce(function(tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}
