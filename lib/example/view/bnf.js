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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    function BNFView() {
        _classCallCheck(this, BNFView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(BNFView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.BNFLexer);
        _defineProperty(_assertThisInitialized(_this), "heading", "BNF lexer example");
        _defineProperty(_assertThisInitialized(_this), "initialContent", "  \n  \n    ruleName             ::=  [name] ;\n  \n    regularExpression    ::=  [regular-expression] ;\n  \n    significantTokenType ::=  [type] ;\n  \n    terminalSymbol       ::=  [string-literal] ;\n  \n    endOfLine            ::=  \"<END_OF_LINE>\" ;\n  \n    epsilon              ::=  \"ε\" ;\n  \n    wildcard             ::=  \".\" ;\n    \n  ");
        return _this;
    }
    return BNFView;
}(_view.default);
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});
exports.default = BNFView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwiVmlldyIsIkJORlZpZXciLCJMZXhlciIsImhlYWRpbmciLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVhLEdBQWEsQ0FBYixNQUFhO0FBRXJCLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVMLE9BQU8saUJBQWIsUUFBUTtjQUFGLE9BQU87YUFBUCxPQUFPOzhCQUFQLE9BQU87O2lFQUFQLE9BQU87d0RBQzFCLEtBQUssR0FMa0IsTUFBYTt3REFPcEMsT0FBTyxJQUFHLGlCQUFtQjt3REFFN0IsY0FBYyxJQUFJLGtXQWdCbEI7OztXQXJCbUIsT0FBTztFQUZYLEtBQVM7Z0JBRUwsT0FBTyxHQXVCbkIsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsR0FBSztBQUNsQixDQUFDO2tCQXpCa0IsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEJORkxleGVyO1xuXG4gIGhlYWRpbmcgPSBcIkJORiBsZXhlciBleGFtcGxlXCI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgICBcbiAgXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuICBcbiAgICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyLWV4cHJlc3Npb25dIDtcbiAgXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuICBcbiAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gO1xuICBcbiAgICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcbiAgXG4gICAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuICBcbiAgICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcbiAgICBcbiAgYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG4iXX0=