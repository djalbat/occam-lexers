"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entries = _interopRequireDefault(require("./entries"));

var _lexer = _interopRequireDefault(require("../common/lexer"));

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

var LaTeXLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(LaTeXLexer, _CommonLexer);

  var _super = _createSuper(LaTeXLexer);

  function LaTeXLexer() {
    _classCallCheck(this, LaTeXLexer);

    return _super.apply(this, arguments);
  }

  _createClass(LaTeXLexer, [{
    key: "matchBrokenComment",
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchSingleLineComment",
    value: function matchSingleLineComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchRegularExpression",
    value: function matchRegularExpression(content) {
      return null;
    }
  }, {
    key: "matchSinglyQuotedStringLiteral",
    value: function matchSinglyQuotedStringLiteral(content) {
      return null;
    }
  }, {
    key: "matchDoublyQuotedStringLiteral",
    value: function matchDoublyQuotedStringLiteral(content) {
      return null;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _lexer["default"].fromNothing(LaTeXLexer);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return _lexer["default"].fromEntries(LaTeXLexer, entries);
    }
  }]);

  return LaTeXLexer;
}(_lexer["default"]);

exports["default"] = LaTeXLexer;
Object.assign(LaTeXLexer, {
  entries: _entries["default"]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkxhVGVYTGV4ZXIiLCJjb250ZW50IiwiaW5Db21tZW50IiwiQ29tbW9uTGV4ZXIiLCJmcm9tTm90aGluZyIsImVudHJpZXMiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7dUNBQ0FDLE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFaENELE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFNUJELE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztzREFFakNELE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFL0NELE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRWpCQSxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUV6QkEsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztrQ0FFbkM7QUFBRSxhQUFPRSxrQkFBWUMsV0FBWixDQUF3QkosVUFBeEIsQ0FBUDtBQUE2Qzs7O2dDQUVqREssTyxFQUFTO0FBQUUsYUFBT0Ysa0JBQVlHLFdBQVosQ0FBd0JOLFVBQXhCLEVBQW9DSyxPQUFwQyxDQUFQO0FBQXNEOzs7O0VBakI5Q0YsaUI7OztBQW9CeENJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixVQUFkLEVBQTBCO0FBQ3hCSyxFQUFBQSxPQUFPLEVBQVBBO0FBRHdCLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYVRlWExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhMYVRlWExleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoTGFUZVhMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihMYVRlWExleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuIl19