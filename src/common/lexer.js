"use strict";

import { stringUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { inCommentFromTokenAndInComment } from "../utilities/token";
import { rulesFromEntries, lexerFromRules } from "../utilities/lexer";

const { substring } = stringUtilities;

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

  tokenise(content, inComment = false) {
    const tokens = [];

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

      content = substring(content, start);
    }

    return tokens;
  }

  static fromNothing(Class) {
    const { entries } = Class,
          rules = rulesFromEntries(entries),
          lexer = lexerFromRules(Class, rules);

    return lexer;
  }

  static fromRules(Class, rules) {
    const lexer = lexerFromRules(Class, rules);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = rulesFromEntries(entries),
          lexer = lexerFromRules(Class, rules);

    return lexer;
  }
}
