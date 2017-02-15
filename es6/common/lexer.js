'use strict';

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    Context = require('./context'),
    SignificantToken = require('./token/significant');

class CommonLexer {
  constructor(rules, Line) {
    this.rules = rules;
    this.Line = Line;
  }

  linesFromContents(contents, context = new Context()) {
    var lines = [],
        index = 0,
        content = contents[index];

    while (content !== undefined) {
      var terminate = context.shouldTerminate(index);

      if (terminate) {
        break;
      }

      var line = this.Line.fromContent(content, context, this.rules);

      lines.push(line);

      content = contents[++index];
    }

    return lines;
  }

  static rulesFromGrammar(grammar) { return Rules.fromGrammar(grammar); }

  static significantTokenTypesFromGrammar(grammar) {
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
