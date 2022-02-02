"use strict";

import entries from "./entries";
import CommonLexer from "../common/lexer";
import PythonStyleSingleLineCommentToken from "../common/token/nonSignificant/comment/singleLine/pythonStyle";
import PythonStyleEndOfMultiLineCommentToken from "../common/token/nonSignificant/comment/multiLine/endOf/pythonStyle";
import PythonStyleStartOfMultiLineCommentToken from "../common/token/nonSignificant/comment/multiLine/startOf/pythonStyle";
import PythonStyleMiddleOfMultiLineCommentToken from "../common/token/nonSignificant/comment/multiLine/middleOf/pythonStyle";

export default class BasicLexer extends CommonLexer {
  static SingleLineCommentToken = PythonStyleSingleLineCommentToken; ///

  static EndOfMultiLineCommentToken = PythonStyleEndOfMultiLineCommentToken; ///

  static StartOfMultiLineCommentToken = PythonStyleStartOfMultiLineCommentToken; ///

  static MiddleOfMultiLineCommentToken = PythonStyleMiddleOfMultiLineCommentToken; ///

  static entries = entries;

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(BasicLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
