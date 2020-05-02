"use strict";

var _entries = _interopRequireDefault(require("./entries"));

var _lexer = _interopRequireDefault(require("../common/lexer"));

var _endOfLine = _interopRequireDefault(require("../common/token/significant/endOfLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      return _get(_getPrototypeOf(CustomGrammarLexicalPatternLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _endOfLine["default"]);
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
      return _lexer["default"].fromEntries(CustomGrammarLexicalPatternLexer, _entries["default"]);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return _lexer["default"].fromEntries(CustomGrammarLexicalPatternLexer, entries);
    }
  }]);

  return CustomGrammarLexicalPatternLexer;
}(_lexer["default"]);

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries: _entries["default"]
});
module.exports = CustomGrammarLexicalPatternLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiY29udGVudCIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJpbkNvbW1lbnQiLCJDb21tb25MZXhlciIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZ0M7Ozs7Ozs7Ozs7Ozs7dUNBQ2VDLE8sRUFBUztBQUFFLHNIQUFnQ0EsT0FBaEMsRUFBeUNDLHFCQUF6QztBQUFzRTs7O3VDQUVqRkQsTyxFQUFTRSxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUVoQ0YsTyxFQUFTRSxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUU1QkYsTyxFQUFTRSxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7O3NEQUVqQ0YsTyxFQUFTRSxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUUvQ0YsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFakJBLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRXpCQSxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2tDQUVuQztBQUFFLGFBQU9HLGtCQUFZQyxXQUFaLENBQXdCTCxnQ0FBeEIsRUFBMERNLG1CQUExRCxDQUFQO0FBQTRFOzs7Z0NBRWhGQSxPLEVBQVM7QUFBRSxhQUFPRixrQkFBWUMsV0FBWixDQUF3QkwsZ0NBQXhCLEVBQTBETSxPQUExRCxDQUFQO0FBQTRFOzs7O0VBbkI3REYsaUI7O0FBc0IvQ0csTUFBTSxDQUFDQyxNQUFQLENBQWNSLGdDQUFkLEVBQWdEO0FBQzlDTSxFQUFBQSxPQUFPLEVBQVBBO0FBRDhDLENBQWhEO0FBSUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsZ0NBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XG5pbXBvcnQgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZVwiO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKTsgfVxuXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cblxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cblxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XG5cbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBudWxsOyB9XG5cbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cblxuICBtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLCBlbnRyaWVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwgZW50cmllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwge1xuICBlbnRyaWVzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcjtcbiJdfQ==