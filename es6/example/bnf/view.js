"use strict";

import BNFLexer from "../../bnf/lexer";
import ExampleView from "../../example/view";

export default class BNFView extends ExampleView {
  getLexer() {
    const Lexer = BNFLexer;  ///

    return Lexer;
  }

  getTitle() {
    const title = "BNF lexer example";

    return title;
  }

  getInitialContent() {
    const initialContent = `  ruleName             ::=  [name] ;

  regularExpression    ::=  [regularExpression] ;

  significantTokenType ::=  [type] ;

  terminalSymbol       ::=  [stringLiteral] ;

  endOfLine            ::=  "<END_OF_LINE>" ;

  epsilon              ::=  "ε" ;

  wildcard             ::=  "." ;`

    return initialContent;
  }

  static defaultProperties ={
    className: "bnf"
  };
}
