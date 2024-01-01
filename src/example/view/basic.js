"use strict";

import { BasicLexer } from "../../index"; ///

import View from "../view";

export default class BasicView extends View {
  static Lexer = BasicLexer;

  static initialContent = `al𝔾`;

  static defaultProperties = {
    className: "basic"
  };
}
