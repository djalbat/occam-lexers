"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFView;
    }
});
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BNFView extends _view.default {
    static Lexer = _index.BNFLexer;
    static initialContent = `

      document                 ::=  ( rule | error )+ ;

      rule                     ::=  name ambiguousModifier? "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*
                              
                                 |  startOfContentPart

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
                              
      startOfContentPart       ::=  "<START_OF_CONTENT>" ;                              

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

      error.                    ::=  . ;

`;
    static defaultProperties = {
        className: "bnf"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgXG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICAgICAgcnVsZSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBhbWJpZ3VvdXNNb2RpZmllcj8gXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIGRlZmluaXRpb25zICAgICAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcblxuICAgICAgZGVmaW5pdGlvbiAgICAgICAgICAgICAgIDo6PSAgcGFydCsgO1xuIFxuICAgICAgcGFydCAgICAgICAgICAgICAgICAgICAgIDo6PSAgbm9uVGVybWluYWxQYXJ0IHF1YW50aWZpZXIqXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdGFydE9mQ29udGVudFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9XaGl0ZXNwYWNlUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIG5vblRlcm1pbmFsUGFydCAgICAgICAgICA6Oj0gIGNob2ljZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2VxdWVuY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJ1bGVOYW1lIGxvb2tBaGVhZE1vZGlmaWVyP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIHRlcm1pbmFsUGFydCAgICAgICAgICAgICA6Oj0gIHNpZ25pZmljYW50VG9rZW5UeXBlXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb25cbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsU3ltYm9sXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHN0YXJ0T2ZDb250ZW50UGFydCAgICAgICA6Oj0gIFwiPFNUQVJUX09GX0NPTlRFTlQ+XCIgOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICBub1doaXRlc3BhY2VQYXJ0ICAgICAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiIDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHMgICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICAgICAgcnVsZU5hbWUgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgICAgIDo6PSAgW3R5cGVdIDtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb24gICAgICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdIDtcblxuICAgICAgZW5kT2ZMaW5lICAgICAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gICAgICB3aWxkY2FyZCAgICAgICAgICAgICAgICAgOjo9ICBcIi5cIiA7XG5cbiAgICAgIHF1YW50aWZpZXIgICAgICAgICAgICAgICA6Oj0gIG9wdGlvbmFsUXVhbnRpZmllclxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUXVhbnRpZmllclxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVRdWFudGlmaWVyXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICBhbWJpZ3VvdXNNb2RpZmllciAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiLi4uXCIgO1xuXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXIgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXIgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXIgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gICAgICBlcnJvci4gICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJORlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUJBSkk7NkRBRVI7Ozs7OztBQUVGLE1BQU1BLGdCQUFnQkMsYUFBSTtJQUN2QyxPQUFPQyxRQUFRQyxlQUFRLENBQUM7SUFFeEIsT0FBT0MsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRjNCLENBQUMsQ0FBQztJQUVBLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9