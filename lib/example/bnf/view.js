"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lexer = _interopRequireDefault(require("../../bnf/lexer"));

var _view = _interopRequireDefault(require("../../example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BNFView = /*#__PURE__*/function (_ExampleView) {
  _inherits(BNFView, _ExampleView);

  function BNFView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BNFView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BNFView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _lexer["default"]);

    _defineProperty(_assertThisInitialized(_this), "heading", "BNF lexer example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "  \n  \n    ruleName             ::=  [name] ;\n  \n    regularExpression    ::=  [regularExpression] ;\n  \n    significantTokenType ::=  [type] ;\n  \n    terminalSymbol       ::=  [stringLiteral] ;\n  \n    endOfLine            ::=  \"<END_OF_LINE>\" ;\n  \n    epsilon              ::=  \"\u03B5\" ;\n  \n    wildcard             ::=  \".\" ;\n    \n  ");

    return _this;
  }

  return BNFView;
}(_view["default"]);

exports["default"] = BNFView;

_defineProperty(BNFView, "defaultProperties", {
  className: "bnf"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQk5GVmlldyIsIkJORkxleGVyIiwiRXhhbXBsZVZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQyxpQjs7OERBRUUsbUI7Ozs7Ozs7O0VBSHlCQyxnQjs7OztnQkFBaEJGLE8sdUJBdUJRO0FBQ3pCRyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBCTkZMZXhlciBmcm9tIFwiLi4vLi4vYm5mL2xleGVyXCI7XG5pbXBvcnQgRXhhbXBsZVZpZXcgZnJvbSBcIi4uLy4uL2V4YW1wbGUvdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBMZXhlciA9IEJORkxleGVyO1xuXG4gIGhlYWRpbmcgPSBcIkJORiBsZXhlciBleGFtcGxlXCI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgICBcbiAgXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuICBcbiAgICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyRXhwcmVzc2lvbl0gO1xuICBcbiAgICBzaWduaWZpY2FudFRva2VuVHlwZSA6Oj0gIFt0eXBlXSA7XG4gIFxuICAgIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSAgW3N0cmluZ0xpdGVyYWxdIDtcbiAgXG4gICAgZW5kT2ZMaW5lICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIiA7XG4gIFxuICAgIGVwc2lsb24gICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcbiAgXG4gICAgd2lsZGNhcmQgICAgICAgICAgICAgOjo9ICBcIi5cIiA7XG4gICAgXG4gIGA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl19