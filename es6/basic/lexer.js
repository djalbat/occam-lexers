'use strict';

const entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      tokenUtilities = require('../utilities/token'),
      EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine');

const { tokenise } = tokenUtilities,
      rules = Rules.fromEntries(entries);

class BasicLexer extends CommonLexer {
  tokensFromContent(tokens, content, inComment) {
    while (content !== '') {
      let significantToken = null;

      rules.some((rule) => {
        significantToken = rule.match(content);

        if (significantToken !== null) {
          return true;
        }
      });

      if (significantToken === null) {
        throw new Error(`The content '${content}' cannot be tokenised.`);
      }

      const token = significantToken; ///

      tokens.push(token);

      const tokenContentLength = token.getContentLength(),
            start = tokenContentLength; ///

      content = content = content.substring(start);
    }

    return inComment;
  }

  tokeniseEndOfLines(content) { return tokenise(content, EndOfLineNonSignificantToken); }

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}

Object.assign(BasicLexer, {
  entries
});

module.exports = BasicLexer;
