"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class BNFLexer extends CommonLexer {
  tokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokenise(content);

    return tokens;
  }

  static entries = entries;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static fromRules(rules) { return CommonLexer.fromRules(BNFLexer, rules); }

  static fromNothing() { return CommonLexer.fromNothing(BNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BNFLexer, entries); }
}
