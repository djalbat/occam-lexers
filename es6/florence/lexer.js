"use strict";

const entries = require("./entries"),
      CommonLexer = require("../common/lexer"),
      SingleLineCommentToken = require("./token/nonSignificant/comment/singleLine"),
      EndOfLineSignificantToken = require("../common/token/significant/endOfLine"),
      EndOfMultiLineCommentToken = require("./token/nonSignificant/comment/multiLine/endOf"),
      StartOfMultiLineCommentToken = require("./token/nonSignificant/comment/multiLine/startOf"),
      MiddleOfMultiLineCommentToken = require("./token/nonSignificant/comment/multiLine/middleOf");

class FlorenceLexer extends CommonLexer {
  tokeniseEndOfLines(content) { return super.tokeniseEndOfLines(content, EndOfLineSignificantToken); }

  matchBrokenComment(content, inComment) { return null; }

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

  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  static fromNothing() { return FlorenceLexer.fromEntries(entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FlorenceLexer, entries); }
}

Object.assign(FlorenceLexer, {
  entries
});

module.exports = FlorenceLexer;
