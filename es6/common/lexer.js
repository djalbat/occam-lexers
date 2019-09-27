'use strict';

const necessary = require('necessary');

const Rule = require('./rule'),
      Rules = require('./rules'),
      WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
      SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
      EntireMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/entire');

const { arrayUtilities } = necessary,
      { splice } = arrayUtilities,
      whiteSpaceRule = Rule.fromToken(WhitespaceToken),
      entireMultiLineCommentRule = Rule.fromToken(EntireMultiLineCommentToken);

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

        inComment = this.tokeniseContent(content, tokens, inComment);

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

  tokeniseContent(content, tokens, inComment) {
    while (content !== '') {
      const token = this.matchWhitespace(content)
                 || this.matchMultiLineComment(content, inComment)
                 || this.matchSingleLineComment(content, inComment)
                 || this.matchRules(content);

      if (token === null) {
        throw new Error(`The content '${content}' cannot be tokenised.`);
      }

      tokens.push(token);

      const tokenContentLength = token.getContentLength(),
            start = tokenContentLength; ///

      content = content = content.substring(start);

      const tokenCommentToken = token.isCommentToken();

      if (tokenCommentToken) {
        const commentToken = token; ///

        inComment = commentToken.isInComment();
      }
    }

    return inComment;
  }

  matchRules(content) {
    let significantToken = null;

    this.rules.some((rule) => {
      significantToken = rule.match(content);

      if (significantToken !== null) {
        return true;
      }
    });

    return significantToken;
  }

  matchWhitespace(content) {
    const whiteSpaceToken = whiteSpaceRule.match(content);

    return whiteSpaceToken;
  }

  matchMultiLineComment(content, inComment) {
    let multiLinCommentToken = null;

    if (!inComment) {

    } else {

    }

    return multiLinCommentToken;
  }

  matchSingleLineComment(content, inComment) {
    let singleLineCommentToken = null;

    if (!inComment) {
      singleLineCommentToken = SingleLineCommentToken.match(content);
    }

    return singleLineCommentToken;
  }

  static fromRules(Class, rules) {
    const lexer = new Class(rules);

    return lexer;
  }

  static fromNothing(Class) {
    const { entries } = Class,
          rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }
}

module.exports = CommonLexer;
