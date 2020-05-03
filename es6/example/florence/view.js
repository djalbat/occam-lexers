"use strict";

import View from "../view";
import FlorenceLexer from "../../florence/lexer";
import defaultLexicalPattern from "../../florence/defaultLexicalPattern";

export default class FlorenceView extends View {
  Lexer = FlorenceLexer;

  heading = "Florence lexer example";

  initialContent = `
  
Rule (Explosion)
  Conclusion
    A
    
  `;

  getTokens() {
    let entries = this.getEntries();

    const custom = `^(?:${defaultLexicalPattern})`;

    entries = [ { "custom" : custom }, ...entries ];

    const content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  static defaultProperties = {
    className: "florence"
  };
}
