"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class BasicLexer extends CommonLexer {
  static RegularExpressionToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static entries = entries;

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
