"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    var _super = _createSuper(BNFView);
    function BNFView() {
        _classCallCheck(this, BNFView);
        return _super.apply(this, arguments);
    }
    return BNFView;
}(_view.default);
exports.default = BNFView;
_defineProperty(BNFView, "Lexer", _index.BNFLexer);
_defineProperty(BNFView, "initialContent", "\n\n      document                 ::=  ( rule | error )+ ;\n\n      rule ambiguousModifier?  ::=  name \"::=\" definitions \";\" ;\n\n      name                     ::=  [name] ;\n\n      definitions              ::=  definition ( \"|\" definition )* ;\n\n      definition               ::=  part+ ;\n \n      part                     ::=  nonTerminalPart quantifier*\n\n                                 |  terminalPart quantifier*\n                              \n                                 |  noWhitespacePart\n\n                                 ;\n\n      nonTerminalPart          ::=  choiceOfParts\n\n                                 |  sequenceOfParts\n\n                                 |  ruleName lookAheadModifier?\n\n                                 ;\n\n      terminalPart             ::=  significantTokenType\n  \n                                 |  regularExpression\n \n                                 |  terminalSymbol\n  \n                                 |  endOfLine\n  \n                                 |  wildcard\n  \n                                 ;\n                              \n      noWhitespacePart         ::=  \"<NO_WHITESPACE>\" ;                              \n\n      choiceOfParts            ::=  \"(\" part ( \"|\" part )+ \")\" ;\n\n      sequenceOfParts          ::=  \"(\" part part+ \")\" ;\n\n      ruleName                 ::=  [name] ;\n\n      significantTokenType     ::=  [type] ;\n\n      regularExpression        ::=  [regular-expression] ;\n\n      terminalSymbol           ::=  [string-literal] ;\n\n      endOfLine                ::=  \"<END_OF_LINE>\" ;\n\n      wildcard                 ::=  \".\" ;\n\n      quantifier               ::=  optionalQuantifier\n \n                                 |  oneOrMoreQuantifier\n  \n                                 |  zeroOrMoreQuantifier\n  \n                                 ;\n\n      ambiguousModifier        ::=  <NO_WHITESPACE>\"!\" ;\n\n      lookAheadModifier        ::=  <NO_WHITESPACE>\"...\" ;\n\n      optionalQuantifier       ::=  <NO_WHITESPACE>\"?\" ;\n\n      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>\"+\" ;\n\n      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>\"*\" ;\n\n      error                    ::=  . ;\n\n");
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgXG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICAgICAgcnVsZSBhbWJpZ3VvdXNNb2RpZmllcj8gIDo6PSAgbmFtZSBcIjo6PVwiIGRlZmluaXRpb25zIFwiO1wiIDtcblxuICAgICAgbmFtZSAgICAgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgZGVmaW5pdGlvbnMgICAgICAgICAgICAgIDo6PSAgZGVmaW5pdGlvbiAoIFwifFwiIGRlZmluaXRpb24gKSogO1xuXG4gICAgICBkZWZpbml0aW9uICAgICAgICAgICAgICAgOjo9ICBwYXJ0KyA7XG4gXG4gICAgICBwYXJ0ICAgICAgICAgICAgICAgICAgICAgOjo9ICBub25UZXJtaW5hbFBhcnQgcXVhbnRpZmllcipcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxQYXJ0IHF1YW50aWZpZXIqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vV2hpdGVzcGFjZVBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICBub25UZXJtaW5hbFBhcnQgICAgICAgICAgOjo9ICBjaG9pY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNlcXVlbmNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZSBsb29rQWhlYWRNb2RpZmllcj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICB0ZXJtaW5hbFBhcnQgICAgICAgICAgICAgOjo9ICBzaWduaWZpY2FudFRva2VuVHlwZVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVuZE9mTGluZVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHdpbGRjYXJkXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBub1doaXRlc3BhY2VQYXJ0ICAgICAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiIDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHMgICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICAgICAgcnVsZU5hbWUgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgICAgIDo6PSAgW3R5cGVdIDtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb24gICAgICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdIDtcblxuICAgICAgZW5kT2ZMaW5lICAgICAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gICAgICB3aWxkY2FyZCAgICAgICAgICAgICAgICAgOjo9ICBcIi5cIiA7XG5cbiAgICAgIHF1YW50aWZpZXIgICAgICAgICAgICAgICA6Oj0gIG9wdGlvbmFsUXVhbnRpZmllclxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUXVhbnRpZmllclxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVRdWFudGlmaWVyXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICBhbWJpZ3VvdXNNb2RpZmllciAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiLi4uXCIgO1xuXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXIgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXIgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXIgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gICAgICBlcnJvciAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQk5GVmlldyIsIlZpZXciLCJMZXhlciIsIkJORkxleGVyIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixJQUFBLE1BQWEsV0FBYixhQUFhLENBQUE7QUFFckIsSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUoxQjs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLElBQUEsQUFBTUEsT0FBTyxpQkNOekIsQURNWTs0QkFOZjs7YUFNcUJBLE9BQU87c0NBTjVCOzs7O0NBNEZDLENBdEZvQ0MsS0FBSSxTQXNGeEM7a0JBdEZvQkQsT0FBTyxBQU41QjtBQU9FLGdCQURtQkEsT0FBTyxFQUNuQkUsT0FBSyxFQUFHQyxNQUFRLFVBQUMsQUFQMUI7QUFTRSxnQkFIbUJILE9BQU8sRUFHbkJJLGdCQUFjLEVBQUksc3NFQThFM0IsQ0FBRSxBQXZGRjtBQXlGRSxnQkFuRm1CSixPQUFPLEVBbUZuQkssbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMsQUEzRkoifQ==