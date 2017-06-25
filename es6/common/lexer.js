'use strict';

const Line = require('./line'),
      Rule = require('./rule'),
      Rules = require('./rules'),
      Context = require('./context');

class CommonLexer {
  constructor(rules, Line) {
    this.rules = rules;
    this.Line = Line;
  }

  linesFromContent(content, firstLineIndex = 0, context = new Context()) {
    const contents = content.split(/\n/),
          lines = this.linesFromContents(contents, firstLineIndex, context);

    return lines;
  }

  linesFromContents(contents, firstLineIndex, context) {
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
  
  static ruleFromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern) { return Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern); }

  static rulesFromGrammar(grammar) { return Rules.fromGrammar(grammar); }

  static significantTokenTypesFromGrammar(grammar) { return Rules.significantTokenTypesFromGrammar(grammar); }
}

module.exports = CommonLexer;
