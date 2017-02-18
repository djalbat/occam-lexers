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

  linesFromContents(contents, firstLineIndex = 0, context = new Context()) {
    var lines = [],
        index = firstLineIndex,
        content = contents[index];

    while (content !== undefined) {
      var length = index - firstLineIndex,
          number = index + 1,
          terminate = context.shouldTerminate(length);

      if (terminate) {
        break;
      }

      var line = this.Line.fromContent(content, context, this.rules);

      line.setNumber(number);

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
