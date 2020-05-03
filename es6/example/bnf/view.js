"use strict";

import BNFLexer from "../../bnf/lexer";
import ExampleView from "../../example/view";

export default class BNFView extends ExampleView {
  Lexer = BNFLexer;

  heading = "BNF lexer example";

  initialContent = `  
  
    ruleName             ::=  [name] ;
  
    regularExpression    ::=  [regularExpression] ;
  
    significantTokenType ::=  [type] ;
  
    terminalSymbol       ::=  [stringLiteral] ;
  
    endOfLine            ::=  "<END_OF_LINE>" ;
  
    epsilon              ::=  "ε" ;
  
    wildcard             ::=  "." ;
    
  `;

  static defaultProperties = {
    className: "bnf"
  };
}
