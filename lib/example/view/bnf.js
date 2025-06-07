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
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    function BNFView() {
        _class_call_check(this, BNFView);
        return _call_super(this, BNFView, arguments);
    }
    return BNFView;
}(_view.default);
_define_property(BNFView, "Lexer", _index.BNFLexer);
_define_property(BNFView, "initialContent", '\n\n      document                 ::=  ( rule | error )+ ;\n\n      rule                     ::=  name ambiguousModifier? "::=" definitions ";" ;\n\n      name                     ::=  [name] ;\n\n      definitions              ::=  definition ( "|" definition )* ;\n\n      definition               ::=  part+ ;\n \n      part                     ::=  nonTerminalPart quantifier*\n\n                                 |  terminalPart quantifier*\n                              \n                                 |  startOfContentPart\n\n                                 |  noWhitespacePart\n\n                                 ;\n\n      nonTerminalPart          ::=  choiceOfParts\n\n                                 |  sequenceOfParts\n\n                                 |  ruleName lookAheadModifier?\n\n                                 ;\n\n      terminalPart             ::=  significantTokenType\n  \n                                 |  regularExpression\n \n                                 |  terminalSymbol\n  \n                                 |  endOfLine\n  \n                                 |  wildcard\n  \n                                 ;\n                              \n      startOfContentPart       ::=  "<START_OF_CONTENT>" ;                              \n\n      noWhitespacePart         ::=  "<NO_WHITESPACE>" ;                              \n\n      choiceOfParts            ::=  "(" part ( "|" part )+ ")" ;\n\n      sequenceOfParts          ::=  "(" part part+ ")" ;\n\n      ruleName                 ::=  [name] ;\n\n      significantTokenType     ::=  [type] ;\n\n      regularExpression        ::=  [regular-expression] ;\n\n      terminalSymbol           ::=  [string-literal] ;\n\n      endOfLine                ::=  "<END_OF_LINE>" ;\n\n      wildcard                 ::=  "." ;\n\n      quantifier               ::=  optionalQuantifier\n \n                                 |  oneOrMoreQuantifier\n  \n                                 |  zeroOrMoreQuantifier\n  \n                                 ;\n\n      ambiguousModifier        ::=  <NO_WHITESPACE>"!" ;\n\n      lookAheadModifier        ::=  <NO_WHITESPACE>"..." ;\n\n      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;\n\n      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;\n\n      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;\n\n      error.                    ::=  . ;\n\n');
_define_property(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgXG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICAgICAgcnVsZSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBhbWJpZ3VvdXNNb2RpZmllcj8gXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIGRlZmluaXRpb25zICAgICAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcblxuICAgICAgZGVmaW5pdGlvbiAgICAgICAgICAgICAgIDo6PSAgcGFydCsgO1xuIFxuICAgICAgcGFydCAgICAgICAgICAgICAgICAgICAgIDo6PSAgbm9uVGVybWluYWxQYXJ0IHF1YW50aWZpZXIqXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdGFydE9mQ29udGVudFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9XaGl0ZXNwYWNlUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIG5vblRlcm1pbmFsUGFydCAgICAgICAgICA6Oj0gIGNob2ljZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2VxdWVuY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJ1bGVOYW1lIGxvb2tBaGVhZE1vZGlmaWVyP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIHRlcm1pbmFsUGFydCAgICAgICAgICAgICA6Oj0gIHNpZ25pZmljYW50VG9rZW5UeXBlXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb25cbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsU3ltYm9sXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHN0YXJ0T2ZDb250ZW50UGFydCAgICAgICA6Oj0gIFwiPFNUQVJUX09GX0NPTlRFTlQ+XCIgOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICBub1doaXRlc3BhY2VQYXJ0ICAgICAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiIDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHMgICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICAgICAgcnVsZU5hbWUgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgICAgIDo6PSAgW3R5cGVdIDtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb24gICAgICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdIDtcblxuICAgICAgZW5kT2ZMaW5lICAgICAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gICAgICB3aWxkY2FyZCAgICAgICAgICAgICAgICAgOjo9ICBcIi5cIiA7XG5cbiAgICAgIHF1YW50aWZpZXIgICAgICAgICAgICAgICA6Oj0gIG9wdGlvbmFsUXVhbnRpZmllclxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUXVhbnRpZmllclxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVRdWFudGlmaWVyXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICBhbWJpZ3VvdXNNb2RpZmllciAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiLi4uXCIgO1xuXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXIgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXIgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXIgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gICAgICBlcnJvci4gICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJORlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpJOzJEQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFnQkMsYUFBSTtBQUN2QyxpQkFEbUJELFNBQ1pFLFNBQVFDLGVBQVE7QUFFdkIsaUJBSG1CSCxTQUdaSSxrQkFBa0I7QUFvRnpCLGlCQXZGbUJKLFNBdUZaSyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9