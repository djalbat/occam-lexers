"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";
import WhitespaceToken from "../token/nonSignificant/whitespace";
import RegularExpressionToken from "../token/significant/regularExpression";
import EndOfLineNonSignificantToken from "../token/nonSignificant/endOfLine";
import DoublyQuotedStringLiteralToken from "../token/significant/stringLiteral/doublyQuoted";

export default class BNFLexer extends CommonLexer {
  tokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokenise(content);

    return tokens;
  }

  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static RegularExpressionToken = RegularExpressionToken;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(BNFLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(BNFLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BNFLexer, entries); }
}
