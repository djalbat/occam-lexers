'use strict';

const necessary = require('necessary');

const Rule = require('./rule'),
      WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
      BrokenCommentToken = require('../common/token/nonSignificant/brokenComment'),
      RegularExpressionToken = require('../common/token/significant/regularExpression'),
      SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
      EndOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/endOf'),
      EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine'),
      StartOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/startOf'),
      MiddleOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/middleOf'),
      SinglyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/singlyQuoted'),
      DoublyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/doublyQuoted'),
      SinglyQuotedBrokenStringLiteralToken = require('../common/token/significant/brokenStringLiteral/singlyQuoted'),
      DoublyQuotedBrokenStringLiteralToken = require('../common/token/significant/brokenStringLiteral/doublyQuoted');

const { arrayUtilities } = necessary,
      { splice } = arrayUtilities;

class CommonLexer {
  constructor(rules) {
    this.rules = rules;
  }
  
  getRules() {
    return this.rules;
  }

  tokenise(content) {
    const endOfLineTokensOrContents = this.tokeniseEndOfLines(content),
          tokensOrContents = endOfLineTokensOrContents; ///

    this.tokeniseContents(tokensOrContents);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  tokeniseEndOfLines(content, EndOfLineToken = EndOfLineNonSignificantToken) {
    const endOfLineTokensOrContents = [];

    let endOfLineToken = EndOfLineToken.match(content);

    while (endOfLineToken !== null) {
      const endOfLineTokenIndex = endOfLineToken.getIndex(),
            endOfLineTokenContentLength = endOfLineToken.getContentLength(),
            left = endOfLineTokenIndex, ///
            right = endOfLineTokenIndex + endOfLineTokenContentLength,
            leftContent = content.substring(0, left),
            rightContent = content.substring(right);

      content = leftContent;  ///

      endOfLineTokensOrContents.push(content);

      endOfLineTokensOrContents.push(endOfLineToken);

      content = rightContent; ///

      endOfLineToken = EndOfLineToken.match(content);
    }

    endOfLineTokensOrContents.push(content);

    return endOfLineTokensOrContents;
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
      let token = this.matchMultiLineCommentInComment(content, inComment)
               || this.matchWhitespace(content)
               || this.matchMultiLineCommentNotInComment(content, inComment)
               || this.matchSingleLineComment(content, inComment)
               || this.matchBrokenComment(content, inComment)
               || this.matchRegularExpression(content)
               || this.matchSinglyQuotedStringLiteral(content)
               || this.matchDoublyQuotedStringLiteral(content);

      if (token === null) {
        let significantToken = null;

        this.rules.some((rule) => {
          significantToken = rule.match(content);

          if (significantToken !== null) {
            token = significantToken; ///

            return true;
          }
        });
      }

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

  matchBrokenComment(content, inComment) {
    const brokenCommentToken = inComment ?
                                 null :
                                   BrokenCommentToken.match(content);

    return brokenCommentToken;
  }

  matchSingleLineComment(content, inComment) {
    const singleLineCommentToken = inComment ?
                                     null :
                                       SingleLineCommentToken.match(content);

    return singleLineCommentToken;
  }

  matchMultiLineCommentInComment(content, inComment) {
    const multiLinCommentToken = inComment ?
                                   EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) :
                                     null;

    return multiLinCommentToken;
  }

  matchMultiLineCommentNotInComment(content, inComment) {
    const multiLinCommentToken = inComment ?
                                   null :
                                     StartOfMultiLineCommentToken.match(content);

    return multiLinCommentToken;
  }

  matchWhitespace(content) { return WhitespaceToken.match(content); }

  matchRegularExpression(content) { return RegularExpressionToken.match(content); }

  matchSinglyQuotedStringLiteral(content) { return SinglyQuotedStringLiteralToken.match(content) || SinglyQuotedBrokenStringLiteralToken.match(content); }

  matchDoublyQuotedStringLiteral(content) { return DoublyQuotedStringLiteralToken.match(content) || DoublyQuotedBrokenStringLiteralToken.match(content); }

  static fromNothing(Class) {
    const { entries } = Class,
          rules = entries.map((entry) => Rule.fromEntry(entry)),
          lexer = new Class(rules);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = entries.map((entry) => Rule.fromEntry(entry)),
          lexer = new Class(rules);

    return lexer;
  }
}

module.exports = CommonLexer;
