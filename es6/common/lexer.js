'use strict';

const Rule = require('./rule'),
      Rules = require('./rules'),
      Configuration = require('./configuration');

class CommonLexer {
  constructor(rules, Line) {
    this.rules = rules;
    this.Line = Line;
  }
  
  getRules() {
    return this.rules;
  }
  
  getLine() {
    return this.Line;
  }

  addedLinesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const configuration = new Configuration(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = this.linesFromContent(content, firstLineIndex, configuration),
          addedLines = lines; ///

    return addedLines;
  }

  linesFromContent(content, firstLineIndex = 0, configuration = new Configuration()) {
    let contents = content.split(/\n/);

    const contentsLength = contents.length,
          lastIndex = contentsLength - 1;

    contents = contents.map(function(content, index) {
      if (index !== lastIndex) {
        content = `${content}\n`;
      }

      return content;
    });

    const lines = this.linesFromContents(contents, firstLineIndex, configuration);

    return lines;
  }

  linesFromContents(contents, firstLineIndex, configuration) {
    const lines = [];
    
    let index = firstLineIndex,    
        content = contents[index];

    while (content !== undefined) {
      const length = index - firstLineIndex,
            terminate = configuration.shouldTerminate(length);

      if (terminate) {
        break;
      }

      const line = this.Line.fromContentRulesAndConfiguration(content, this.rules, configuration);

      lines.push(line);

      content = contents[++index];
    }

    return lines;
  }
  
  static ruleFromEntry(entry) { return Rule.fromEntry(entry); }
  
  static rulesFromEntries(entries) { return Rules.fromEntries(entries); }
}

module.exports = CommonLexer;
