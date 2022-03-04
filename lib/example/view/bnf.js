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
_defineProperty(BNFView, "initialContent", "\n\n  document              ::=  ( rule | error )+ ;\n\n  rule                  ::=  name \"::=\" definitions \";\" ;\n\n  name                  ::=  [name] ;\n\n  definitions           ::=  definition ( \"|\" definition )* ;\n\n  definition            ::=  part+ ;\n\n  part                  ::=  nonTerminalPart quantifier*\n\n                          |  terminalPart quantifier*\n\n                          |  noWhitespacePart\n\n                          ;\n\n  nonTerminalPart       ::=  choiceOfParts\n\n                          |  sequenceOfParts\n\n                          |  ruleName lookAheadModifier?\n\n                          ;\n\n  terminalPart          ::=  significantTokenType\n\n                          |  regularExpression\n\n                          |  terminalSymbol\n\n                          |  endOfLine\n\n                          |  epsilon\n\n                          |  wildcard\n\n                          ;\n\n  noWhitespacePart      ::=  \"<NO_WHITESPACE>\" ;\n\n  sequenceOfParts       ::=  \"(\" part part+ \")\" ;\n\n  choiceOfParts         ::=  \"(\" part ( \"|\" part )+ \")\" ;\n\n  ruleName              ::=  [name] ;\n\n  significantTokenType  ::=  [type] ;\n\n  regularExpression     ::=  [regular-expression] ;\n\n  terminalSymbol        ::=  [string-literal] ;\n\n  endOfLine             ::=  \"<END_OF_LINE>\" ;\n\n  epsilon               ::=  \"ε\" ;\n\n  wildcard              ::=  \".\" ;\n\n  quantifier            ::=  optionalQuantifier\n\n                          |  oneOrMoreQuantifier\n\n                          |  zeroOrMoreQuantifier\n\n                          ;\n\n  lookAheadModifier     ::=  <NO_WHITESPACE>\"!\" ;\n\n  optionalQuantifier    ::=  <NO_WHITESPACE>\"?\" ;\n\n  oneOrMoreQuantifier   ::=  <NO_WHITESPACE>\"+\" ;\n\n  zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>\"*\" ;\n\n  error                 ::=  . ;\n\n");
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgXG5cbiAgZG9jdW1lbnQgICAgICAgICAgICAgIDo6PSAgKCBydWxlIHwgZXJyb3IgKSsgO1xuXG4gIHJ1bGUgICAgICAgICAgICAgICAgICA6Oj0gIG5hbWUgXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgbmFtZSAgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICBkZWZpbml0aW9ucyAgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG5cbiAgZGVmaW5pdGlvbiAgICAgICAgICAgIDo6PSAgcGFydCsgO1xuXG4gIHBhcnQgICAgICAgICAgICAgICAgICA6Oj0gIG5vblRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vV2hpdGVzcGFjZVBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgbm9uVGVybWluYWxQYXJ0ICAgICAgIDo6PSAgY2hvaWNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNlcXVlbmNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJ1bGVOYW1lIGxvb2tBaGVhZE1vZGlmaWVyP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtaW5hbFBhcnQgICAgICAgICAgOjo9ICBzaWduaWZpY2FudFRva2VuVHlwZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcHNpbG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgbm9XaGl0ZXNwYWNlUGFydCAgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiA7XG5cbiAgc2VxdWVuY2VPZlBhcnRzICAgICAgIDo6PSAgXCIoXCIgcGFydCBwYXJ0KyBcIilcIiA7XG5cbiAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgc2lnbmlmaWNhbnRUb2tlblR5cGUgIDo6PSAgW3R5cGVdIDtcblxuICByZWd1bGFyRXhwcmVzc2lvbiAgICAgOjo9ICBbcmVndWxhci1leHByZXNzaW9uXSA7XG5cbiAgdGVybWluYWxTeW1ib2wgICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSA7XG5cbiAgZW5kT2ZMaW5lICAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gIGVwc2lsb24gICAgICAgICAgICAgICA6Oj0gIFwizrVcIiA7XG5cbiAgd2lsZGNhcmQgICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG4gIHF1YW50aWZpZXIgICAgICAgICAgICA6Oj0gIG9wdGlvbmFsUXVhbnRpZmllclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9uZU9yTW9yZVF1YW50aWZpZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB6ZXJvT3JNb3JlUXVhbnRpZmllclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBsb29rQWhlYWRNb2RpZmllciAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgb3B0aW9uYWxRdWFudGlmaWVyICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCI/XCIgO1xuXG4gIG9uZU9yTW9yZVF1YW50aWZpZXIgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICB6ZXJvT3JNb3JlUXVhbnRpZmllciAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIipcIiA7XG5cbiAgZXJyb3IgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJORlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUVZLEdBQWEsQ0FBYixNQUFhO0FBRXJCLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1U7O3dCOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFTEEsT0FBTyxpQkFBYixRQUFROzRCOzthQUFGQSxPQUFPO3NDOzs7O0VBQVNDLEtBQUk7a0JBQXBCRCxPQUFPLEE7Z0JBQVBBLE9BQU8sRUFDbkJFLENBQUssUUFBR0MsTUFBUSxVO2dCQURKSCxPQUFPLEVBR25CSSxDQUFjLGlCQUFJLENBZ0YzQiwyMkQ7Z0JBbkZxQkosT0FBTyxFQXFGbkJLLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFLO0FBQ2xCLENBQUMsQyJ9