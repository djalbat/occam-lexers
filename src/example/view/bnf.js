"use strict";

import { BNFLexer } from "../../index"; ///

import View from "../view";

export default class BNFView extends View {
  static Lexer = BNFLexer;

  static initialContent = `

      document                 ::=  ( rule | error )+ ;

      rule ambiguousModifier?  ::=  name "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*
                              
                                 |  noWhitespacePart

                                 ;

      nonTerminalPart          ::=  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName lookAheadModifier?

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  regularExpression
 
                                 |  terminalSymbol
  
                                 |  endOfLine
  
                                 |  wildcard
  
                                 ;
                              
      noWhitespacePart         ::=  "<NO_WHITESPACE>" ;                              

      choiceOfParts            ::=  "(" part ( "|" part )+ ")" ;

      sequenceOfParts          ::=  "(" part part+ ")" ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      regularExpression        ::=  [regular-expression] ;

      terminalSymbol           ::=  [string-literal] ;

      endOfLine                ::=  "<END_OF_LINE>" ;

      wildcard                 ::=  "." ;

      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      ambiguousModifier        ::=  <NO_WHITESPACE>"!" ;

      lookAheadModifier        ::=  <NO_WHITESPACE>"..." ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error                    ::=  . ;

`;

  static defaultProperties = {
    className: "bnf"
  };
}
