'use strict';

const necessary = require('necessary');

const Rule = require('./rule'),
      Rules = require('./rules'),
      Configuration = require('./configuration'),
      SignificantTokens = require('./tokens/significant');

const { arrayUtilities } = necessary,
      { splice } = arrayUtilities;

class CommonLexer {
  constructor(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens) {
    this.rules = rules;
    this.EndOfLineTokens = EndOfLineTokens;
    this.CommentTokens = CommentTokens;
    this.WhitespaceTokens = WhitespaceTokens;
    this.StringLiteralTokens = StringLiteralTokens;
    this.RegularExpressionTokens = RegularExpressionTokens;
  }
  
  getRules() {
    return this.rules;
  }

  tokensFromContent(content, previousTokenCommentToken = false, nextTokenCommentToken = false, minimumContentLength = Infinity) {
    const configuration = new Configuration(previousTokenCommentToken, nextTokenCommentToken, minimumContentLength),
          tokens = this.tokensFromContentAndConfiguration(content, configuration);

    return tokens;
  }
  
  tokensFromContentAndConfiguration(content, configuration) {
    const tokensOrContents = [content], ///
          previousTokenCommentToken = configuration.isPreviousTokenCommentToken();

    this.EndOfLineTokens.pass(tokensOrContents);

    let index = 0,
        inComment = previousTokenCommentToken, ///
        contentLength = 0,
        tokensOrContentsLength = tokensOrContents.length;

    while (index < tokensOrContentsLength) {
      const tokenOrContent = tokensOrContents[index],
            tokenOrContentContent = (typeof tokenOrContent === 'string');

      if (tokenOrContentContent) {
        const content = tokenOrContent, ///
              nonEndOfLineTokensOrContent = [content];

        inComment = this.nonEndOfLineTokensFromContent(nonEndOfLineTokensOrContent, inComment);

        const nonEndOfLineTokens = nonEndOfLineTokensOrContent, ///
              terminate = configuration.shouldTerminate(contentLength, nonEndOfLineTokens),
              start = index,  ///
              deleteCount = 1,
              nonEndOfLineTokensLength = nonEndOfLineTokens.length;

        splice(tokensOrContents, start, deleteCount, nonEndOfLineTokens);

        tokensOrContentsLength -= 1;

        tokensOrContentsLength += nonEndOfLineTokensLength;

        index += nonEndOfLineTokensLength;

        if (terminate) {
          const start = index;  ///

          splice(tokensOrContents, start);

          break;
        } else {
          const nonEndOfLineTokensContentsLength = nonEndOfLineTokens.reduce(function(nonEndOfLineTokensContentsLength, nonEndOfLineToken) {
            const nonEndOfLineTokensContentLength = nonEndOfLineToken.getContentLength();

            nonEndOfLineTokensContentsLength += nonEndOfLineTokensContentLength;

            return nonEndOfLineTokensContentsLength;
          }, 0);

          contentLength += nonEndOfLineTokensContentsLength;
        }
      } else {
        const endOfLineToken = tokenOrContent,  ///
              endOfLineTokens = [endOfLineToken],
              terminate = configuration.shouldTerminate(contentLength, endOfLineTokens);

        index += 1;

        if (terminate) {
          const start = index;  ///

          splice(tokensOrContents, start);

          break;
        } else {
          const endOfLineTokenContentLength = endOfLineToken.getContentLength();

          contentLength += endOfLineTokenContentLength;
        }
      }
    }

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  nonEndOfLineTokensFromContent(nonEndOfLineTokensOrContent, inComment) {
    const tokensOrContents = nonEndOfLineTokensOrContent; ///

    inComment = this.CommentTokens.pass(tokensOrContents, inComment);

    this.RegularExpressionTokens.pass(tokensOrContents);

    this.StringLiteralTokens.pass(tokensOrContents);

    this.WhitespaceTokens.pass(tokensOrContents);

    SignificantTokens.pass(tokensOrContents, this.rules);

    return inComment;
  }
  
  static ruleFromEntry(entry) { return Rule.fromEntry(entry); }
  
  static rulesFromEntries(entries) { return Rules.fromEntries(entries); }
}

module.exports = CommonLexer;
