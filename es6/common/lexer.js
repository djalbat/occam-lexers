'use strict';

const Line = require('./line'),
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
    const lines = [];
    
    let index = firstLineIndex,    
        content = contents[index];

    while (content !== undefined) {
      const length = index - firstLineIndex,
            terminate = context.shouldTerminate(length);

      if (terminate) {
        break;
      }

      const line = this.Line.fromContent(content, context, this.rules);

      lines.push(line);

      content = contents[++index];
    }

    return lines;
  }

  static rulesFromGrammar(grammar) { return Rules.fromGrammar(grammar); }

  static significantTokenTypesFromGrammar(grammar) {
    let  significantTokenTypes = Object.keys(SignificantToken.types);
    
    const grammarTypes = grammar.map(function(grammarEntry) {
            const type = util.typeFromGrammarEntry(grammarEntry),
                  grammarType = type;  ///
    
            return grammarType;
          });

    significantTokenTypes = significantTokenTypes.concat(grammarTypes); ///

    return significantTokenTypes;
  }
}

module.exports = CommonLexer;
