"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";
import WhitespaceToken from "../token/nonSignificant/whitespace";
import RegularExpressionToken from "../token/significant/regularExpression";
import EndOfLineNonSignificantToken from "../token/nonSignificant/endOfLine";
import SinglyQuotedStringLiteralToken from "../token/significant/stringLiteral/singlyQuoted";
import DoublyQuotedStringLiteralToken from "../token/significant/stringLiteral/doublyQuoted";
import PythonStyleSingleLineCommentToken from "../token/nonSignificant/comment/singleLine/pythonStyle";
import EndOfLineCommentNonSignificantToken from "../token/nonSignificant/comment/endOfLine";
import PythonStyleEndOfMultiLineCommentToken from "../token/nonSignificant/comment/multiLine/endOf/pythonStyle";
import PythonStyleStartOfMultiLineCommentToken from "../token/nonSignificant/comment/multiLine/startOf/pythonStyle";
import PythonStyleMiddleOfMultiLineCommentToken from "../token/nonSignificant/comment/multiLine/middleOf/pythonStyle";

export default class BasicLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = EndOfLineCommentNonSignificantToken; ///

  static RegularExpressionToken = RegularExpressionToken;

  static SingleLineCommentToken = PythonStyleSingleLineCommentToken; ///

  static EndOfMultiLineCommentToken = PythonStyleEndOfMultiLineCommentToken; ///

  static StartOfMultiLineCommentToken = PythonStyleStartOfMultiLineCommentToken; ///

  static MiddleOfMultiLineCommentToken = PythonStyleMiddleOfMultiLineCommentToken; ///

  static SinglyQuotedStringLiteralToken = SinglyQuotedStringLiteralToken;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(BasicLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
