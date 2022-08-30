"use strict";

import Rule from "../rule";

export function rulesFromEntries(entries) {
  const rules = entries.map((entry) => {
    const rule = Rule.fromEntry(entry);

    return rule;
  });

  return rules;
}

export function lexerFromRules(Class, rules) {
  const InCommentClasses = InCommentClassesFromClass(Class),
        NotInCommentClasses = NotInCommentClassesFromClass(Class),
        lexer = new Class(rules, InCommentClasses, NotInCommentClasses);

  return lexer;
}

export default {
  rulesFromEntries,
  lexerFromRules
};

function InCommentClassesFromClass(Class) {
  const { EndOfLineCommentToken, EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken } = Class;

  const InCommentClasses = [
    EndOfLineCommentToken,
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
          DoublyQuotedStringLiteralToken } = Class;

  const NotInCommentClasses = [
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
