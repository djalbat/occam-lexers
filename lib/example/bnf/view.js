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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQk5GVmlldyIsIkJORkxleGVyIiwiVmlldyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQyxpQjs7OERBRUUsbUI7Ozs7Ozs7O0VBSHlCQyxnQjs7OztnQkFBaEJGLE8sdUJBdUJRO0FBQ3pCRyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgQk5GTGV4ZXIgZnJvbSBcIi4uLy4uL2JuZi9sZXhlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZWaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgaGVhZGluZyA9IFwiQk5GIGxleGVyIGV4YW1wbGVcIjtcblxuICBpbml0aWFsQ29udGVudCA9IGAgIFxuICBcbiAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG4gIFxuICAgIHJlZ3VsYXJFeHByZXNzaW9uICAgIDo6PSAgW3JlZ3VsYXJFeHByZXNzaW9uXSA7XG4gIFxuICAgIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSAgW3R5cGVdIDtcbiAgXG4gICAgdGVybWluYWxTeW1ib2wgICAgICAgOjo9ICBbc3RyaW5nTGl0ZXJhbF0gO1xuICBcbiAgICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcbiAgXG4gICAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuICBcbiAgICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcbiAgICBcbiAgYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG4iXX0=