"use strict";

import ExampleView from "../../example/view";
import FlorenceLexer from "../../florence/lexer";
import defaultLexicalPattern from "../../florence/defaultLexicalPattern";

export default class FlorenceView extends ExampleView {
  Lexer = FlorenceLexer;

  heading = "Florence lexer example";

  initialContent = "";

  getTokens() {
    let entries = this.getEntries();

    const custom = `^(?:${defaultLexicalPattern})`;

    entries = [ { "custom" : custom }, ...entries ];

    const Lexer = this.getLexer(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  static defaultProperties = {
    className: "florence"
  };
}
