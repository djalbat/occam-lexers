"use strict";

import { arrayUtilities } from "necessary";

import Rule from "./rule";
import WhitespaceToken from "../common/token/nonSignificant/whitespace";
import RegularExpressionToken from "../common/token/significant/regularExpression";
import SingleLineCommentToken from "../common/token/nonSignificant/comment/singleLine";
import EndOfMultiLineCommentToken from "../common/token/nonSignificant/comment/multiLine/endOf";
import EndOfLineNonSignificantToken from "../common/token/nonSignificant/endOfLine";
import StartOfMultiLineCommentToken from "../common/token/nonSignificant/comment/multiLine/startOf";
import MiddleOfMultiLineCommentToken from "../common/token/nonSignificant/comment/multiLine/middleOf";
import SinglyQuotedStringLiteralToken from "../common/token/significant/stringLiteral/singlyQuoted";
import DoublyQuotedStringLiteralToken from "../common/token/significant/stringLiteral/doublyQuoted";

import { STRING, EMPTY_STRING } from "../constants";
import { isTokenInCommentPreservingToken } from "../utilities/token";

const { splice } = arrayUtilities;

export default class CommonLexer {
  constructor(rules, InCommentTokens, NotInCommentTokens) {
    this.rules = rules;
    this.InCommentTokens = InCommentTokens;
    this.NotInCommentTokens = NotInCommentTokens;
  }
  
  getRules() {
    return this.rules;
  }

  getInCommentTokens() {
    return this.InCommentTokens;
  }

  getNotInCommentTokens() {
    return this.NotInCommentTokens;
  }

  tokenise(content) {
    const endOfLineTokensOrContents = this.tokeniseEndOfLines(content),
          tokensOrContents = endOfLineTokensOrContents; ///

    this.tokeniseContents(tokensOrContents);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  tokeniseEndOfLines(content) {
    const { EndOfLineToken } = this.constructor,
          endOfLineTokensOrContents = [];

    let endOfLineToken = EndOfLineToken.match(content);

    while (endOfLineToken !== null) {
      const endOfLineTokenIndex = endOfLineToken.getIndex(),
            endOfLineTokenContentLength = endOfLineToken.getContentLength(),
            left = endOfLineTokenIndex, ///
            right = endOfLineTokenIndex + endOfLineTokenContentLength,
            leftContent = content.substring(0, left),
            rightContent = content.substring(right);

      content = leftContent;  ///

      endOfLineTokensOrContents.push(content);

      endOfLineTokensOrContents.push(endOfLineToken);

      content = rightContent; ///

      endOfLineToken = EndOfLineToken.match(content);
    }

    endOfLineTokensOrContents.push(content);

    return endOfLineTokensOrContents;
  }

  tokeniseContents(tokensOrContents) {
    let inComment = false;

    let index = 0,
        tokensOrContentsLength = tokensOrContents.length;

    while (index < tokensOrContentsLength) {
      const tokenOrContent = tokensOrContents[index],
            tokenOrContentString = (typeof tokenOrContent === STRING),
            tokenOrContentContent = tokenOrContentString; ///

      if (tokenOrContentContent) {
        const tokens = [],
              content = tokenOrContent; ///

        inComment = this.tokeniseContent(content, tokens, inComment);

        const tokensLength = tokens.length,
              start = index,  ///
              deleteCount = 1;

        splice(tokensOrContents, start, deleteCount, tokens);

        tokensOrContentsLength += tokensLength - 1;

        index += tokensLength - 1;
      }

      index++;
    }
  }

  tokeniseContent(content, tokens, inComment) {
    while (content !== EMPTY_STRING) {
      let token = null;

      const Tokens = inComment ?
                       this.InCommentTokens :
                         this.NotInCommentTokens;

      Tokens.some((Token) => {
        if (Token !== null) {
          token = Token.match(content);

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

      const commentTokenInCommentPreserving = isTokenInCommentPreservingToken(token),
            tokenContentLength = token.getContentLength(),
            start = tokenContentLength; ///

      content = content.substring(start);

      inComment = commentTokenInCommentPreserving; ///
    }

    return inComment;
  }

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static SingleLineCommentToken = SingleLineCommentToken;

  static RegularExpressionToken = RegularExpressionToken;

  static EndOfMultiLineCommentToken = EndOfMultiLineCommentToken;

  static StartOfMultiLineCommentToken = StartOfMultiLineCommentToken;

  static MiddleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken;

  static SinglyQuotedStringLiteralToken = SinglyQuotedStringLiteralToken;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromRules(Class, rules) {
    const InCommentTokens = InCommentTokensFromClass(Class),
          NotInCommentTokens = NotInCommentTokensFromClass(Class),
          lexer = new Class(rules, InCommentTokens, NotInCommentTokens);

    return lexer;
  }

  static fromNothing(Class) {
    const { entries } = Class,
          InCommentTokens = InCommentTokensFromClass(Class),
          NotInCommentTokens = NotInCommentTokensFromClass(Class),
          rules = entries.map((entry) => Rule.fromEntry(entry)),
          lexer = new Class(rules, InCommentTokens, NotInCommentTokens);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = entries.map((entry) => Rule.fromEntry(entry)),
          InCommentTokens = InCommentTokensFromClass(Class),
          NotInCommentTokens = NotInCommentTokensFromClass(Class),
          lexer = new Class(rules, InCommentTokens, NotInCommentTokens);

    return lexer;
  }
}

function InCommentTokensFromClass(Class) {
  const { EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken } = Class,
        InCommentTokens = [
          EndOfMultiLineCommentToken,
          MiddleOfMultiLineCommentToken
        ];

  return InCommentTokens;
}

function NotInCommentTokensFromClass(Class) {
  const { WhitespaceToken,
          SingleLineCommentToken,
          RegularExpressionToken,
          StartOfMultiLineCommentToken,
          SinglyQuotedStringLiteralToken,
          DoublyQuotedStringLiteralToken } = Class,
      NotInCommentTokens = [
        WhitespaceToken,
        StartOfMultiLineCommentToken,
        SingleLineCommentToken,
        RegularExpressionToken,
        SinglyQuotedStringLiteralToken,
        DoublyQuotedStringLiteralToken
      ];

  return NotInCommentTokens;
}