'use strict';

const Rules = require('./rules');

class CommonLexer {
  constructor(rules) {
    this.rules = rules;
  }
  
  getRules() {
    return this.rules;
  }

  tokenise(content) {
    const tokensOrContents = this.tokeniseEndOfLines(content);

    this.tokeniseContents(tokensOrContents);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  tokeniseContents(tokensOrContents) {
    let inComment = false;

    let index = 0,
        tokensOrContentsLength = tokensOrContents.length;

    while (index < tokensOrContentsLength) {
      const tokenOrContent = tokensOrContents[index],
            tokenOrContentString = (typeof tokenOrContent === 'string'),
            tokenOrContentContent = tokenOrContentString; ///

      if (tokenOrContentContent) {
        const tokens = [],
              content = tokenOrContent; ///

        inComment = this.tokensFromContent(tokens, content, inComment);

        const tokensLength = tokens.length,
              start = index,  ///
              deleteCount = 1;

        splice(tokensOrContents, start, deleteCount, tokens);

        tokensOrContentsLength += tokensLength - 1;

        index += tokensLength - 1;
      }

      index++;
    }
  }

  static fromNothing(Class) {
    const { entries } = Class,
          lexer = CommonLexer.fromEntries(Class, entries);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }
}

module.exports = CommonLexer;
