"use strict";

import View from "../view";
import BNFLexer from "../../bnf/lexer";

export default class BNFView extends View {
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
