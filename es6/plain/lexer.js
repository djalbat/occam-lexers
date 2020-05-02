"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class PlainLexer extends CommonLexer {
  matchBrokenComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchMultiLineCommentInComment(content, inComment) { return null; }

  matchMultiLineCommentNotInComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  matchDoublyQuotedStringLiteral(content) { return null; }

  static entries = entries;

  static fromNothing() { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }
}
