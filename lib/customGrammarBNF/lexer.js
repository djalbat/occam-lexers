"use strict";

var _lexer = _interopRequireDefault(require("../bnf/lexer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CustomGrammarBNFLexer = /*#__PURE__*/function (_BNFLexer) {
  _inherits(CustomGrammarBNFLexer, _BNFLexer);

  var _super = _createSuper(CustomGrammarBNFLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _super.apply(this, arguments);
  }

  _createClass(CustomGrammarBNFLexer, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var bnfLexer = _lexer["default"].fromNothing(),
          rules = bnfLexer.getRules(),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules);

      return customGrammarBNFLexer;
    }
  }]);

  return CustomGrammarBNFLexer;
}(_lexer["default"]);

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJjdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEscUI7Ozs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLFFBQVEsR0FBR0Msa0JBQVNDLFdBQVQsRUFBakI7QUFBQSxVQUNNQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksUUFBVCxFQURkO0FBQUEsVUFFTUMscUJBQXFCLEdBQUcsSUFBSU4scUJBQUosQ0FBMEJJLEtBQTFCLENBRjlCOztBQUlBLGFBQU9FLHFCQUFQO0FBQ0Q7Ozs7RUFQaUNKLGlCOztBQVVwQ0ssTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixxQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJORkxleGVyIGZyb20gXCIuLi9ibmYvbGV4ZXJcIjtcblxuY2xhc3MgQ3VzdG9tR3JhbW1hckJORkxleGVyIGV4dGVuZHMgQk5GTGV4ZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mTGV4ZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GTGV4ZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckJORkxleGVyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GTGV4ZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyQk5GTGV4ZXI7XG4iXX0=