"use strict";

import BasicLexer from "../../basic/lexer";
import ExampleView from "../../example/view";

export default class BasicView extends ExampleView {
  getLexer() {
    const Lexer = BasicLexer; ///

    return Lexer;
  }

  getTitle() {
    const title = "Basic lexer example";

    return title;
  }

  getInitialContent() {
    const initialContent = "1+2/3";

    return initialContent;
  }

  static defaultProperties = {
    className: "basic"
  };
}
