"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _lexer = _interopRequireDefault(require("../../bnf/lexer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BNFView = /*#__PURE__*/function (_View) {
  _inherits(BNFView, _View);

  var _super = _createSuper(BNFView);

  function BNFView() {
    var _this;

    _classCallCheck(this, BNFView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJCTkZWaWV3IiwiQk5GTGV4ZXIiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ1hDLGlCOzs4REFFRSxtQjs7Ozs7Ozs7RUFIeUJDLGdCOzs7O2dCQUFoQkYsTyx1QkF1QlE7QUFDekJHLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBCTkZMZXhlciBmcm9tIFwiLi4vLi4vYm5mL2xleGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBoZWFkaW5nID0gXCJCTkYgbGV4ZXIgZXhhbXBsZVwiO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYCAgXG4gIFxuICAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcbiAgXG4gICAgcmVndWxhckV4cHJlc3Npb24gICAgOjo9ICBbcmVndWxhckV4cHJlc3Npb25dIDtcbiAgXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuICBcbiAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmdMaXRlcmFsXSA7XG4gIFxuICAgIGVuZE9mTGluZSAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuICBcbiAgICBlcHNpbG9uICAgICAgICAgICAgICA6Oj0gIFwizrVcIiA7XG4gIFxuICAgIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuICAgIFxuICBgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCJcbiAgfTtcbn1cbiJdfQ==