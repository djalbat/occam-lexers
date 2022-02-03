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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.BNFLexer);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "\n\n  document              ::=  ( rule | error )+ ;\n\n  rule                  ::=  name \"::=\" definitions \";\" ;\n\n  name                  ::=  [name] ;\n\n  definitions           ::=  definition ( \"|\" definition )* ;\n\n  definition            ::=  part+ ;\n\n  part                  ::=  nonTerminalPart quantifier*\n\n                          |  terminalPart quantifier*\n\n                          |  noWhitespacePart\n\n                          ;\n\n  nonTerminalPart       ::=  choiceOfParts\n\n                          |  sequenceOfParts\n\n                          |  ruleName lookAheadModifier?\n\n                          ;\n\n  terminalPart          ::=  significantTokenType\n\n                          |  regularExpression\n\n                          |  terminalSymbol\n\n                          |  endOfLine\n\n                          |  epsilon\n\n                          |  wildcard\n\n                          ;\n\n  noWhitespacePart      ::=  \"<NO_WHITESPACE>\" ;\n\n  sequenceOfParts       ::=  \"(\" part part+ \")\" ;\n\n  choiceOfParts         ::=  \"(\" part ( \"|\" part )+ \")\" ;\n\n  ruleName              ::=  [name] ;\n\n  significantTokenType  ::=  [type] ;\n\n  regularExpression     ::=  [regular-expression] ;\n\n  terminalSymbol        ::=  [string-literal] ;\n\n  endOfLine             ::=  \"<END_OF_LINE>\" ;\n\n  epsilon               ::=  \"ε\" ;\n\n  wildcard              ::=  \".\" ;\n\n  quantifier            ::=  optionalQuantifier\n\n                          |  oneOrMoreQuantifier\n\n                          |  zeroOrMoreQuantifier\n\n                          ;\n\n  lookAheadModifier     ::=  <NO_WHITESPACE>\"!\" ;\n\n  optionalQuantifier    ::=  <NO_WHITESPACE>\"?\" ;\n\n  oneOrMoreQuantifier   ::=  <NO_WHITESPACE>\"+\" ;\n\n  zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>\"*\" ;\n\n  error                 ::=  . ;\n\n");
        return _this;
    }
    return BNFView;
}(_view.default);
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});
exports.default = BNFView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEJORkxleGVyO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYFxuXG4gIGRvY3VtZW50ICAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICBydWxlICAgICAgICAgICAgICAgICAgOjo9ICBuYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuXG4gIG5hbWUgICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgZGVmaW5pdGlvbnMgICAgICAgICAgIDo6PSAgZGVmaW5pdGlvbiAoIFwifFwiIGRlZmluaXRpb24gKSogO1xuXG4gIGRlZmluaXRpb24gICAgICAgICAgICA6Oj0gIHBhcnQrIDtcblxuICBwYXJ0ICAgICAgICAgICAgICAgICAgOjo9ICBub25UZXJtaW5hbFBhcnQgcXVhbnRpZmllcipcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFBhcnQgcXVhbnRpZmllcipcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub1doaXRlc3BhY2VQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG5vblRlcm1pbmFsUGFydCAgICAgICA6Oj0gIGNob2ljZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzZXF1ZW5jZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZSBsb29rQWhlYWRNb2RpZmllcj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybWluYWxQYXJ0ICAgICAgICAgIDo6PSAgc2lnbmlmaWNhbnRUb2tlblR5cGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWd1bGFyRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsU3ltYm9sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXBzaWxvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHdpbGRjYXJkXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG5vV2hpdGVzcGFjZVBhcnQgICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCIgO1xuXG4gIHNlcXVlbmNlT2ZQYXJ0cyAgICAgICA6Oj0gIFwiKFwiIHBhcnQgcGFydCsgXCIpXCIgO1xuXG4gIGNob2ljZU9mUGFydHMgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgKCBcInxcIiBwYXJ0ICkrIFwiKVwiIDtcblxuICBydWxlTmFtZSAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlICA6Oj0gIFt0eXBlXSA7XG5cbiAgcmVndWxhckV4cHJlc3Npb24gICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gIHRlcm1pbmFsU3ltYm9sICAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gO1xuXG4gIGVuZE9mTGluZSAgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICBlcHNpbG9uICAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuXG4gIHdpbGRjYXJkICAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuICBxdWFudGlmaWVyICAgICAgICAgICAgOjo9ICBvcHRpb25hbFF1YW50aWZpZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvbmVPck1vcmVRdWFudGlmaWVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgemVyb09yTW9yZVF1YW50aWZpZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgbG9va0FoZWFkTW9kaWZpZXIgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIhXCIgO1xuXG4gIG9wdGlvbmFsUXVhbnRpZmllciAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiP1wiIDtcblxuICBvbmVPck1vcmVRdWFudGlmaWVyICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG5cbiAgemVyb09yTW9yZVF1YW50aWZpZXIgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gIGVycm9yICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJCTkZWaWV3IiwiTGV4ZXIiLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiVmlldyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQWEsQ0FBYixNQUFhO0FBRXJCLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTEEsT0FBTyxpQkFBYixRQUFROzs7YUFBRkEsT0FBTzs7Ozt1REFDMUJDLENBQUssUUFBR0MsTUFBUTt1REFFaEJDLENBQWMsaUJBQUksQ0FnRnBCOzs7O0VBbkZxQ0MsS0FBSTtnQkFBcEJKLE9BQU8sRUFxRm5CSyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBSztBQUNsQixDQUFDO2tCQXZGa0JOLE9BQU8ifQ==