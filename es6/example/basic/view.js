"use strict";

import BasicLexer from "../../basic/lexer";
import ExampleView from "../../example/view";

export default class BasicView extends ExampleView {
  Lexer = BasicLexer;

  heading = "Basic lexer example";

  initialContent = "1+2/3";

  static defaultProperties = {
    className: "basic"
  };
}
