'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    defaultLexicalPattern = require('./defaultLexicalPattern'),
    SingleLineCommentToken = require('./token/nonSignificant/comment/singleLine'),
    EndOfLineSignificantToken = require('../common/token/significant/endOfLine'),
    EndOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/endOf'),
    EntireMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/entire'),
    StartOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/middleOf');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'tokeniseEndOfLines', this).call(this, content, EndOfLineSignificantToken);
    }
  }, {
    key: 'matchBrokenComment',
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: 'matchSingleLineComment',
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : SingleLineCommentToken.match(content);

      return singleLineCommentToken;
    }
  }, {
    key: 'matchMultiLineCommentInComment',
    value: function matchMultiLineCommentInComment(content, inComment) {
      var multiLinCommentToken = inComment ? EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) : null;

      return multiLinCommentToken;
    }
  }, {
    key: 'matchMultiLineCommentNotInComment',
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      var multiLinCommentToken = inComment ? null : EntireMultiLineCommentToken.match(content) || StartOfMultiLineCommentToken.match(content);

      return multiLinCommentToken;
    }
  }, {
    key: 'matchRegularExpression',
    value: function matchRegularExpression(content) {
      return null;
    }
  }, {
    key: 'matchSinglyQuotedStringLiteral',
    value: function matchSinglyQuotedStringLiteral(content) {
      return null;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      entries = [{ "custom": defaultLexicalPattern ///

      }].concat(entries); ///

      return CommonLexer.fromEntries(FlorenceLexer, entries);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return FlorenceLexer.fromEntries(entries);
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

Object.assign(FlorenceLexer, {
  entries: entries
});

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiaW5Db21tZW50Iiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIm1hdGNoIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJjb25jYXQiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsd0JBQXdCRixRQUFRLHlCQUFSLENBRjlCO0FBQUEsSUFHTUcseUJBQXlCSCxRQUFRLDJDQUFSLENBSC9CO0FBQUEsSUFJTUksNEJBQTRCSixRQUFRLHVDQUFSLENBSmxDO0FBQUEsSUFLTUssNkJBQTZCTCxRQUFRLGdEQUFSLENBTG5DO0FBQUEsSUFNTU0sOEJBQThCTixRQUFRLGlEQUFSLENBTnBDO0FBQUEsSUFPTU8sK0JBQStCUCxRQUFRLGtEQUFSLENBUHJDO0FBQUEsSUFRTVEsZ0NBQWdDUixRQUFRLG1EQUFSLENBUnRDOztJQVVNUyxhOzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsOElBQWdDQSxPQUFoQyxFQUF5Q04seUJBQXpDO0FBQXNFOzs7dUNBRWpGTSxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRCxPLEVBQVNDLFMsRUFBVztBQUN6QyxVQUFNQyx5QkFBeUJELFlBQ0UsSUFERixHQUVJUix1QkFBdUJVLEtBQXZCLENBQTZCSCxPQUE3QixDQUZuQzs7QUFJQSxhQUFPRSxzQkFBUDtBQUNEOzs7bURBRThCRixPLEVBQVNDLFMsRUFBVztBQUNqRCxVQUFNRyx1QkFBdUJILFlBQ0VOLDJCQUEyQlEsS0FBM0IsQ0FBaUNILE9BQWpDLEtBQTZDRiw4QkFBOEJLLEtBQTlCLENBQW9DSCxPQUFwQyxDQUQvQyxHQUVJLElBRmpDOztBQUlBLGFBQU9JLG9CQUFQO0FBQ0Q7OztzREFFaUNKLE8sRUFBU0MsUyxFQUFXO0FBQ3BELFVBQU1HLHVCQUF1QkgsWUFDRSxJQURGLEdBRUlMLDRCQUE0Qk8sS0FBNUIsQ0FBa0NILE9BQWxDLEtBQThDSCw2QkFBNkJNLEtBQTdCLENBQW1DSCxPQUFuQyxDQUYvRTs7QUFJQSxhQUFPSSxvQkFBUDtBQUNEOzs7MkNBRXNCSixPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUVqQkEsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztnQ0FFckNYLE8sRUFBUztBQUMxQkEsZ0JBRUUsQ0FFRSxFQUFFLFVBQVdHLHFCQUFiLENBQXNDOztBQUF0QyxPQUZGLEVBSUVhLE1BSkYsQ0FJU2hCLE9BSlQsQ0FGRixDQUQwQixDQU9KOztBQUV0QixhQUFPRSxZQUFZZSxXQUFaLENBQXdCUCxhQUF4QixFQUF1Q1YsT0FBdkMsQ0FBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT1UsY0FBY08sV0FBZCxDQUEwQmpCLE9BQTFCLENBQVA7QUFBNEM7Ozs7RUE3Q3pDRSxXOztBQWdENUJnQixPQUFPQyxNQUFQLENBQWNULGFBQWQsRUFBNkI7QUFDM0JWO0FBRDJCLENBQTdCOztBQUlBb0IsT0FBT0MsT0FBUCxHQUFpQlgsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIGRlZmF1bHRMZXhpY2FsUGF0dGVybiA9IHJlcXVpcmUoJy4vZGVmYXVsdExleGljYWxQYXR0ZXJuJyksXHJcbiAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YnKSxcclxuICAgICAgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbnRpcmUnKSxcclxuICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBlbnRyaWVzID1cclxuXHJcbiAgICAgIFtcclxuXHJcbiAgICAgICAgeyBcImN1c3RvbVwiIDogZGVmYXVsdExleGljYWxQYXR0ZXJuIH0gIC8vL1xyXG5cclxuICAgICAgXS5jb25jYXQoZW50cmllcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VMZXhlciwge1xyXG4gIGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==