"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class LaTeXLexer extends CommonLexer {
  matchBrokenComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchMultiLineCommentInComment(content, inComment) { return null; }

  matchMultiLineCommentNotInComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  matchDoublyQuotedStringLiteral(content) { return null; }

  static fromNothing() { return CommonLexer.fromNothing(LaTeXLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(LaTeXLexer, entries); }
}

Object.assign(LaTeXLexer, {
  entries
});
