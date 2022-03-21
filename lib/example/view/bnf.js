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
_defineProperty(BNFView, "initialContent", "\n\n  document                ::=  ( rule | error )+ ;\n\n  rule ambiguousModifier  ::=  name \"::=\" definitions \";\" ;\n\n  name                    ::=  [name] ;\n\n  definitions             ::=  definition ( \"|\" definition )* ;\n\n  definition              ::=  part+ ;\n\n  part                    ::=  nonTerminalPart quantifier*\n\n                            |  terminalPart quantifier*\n\n                            |  noWhitespacePart\n\n                            ;\n\n  nonTerminalPart         ::=  choiceOfParts\n\n                            |  sequenceOfParts\n\n                            |  ruleName lookAheadModifier?\n\n                            ;\n\n  terminalPart            ::=  significantTokenType\n\n                            |  regularExpression\n\n                            |  terminalSymbol\n\n                            |  endOfLine\n\n                            |  wildcard\n\n                            ;\n\n  noWhitespacePart        ::=  \"<NO_WHITESPACE>\" ;\n\n  sequenceOfParts         ::=  \"(\" part part+ \")\" ;\n\n  choiceOfParts           ::=  \"(\" part ( \"  |\" part )+ \")\" ;\n\n  ruleName                ::=  [name] ;\n\n  significantTokenType    ::=  [type] ;\n\n  regularExpression       ::=  [regular-expression] ;\n\n  terminalSymbol          ::=  [string-literal] ;\n\n  endOfLine               ::=  \"<END_OF_LINE>\" ;\n\n  wildcard                ::=  \".\" ;\n\n  quantifier              ::=  optionalQuantifier\n\n                            |  oneOrMoreQuantifier\n\n                            |  zeroOrMoreQuantifier\n\n                            ;\n\n  ambiguousModifier       ::=  <NO_WHITESPACE>\"!\" ;\n\n  lookAheadModifier       ::=  <NO_WHITESPACE>\"...\" ;\n\n  optionalQuantifier      ::=  <NO_WHITESPACE>\"?\" ;\n\n  oneOrMoreQuantifier     ::=  <NO_WHITESPACE>\"+\" ;\n\n  zeroOrMoreQuantifier    ::=  <NO_WHITESPACE>\"*\" ;\n\n  error                   ::=  . ;\n\n");
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgXG5cbiAgZG9jdW1lbnQgICAgICAgICAgICAgICAgOjo9ICAoIHJ1bGUgfCBlcnJvciApKyA7XG5cbiAgcnVsZSBhbWJpZ3VvdXNNb2RpZmllciAgOjo9ICBuYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuXG4gIG5hbWUgICAgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICBkZWZpbml0aW9ucyAgICAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcblxuICBkZWZpbml0aW9uICAgICAgICAgICAgICA6Oj0gIHBhcnQrIDtcblxuICBwYXJ0ICAgICAgICAgICAgICAgICAgICA6Oj0gIG5vblRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxQYXJ0IHF1YW50aWZpZXIqXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub1doaXRlc3BhY2VQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgbm9uVGVybWluYWxQYXJ0ICAgICAgICAgOjo9ICBjaG9pY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzZXF1ZW5jZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJ1bGVOYW1lIGxvb2tBaGVhZE1vZGlmaWVyP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm1pbmFsUGFydCAgICAgICAgICAgIDo6PSAgc2lnbmlmaWNhbnRUb2tlblR5cGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB3aWxkY2FyZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG5vV2hpdGVzcGFjZVBhcnQgICAgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiA7XG5cbiAgc2VxdWVuY2VPZlBhcnRzICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICBjaG9pY2VPZlBhcnRzICAgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgKCBcIiAgfFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICBzaWduaWZpY2FudFRva2VuVHlwZSAgICA6Oj0gIFt0eXBlXSA7XG5cbiAgcmVndWxhckV4cHJlc3Npb24gICAgICAgOjo9ICBbcmVndWxhci1leHByZXNzaW9uXSA7XG5cbiAgdGVybWluYWxTeW1ib2wgICAgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdIDtcblxuICBlbmRPZkxpbmUgICAgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICB3aWxkY2FyZCAgICAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuICBxdWFudGlmaWVyICAgICAgICAgICAgICA6Oj0gIG9wdGlvbmFsUXVhbnRpZmllclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUXVhbnRpZmllclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgemVyb09yTW9yZVF1YW50aWZpZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBhbWJpZ3VvdXNNb2RpZmllciAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiIVwiIDtcblxuICBsb29rQWhlYWRNb2RpZmllciAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiLi4uXCIgO1xuXG4gIG9wdGlvbmFsUXVhbnRpZmllciAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCI/XCIgO1xuXG4gIG9uZU9yTW9yZVF1YW50aWZpZXIgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIrXCIgO1xuXG4gIHplcm9Pck1vcmVRdWFudGlmaWVyICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gIGVycm9yICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJORlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixHQUFhLENBQWIsTUFBYTtBQUVyQixHQUFTLENBQVQsS0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUoxQjs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLEdBQUssQ0FBQ0EsT0FBTyxpQkFBYixRQUFROzRCQU52Qjs7YUFNcUJBLE9BQU87c0NBTjVCOzs7O0VBTXFDQyxLQUFJO2tCQUFwQkQsT0FBTyxBQU41QjtnQkFNcUJBLE9BQU8sRUFDbkJFLENBQUssUUFBR0MsTUFBUSxVQVB6QjtnQkFNcUJILE9BQU8sRUFHbkJJLENBQWMsaUJBQUksQ0E4RTNCLGk2REF2RkE7Z0JBTXFCSixPQUFPLEVBbUZuQkssQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQUs7QUFDbEIsQ0FBQyxDQTNGSCJ9