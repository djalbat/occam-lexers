"use strict";

import View from "../view";
import BasicLexer from "../../basic/lexer";

export default class BasicView extends View {
  Lexer = BasicLexer;

  heading = "Basic lexer example";

  initialContent = "1+2/3";

  static defaultProperties = {
    className: "basic"
  };
}
