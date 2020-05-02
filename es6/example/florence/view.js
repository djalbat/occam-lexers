"use strict";

import ExampleView from "../../example/view";
import FlorenceLexer from "../../florence/lexer";
import defaultLexicalPattern from "../../florence/defaultLexicalPattern";

export default class FlorenceView extends ExampleView {
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

  getLexer() {
    const Lexer = FlorenceLexer;  ///

    return Lexer;
  }

  getTitle() {
    const title = "Florence lexer example";

    return title;
  }

  getInitialContent() {
    const initialContent = "";

    return initialContent;
  }

  static defaultProperties = {
    className: "florence"
  };
}
