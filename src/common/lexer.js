"use strict";

import Rule from "./rule";
import WhitespaceToken from "../common/token/nonSignificant/whitespace";
import RegularExpressionToken from "../common/token/significant/regularExpression";
import EndOfLineNonSignificantToken from "../common/token/nonSignificant/endOfLine";
import SinglyQuotedStringLiteralToken from "../common/token/significant/stringLiteral/singlyQuoted";
import DoublyQuotedStringLiteralToken from "../common/token/significant/stringLiteral/doublyQuoted";

import { EMPTY_STRING } from "../constants";
import { inCommentFromTokenAndInComment } from "../utilities/token";

export default class CommonLexer {
  constructor(rules, InCommentClasses, NotInCommentClasses) {
    this.rules = rules;
    this.InCommentClasses = InCommentClasses;
    this.NotInCommentClasses = NotInCommentClasses;
  }
  
  getRules() {
    return this.rules;
  }

  getInCommentClasses() {
    return this.InCommentClasses;
  }

  getNotInCommentClasses() {
    return this.NotInCommentClasses;
  }

  tokenise(content) {
    const tokens = [];

    let inComment = false;

    while (content !== EMPTY_STRING) {
      let token = null;

      const Classes = inComment ?
                        this.InCommentClasses :
                          this.NotInCommentClasses;

      Classes.some((Class) => {
        if (Class !== null) {
          token = Class.match(content);

          if (token !== null) {
            return true;
          }
        }
      });

      if (token === null) {
        let significantToken = null;

        this.rules.some((rule) => {
          significantToken = rule.match(content);

          if (significantToken !== null) {
            token = significantToken; ///

            return true;
          }
        });
      }

      if (token === null) {
        throw new Error(`The content '${content}' cannot be tokenised.`);
      }

      tokens.push(token);

      inComment = inCommentFromTokenAndInComment(token, inComment);

      const tokenContentLength = token.getContentLength(),
            start = tokenContentLength; ///

      content = content.substring(start);
    }

    return tokens;
  }

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = RegularExpressionToken;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = SinglyQuotedStringLiteralToken;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing(Class) {
    const { entries } = Class,
          InCommentClasses = InCommentClassesFromClass(Class),
          NotInCommentClasses = NotInCommentClassesFromClass(Class),
          rules = entries.map((entry) => Rule.fromEntry(entry)),
          lexer = new Class(rules, InCommentClasses, NotInCommentClasses);

    return lexer;
  }

  static fromRules(Class, rules) {
    const InCommentClasses = InCommentClassesFromClass(Class),
          NotInCommentClasses = NotInCommentClassesFromClass(Class),
          lexer = new Class(rules, InCommentClasses, NotInCommentClasses);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = entries.map((entry) => Rule.fromEntry(entry)),
          InCommentClasses = InCommentClassesFromClass(Class),
          NotInCommentClasses = NotInCommentClassesFromClass(Class),
          lexer = new Class(rules, InCommentClasses, NotInCommentClasses);

    return lexer;
  }
}

function InCommentClassesFromClass(Class) {
  const { EndOfLineToken, EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken } = Class,
        InCommentClasses = [
          EndOfLineToken,
          EndOfMultiLineCommentToken,
          MiddleOfMultiLineCommentToken
        ];

  return InCommentClasses;
}

function NotInCommentClassesFromClass(Class) {
  const { EndOfLineToken,
          WhitespaceToken,
          SingleLineCommentToken,
          RegularExpressionToken,
          StartOfMultiLineCommentToken,
          SinglyQuotedStringLiteralToken,
          DoublyQuotedStringLiteralToken } = Class,
      NotInCommentClasses = [
        EndOfLineToken,
        WhitespaceToken,
        StartOfMultiLineCommentToken,
        SingleLineCommentToken,
        RegularExpressionToken,
        SinglyQuotedStringLiteralToken,
        DoublyQuotedStringLiteralToken
      ];

  return NotInCommentClasses;
}