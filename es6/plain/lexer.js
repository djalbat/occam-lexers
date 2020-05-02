"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";

class PlainLexer extends CommonLexer {
  matchBrokenComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchMultiLineCommentInComment(content, inComment) { return null; }

  matchMultiLineCommentNotInComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  matchDoublyQuotedStringLiteral(content) { return null; }

  static fromNothing() { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }
}

Object.assign(PlainLexer, {
  entries
});

module.exports = PlainLexer;
