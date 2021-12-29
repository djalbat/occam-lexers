"use strict";

import { BNFLexer } from "../../index"; ///

import View from "../view";

export default class BNFView extends View {
  Lexer = BNFLexer;

  initialContent = `  
  
    ruleName             ::=  [name] ;
  
    regularExpression    ::=  [regular-expression] ;
  
    significantTokenType ::=  [type] ;
  
    terminalSymbol       ::=  [string-literal] ;
  
    endOfLine            ::=  "<END_OF_LINE>" ;
  
    epsilon              ::=  "ε" ;
  
    wildcard             ::=  "." ;
    
  `;

  static defaultProperties = {
    className: "bnf"
  };
}
