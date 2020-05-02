"use strict";

import BasicLexer from "../../basic/lexer";
import ExampleView from "../../example/view";

class BasicExampleView extends ExampleView {
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
}

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: "basic"
  }
});

module.exports = BasicExampleView;
