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

  addedLinesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = this.linesFromContent(content, firstLineIndex, context),
          addedLines = lines; ///

    return addedLines;
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
  
  static ruleFromEntry(entry) { return Rule.fromEntry(entry); }
  
  static rulesFromEntries(entries) { return Rules.fromEntries(entries); }
}

module.exports = CommonLexer;
