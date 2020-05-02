"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";
import SingleLineCommentToken from "./token/nonSignificant/comment/singleLine";
import EndOfLineSignificantToken from "../common/token/significant/endOfLine";
import EndOfMultiLineCommentToken from "./token/nonSignificant/comment/multiLine/endOf";
import StartOfMultiLineCommentToken from "./token/nonSignificant/comment/multiLine/startOf";
import MiddleOfMultiLineCommentToken from "./token/nonSignificant/comment/multiLine/middleOf";

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
