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
    SingleLineCommentToken = require("./token/nonSignificant/comment/singleLine"),
    EndOfLineSignificantToken = require("../common/token/significant/endOfLine"),
    EndOfMultiLineCommentToken = require("./token/nonSignificant/comment/multiLine/endOf"),
    StartOfMultiLineCommentToken = require("./token/nonSignificant/comment/multiLine/startOf"),
    MiddleOfMultiLineCommentToken = require("./token/nonSignificant/comment/multiLine/middleOf");

var FlorenceLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  var _super = _createSuper(FlorenceLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRmxvcmVuY2VMZXhlciIsImNvbnRlbnQiLCJpbkNvbW1lbnQiLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwibWF0Y2giLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FEM0I7QUFBQSxJQUVNRSxzQkFBc0IsR0FBR0YsT0FBTyxDQUFDLDJDQUFELENBRnRDO0FBQUEsSUFHTUcseUJBQXlCLEdBQUdILE9BQU8sQ0FBQyx1Q0FBRCxDQUh6QztBQUFBLElBSU1JLDBCQUEwQixHQUFHSixPQUFPLENBQUMsZ0RBQUQsQ0FKMUM7QUFBQSxJQUtNSyw0QkFBNEIsR0FBR0wsT0FBTyxDQUFDLGtEQUFELENBTDVDO0FBQUEsSUFNTU0sNkJBQTZCLEdBQUdOLE9BQU8sQ0FBQyxtREFBRCxDQU43Qzs7SUFRTU8sYTs7Ozs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsbUdBQWdDQSxPQUFoQyxFQUF5Q0wseUJBQXpDO0FBQXNFOzs7dUNBRWpGSyxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRCxPLEVBQVNDLFMsRUFBVztBQUN6QyxVQUFNQyxzQkFBc0IsR0FBR0QsU0FBUyxHQUNQLElBRE8sR0FFTFAsc0JBQXNCLENBQUNTLEtBQXZCLENBQTZCSCxPQUE3QixDQUZuQztBQUlBLGFBQU9FLHNCQUFQO0FBQ0Q7OzttREFFOEJGLE8sRUFBU0MsUyxFQUFXO0FBQ2pELFVBQU1HLG9CQUFvQixHQUFHSCxTQUFTLEdBQ1BMLDBCQUEwQixDQUFDTyxLQUEzQixDQUFpQ0gsT0FBakMsS0FBNkNGLDZCQUE2QixDQUFDSyxLQUE5QixDQUFvQ0gsT0FBcEMsQ0FEdEMsR0FFTCxJQUZqQztBQUlBLGFBQU9JLG9CQUFQO0FBQ0Q7OztzREFFaUNKLE8sRUFBU0MsUyxFQUFXO0FBQ3BELFVBQU1HLG9CQUFvQixHQUFHSCxTQUFTLEdBQ1AsSUFETyxHQUVMSiw0QkFBNEIsQ0FBQ00sS0FBN0IsQ0FBbUNILE9BQW5DLENBRmpDO0FBSUEsYUFBT0ksb0JBQVA7QUFDRDs7OzJDQUVzQkosTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFakJBLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7a0NBRW5DO0FBQUUsYUFBT0QsYUFBYSxDQUFDTSxXQUFkLENBQTBCZCxPQUExQixDQUFQO0FBQTRDOzs7Z0NBRWhEQSxPLEVBQVM7QUFBRSxhQUFPRSxXQUFXLENBQUNZLFdBQVosQ0FBd0JOLGFBQXhCLEVBQXVDUixPQUF2QyxDQUFQO0FBQXlEOzs7O0VBbkM3REUsVzs7QUFzQzVCYSxNQUFNLENBQUNDLE1BQVAsQ0FBY1IsYUFBZCxFQUE2QjtBQUMzQlIsRUFBQUEsT0FBTyxFQUFQQTtBQUQyQixDQUE3QjtBQUlBaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoXCIuL2VudHJpZXNcIiksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZShcIi4uL2NvbW1vbi9sZXhlclwiKSxcclxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiKSxcclxuICAgICAgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lXCIpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mXCIpLFxyXG4gICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZShcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiKSxcclxuICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19