'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    SingleLineCommentToken = require('./token/nonSignificant/comment/singleLine'),
    EndOfLineSignificantToken = require('../common/token/significant/endOfLine'),
    EndOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/endOf'),
    StartOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/middleOf');

var FlorenceLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceLexer).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      return _get(_getPrototypeOf(FlorenceLexer.prototype), "tokeniseEndOfLines", this).call(this, content, EndOfLineSignificantToken);
    }
  }, {
    key: "matchBrokenComment",
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchSingleLineComment",
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : SingleLineCommentToken.match(content);
      return singleLineCommentToken;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      var multiLinCommentToken = inComment ? EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) : null;
      return multiLinCommentToken;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      var multiLinCommentToken = inComment ? null : StartOfMultiLineCommentToken.match(content);
      return multiLinCommentToken;
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
      return FlorenceLexer.fromEntries(entries);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(FlorenceLexer, entries);
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

Object.assign(FlorenceLexer, {
  entries: entries
});
module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRmxvcmVuY2VMZXhlciIsImNvbnRlbnQiLCJpbkNvbW1lbnQiLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwibWF0Y2giLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7QUFBQSxJQUNNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUQzQjtBQUFBLElBRU1FLHNCQUFzQixHQUFHRixPQUFPLENBQUMsMkNBQUQsQ0FGdEM7QUFBQSxJQUdNRyx5QkFBeUIsR0FBR0gsT0FBTyxDQUFDLHVDQUFELENBSHpDO0FBQUEsSUFJTUksMEJBQTBCLEdBQUdKLE9BQU8sQ0FBQyxnREFBRCxDQUoxQztBQUFBLElBS01LLDRCQUE0QixHQUFHTCxPQUFPLENBQUMsa0RBQUQsQ0FMNUM7QUFBQSxJQU1NTSw2QkFBNkIsR0FBR04sT0FBTyxDQUFDLG1EQUFELENBTjdDOztJQVFNTyxhOzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsbUdBQWdDQSxPQUFoQyxFQUF5Q0wseUJBQXpDO0FBQXNFOzs7dUNBRWpGSyxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRCxPLEVBQVNDLFMsRUFBVztBQUN6QyxVQUFNQyxzQkFBc0IsR0FBR0QsU0FBUyxHQUNQLElBRE8sR0FFTFAsc0JBQXNCLENBQUNTLEtBQXZCLENBQTZCSCxPQUE3QixDQUZuQztBQUlBLGFBQU9FLHNCQUFQO0FBQ0Q7OzttREFFOEJGLE8sRUFBU0MsUyxFQUFXO0FBQ2pELFVBQU1HLG9CQUFvQixHQUFHSCxTQUFTLEdBQ1BMLDBCQUEwQixDQUFDTyxLQUEzQixDQUFpQ0gsT0FBakMsS0FBNkNGLDZCQUE2QixDQUFDSyxLQUE5QixDQUFvQ0gsT0FBcEMsQ0FEdEMsR0FFTCxJQUZqQztBQUlBLGFBQU9JLG9CQUFQO0FBQ0Q7OztzREFFaUNKLE8sRUFBU0MsUyxFQUFXO0FBQ3BELFVBQU1HLG9CQUFvQixHQUFHSCxTQUFTLEdBQ1AsSUFETyxHQUVMSiw0QkFBNEIsQ0FBQ00sS0FBN0IsQ0FBbUNILE9BQW5DLENBRmpDO0FBSUEsYUFBT0ksb0JBQVA7QUFDRDs7OzJDQUVzQkosTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFakJBLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7a0NBRW5DO0FBQUUsYUFBT0QsYUFBYSxDQUFDTSxXQUFkLENBQTBCZCxPQUExQixDQUFQO0FBQTRDOzs7Z0NBRWhEQSxPLEVBQVM7QUFBRSxhQUFPRSxXQUFXLENBQUNZLFdBQVosQ0FBd0JOLGFBQXhCLEVBQXVDUixPQUF2QyxDQUFQO0FBQXlEOzs7O0VBbkM3REUsVzs7QUFzQzVCYSxNQUFNLENBQUNDLE1BQVAsQ0FBY1IsYUFBZCxFQUE2QjtBQUMzQlIsRUFBQUEsT0FBTyxFQUFQQTtBQUQyQixDQUE3QjtBQUlBaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lJyksXHJcbiAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mJyksXHJcbiAgICAgIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gc3VwZXIudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4pOyB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhGbG9yZW5jZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlTGV4ZXIsIHtcclxuICBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=