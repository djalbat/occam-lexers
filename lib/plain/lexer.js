'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer');

var PlainLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(PlainLexer, _CommonLexer);

  function PlainLexer() {
    _classCallCheck(this, PlainLexer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainLexer).apply(this, arguments));
  }

  _createClass(PlainLexer, [{
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
      return CommonLexer.fromEntries(PlainLexer, entries);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(PlainLexer, entries);
    }
  }]);

  return PlainLexer;
}(CommonLexer);

Object.assign(PlainLexer, {
  entries: entries
});
module.exports = PlainLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJQbGFpbkxleGVyIiwiY29udGVudCIsImluQ29tbWVudCIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF2QjtBQUFBLElBQ01DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBRDNCOztJQUdNRSxVOzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUVoQ0QsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUU1QkQsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7O3NEQUVqQ0QsTyxFQUFTQyxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUUvQ0QsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFakJBLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRXpCQSxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2tDQUVuQztBQUFFLGFBQU9GLFdBQVcsQ0FBQ0ksV0FBWixDQUF3QkgsVUFBeEIsRUFBb0NILE9BQXBDLENBQVA7QUFBc0Q7OztnQ0FFMURBLE8sRUFBUztBQUFFLGFBQU9FLFdBQVcsQ0FBQ0ksV0FBWixDQUF3QkgsVUFBeEIsRUFBb0NILE9BQXBDLENBQVA7QUFBc0Q7Ozs7RUFqQjdERSxXOztBQW9CekJLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxVQUFkLEVBQTBCO0FBQ3hCSCxFQUFBQSxPQUFPLEVBQVBBO0FBRHdCLENBQTFCO0FBSUFTLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsVUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBQbGFpbkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhQbGFpbkxleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoUGxhaW5MZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihQbGFpbkxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhaW5MZXhlcjtcclxuIl19