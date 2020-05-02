"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var entries = require("./entries"),
    CommonLexer = require("../common/lexer"),
    EndOfLineSignificantToken = require("../common/token/significant/endOfLine");

var CustomGrammarLexicalPatternLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(CustomGrammarLexicalPatternLexer, _CommonLexer);

  var _super = _createSuper(CustomGrammarLexicalPatternLexer);

  function CustomGrammarLexicalPatternLexer() {
    _classCallCheck(this, CustomGrammarLexicalPatternLexer);

    return _super.apply(this, arguments);
  }

  _createClass(CustomGrammarLexicalPatternLexer, [{
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      return _get(_getPrototypeOf(CustomGrammarLexicalPatternLexer.prototype), "tokeniseEndOfLines", this).call(this, content, EndOfLineSignificantToken);
    }
  }, {
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
      return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries);
    }
  }]);

  return CustomGrammarLexicalPatternLexer;
}(CommonLexer);

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries: entries
});
module.exports = CustomGrammarLexicalPatternLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIiLCJjb250ZW50IiwiaW5Db21tZW50IiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7QUFBQSxJQUNNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUQzQjtBQUFBLElBRU1FLHlCQUF5QixHQUFHRixPQUFPLENBQUMsdUNBQUQsQ0FGekM7O0lBSU1HLGdDOzs7Ozs7Ozs7Ozs7O3VDQUNlQyxPLEVBQVM7QUFBRSxzSEFBZ0NBLE9BQWhDLEVBQXlDRix5QkFBekM7QUFBc0U7Ozt1Q0FFakZFLE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFaENELE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFNUJELE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztzREFFakNELE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFL0NELE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRWpCQSxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUV6QkEsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztrQ0FFbkM7QUFBRSxhQUFPSCxXQUFXLENBQUNLLFdBQVosQ0FBd0JILGdDQUF4QixFQUEwREosT0FBMUQsQ0FBUDtBQUE0RTs7O2dDQUVoRkEsTyxFQUFTO0FBQUUsYUFBT0UsV0FBVyxDQUFDSyxXQUFaLENBQXdCSCxnQ0FBeEIsRUFBMERKLE9BQTFELENBQVA7QUFBNEU7Ozs7RUFuQjdERSxXOztBQXNCL0NNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxnQ0FBZCxFQUFnRDtBQUM5Q0osRUFBQUEsT0FBTyxFQUFQQTtBQUQ4QyxDQUFoRDtBQUlBVSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLGdDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZShcIi4vZW50cmllc1wiKSxcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZShcIi4uL2NvbW1vbi9sZXhlclwiKSxcbiAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZVwiKTtcblxuY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiBzdXBlci50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbik7IH1cblxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XG5cbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cblxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XG5cbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBudWxsOyB9XG5cbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwgZW50cmllcyk7IH1cblxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIGVudHJpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIHtcbiAgZW50cmllc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XG4iXX0=