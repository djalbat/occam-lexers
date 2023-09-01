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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    var _super = _create_super(BNFView);
    function BNFView() {
        _class_call_check(this, BNFView);
        return _super.apply(this, arguments);
    }
    return BNFView;
}(_view.default);
_define_property(BNFView, "Lexer", _index.BNFLexer);
_define_property(BNFView, "initialContent", '\n\n      document                 ::=  ( rule | error )+ ;\n\n      rule                     ::=  name ambiguousModifier? "::=" definitions ";" ;\n\n      name                     ::=  [name] ;\n\n      definitions              ::=  definition ( "|" definition )* ;\n\n      definition               ::=  part+ ;\n \n      part                     ::=  nonTerminalPart quantifier*\n\n                                 |  terminalPart quantifier*\n                              \n                                 |  noWhitespacePart\n\n                                 ;\n\n      nonTerminalPart          ::=  choiceOfParts\n\n                                 |  sequenceOfParts\n\n                                 |  ruleName lookAheadModifier?\n\n                                 ;\n\n      terminalPart             ::=  significantTokenType\n  \n                                 |  regularExpression\n \n                                 |  terminalSymbol\n  \n                                 |  endOfLine\n  \n                                 |  wildcard\n  \n                                 ;\n                              \n      noWhitespacePart         ::=  "<NO_WHITESPACE>" ;                              \n\n      choiceOfParts            ::=  "(" part ( "|" part )+ ")" ;\n\n      sequenceOfParts          ::=  "(" part part+ ")" ;\n\n      ruleName                 ::=  [name] ;\n\n      significantTokenType     ::=  [type] ;\n\n      regularExpression        ::=  [regular-expression] ;\n\n      terminalSymbol           ::=  [string-literal] ;\n\n      endOfLine                ::=  "<END_OF_LINE>" ;\n\n      wildcard                 ::=  "." ;\n\n      quantifier               ::=  optionalQuantifier\n \n                                 |  oneOrMoreQuantifier\n  \n                                 |  zeroOrMoreQuantifier\n  \n                                 ;\n\n      ambiguousModifier        ::=  <NO_WHITESPACE>"!" ;\n\n      lookAheadModifier        ::=  <NO_WHITESPACE>"..." ;\n\n      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;\n\n      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;\n\n      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;\n\n      error                    ::=  . ;\n\n');
_define_property(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgXG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICAgICAgcnVsZSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBhbWJpZ3VvdXNNb2RpZmllcj8gXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIGRlZmluaXRpb25zICAgICAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcblxuICAgICAgZGVmaW5pdGlvbiAgICAgICAgICAgICAgIDo6PSAgcGFydCsgO1xuIFxuICAgICAgcGFydCAgICAgICAgICAgICAgICAgICAgIDo6PSAgbm9uVGVybWluYWxQYXJ0IHF1YW50aWZpZXIqXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub1doaXRlc3BhY2VQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgbm9uVGVybWluYWxQYXJ0ICAgICAgICAgIDo6PSAgY2hvaWNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzZXF1ZW5jZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZU5hbWUgbG9va0FoZWFkTW9kaWZpZXI/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgdGVybWluYWxQYXJ0ICAgICAgICAgICAgIDo6PSAgc2lnbmlmaWNhbnRUb2tlblR5cGVcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWd1bGFyRXhwcmVzc2lvblxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB3aWxkY2FyZFxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydCAgICAgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgIGNob2ljZU9mUGFydHMgICAgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgKCBcInxcIiBwYXJ0ICkrIFwiKVwiIDtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzICAgICAgICAgIDo6PSAgXCIoXCIgcGFydCBwYXJ0KyBcIilcIiA7XG5cbiAgICAgIHJ1bGVOYW1lICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlICAgICA6Oj0gIFt0eXBlXSA7XG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uICAgICAgICA6Oj0gIFtyZWd1bGFyLWV4cHJlc3Npb25dIDtcblxuICAgICAgdGVybWluYWxTeW1ib2wgICAgICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSA7XG5cbiAgICAgIGVuZE9mTGluZSAgICAgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICAgICAgd2lsZGNhcmQgICAgICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG4gICAgICBxdWFudGlmaWVyICAgICAgICAgICAgICAgOjo9ICBvcHRpb25hbFF1YW50aWZpZXJcbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9uZU9yTW9yZVF1YW50aWZpZXJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB6ZXJvT3JNb3JlUXVhbnRpZmllclxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgYW1iaWd1b3VzTW9kaWZpZXIgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIhXCIgO1xuXG4gICAgICBsb29rQWhlYWRNb2RpZmllciAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIi4uLlwiIDtcblxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCI/XCIgO1xuXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG5cbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiKlwiIDtcblxuICAgICAgZXJyb3IgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJORlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpJOzJEQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztXQUFBQTtFQUFnQkMsYUFBSTtBQUN2QyxpQkFEbUJELFNBQ1pFLFNBQVFDLGVBQVE7QUFFdkIsaUJBSG1CSCxTQUdaSSxrQkFBa0I7QUFnRnpCLGlCQW5GbUJKLFNBbUZaSyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9