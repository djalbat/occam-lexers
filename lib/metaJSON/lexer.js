"use strict";

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

var MetaJSONLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(MetaJSONLexer, _CommonLexer);

  var _super = _createSuper(MetaJSONLexer);

  function MetaJSONLexer() {
    _classCallCheck(this, MetaJSONLexer);

    return _super.apply(this, arguments);
  }

  _createClass(MetaJSONLexer, [{
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
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _lexer["default"].fromEntries(MetaJSONLexer, _entries["default"]);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return _lexer["default"].fromEntries(MetaJSONLexer, entries);
    }
  }]);

  return MetaJSONLexer;
}(_lexer["default"]);

Object.assign(MetaJSONLexer, {
  entries: _entries["default"]
});
module.exports = MetaJSONLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIk1ldGFKU09OTGV4ZXIiLCJjb250ZW50IiwiaW5Db21tZW50IiwiQ29tbW9uTGV4ZXIiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYTs7Ozs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUVoQ0QsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUU1QkQsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7O3NEQUVqQ0QsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUUvQ0QsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFakJBLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7a0NBRW5DO0FBQUUsYUFBT0Usa0JBQVlDLFdBQVosQ0FBd0JKLGFBQXhCLEVBQXVDSyxtQkFBdkMsQ0FBUDtBQUF5RDs7O2dDQUU3REEsTyxFQUFTO0FBQUUsYUFBT0Ysa0JBQVlDLFdBQVosQ0FBd0JKLGFBQXhCLEVBQXVDSyxPQUF2QyxDQUFQO0FBQXlEOzs7O0VBZjdERixpQjs7QUFrQjVCRyxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsYUFBZCxFQUE2QjtBQUMzQkssRUFBQUEsT0FBTyxFQUFQQTtBQUQyQixDQUE3QjtBQUlBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJULGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XHJcblxyXG5jbGFzcyBNZXRhSlNPTkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhNZXRhSlNPTkxleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoTWV0YUpTT05MZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihNZXRhSlNPTkxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWV0YUpTT05MZXhlcjtcclxuIl19