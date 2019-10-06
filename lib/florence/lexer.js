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
      var multiLinCommentToken = inComment ? null : StartOfMultiLineCommentToken.match(content);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiaW5Db21tZW50Iiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIm1hdGNoIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJjb25jYXQiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsd0JBQXdCRixRQUFRLHlCQUFSLENBRjlCO0FBQUEsSUFHTUcseUJBQXlCSCxRQUFRLDJDQUFSLENBSC9CO0FBQUEsSUFJTUksNEJBQTRCSixRQUFRLHVDQUFSLENBSmxDO0FBQUEsSUFLTUssNkJBQTZCTCxRQUFRLGdEQUFSLENBTG5DO0FBQUEsSUFNTU0sK0JBQStCTixRQUFRLGtEQUFSLENBTnJDO0FBQUEsSUFPTU8sZ0NBQWdDUCxRQUFRLG1EQUFSLENBUHRDOztJQVNNUSxhOzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsOElBQWdDQSxPQUFoQyxFQUF5Q0wseUJBQXpDO0FBQXNFOzs7dUNBRWpGSyxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRCxPLEVBQVNDLFMsRUFBVztBQUN6QyxVQUFNQyx5QkFBeUJELFlBQ0UsSUFERixHQUVJUCx1QkFBdUJTLEtBQXZCLENBQTZCSCxPQUE3QixDQUZuQzs7QUFJQSxhQUFPRSxzQkFBUDtBQUNEOzs7bURBRThCRixPLEVBQVNDLFMsRUFBVztBQUNqRCxVQUFNRyx1QkFBdUJILFlBQ0VMLDJCQUEyQk8sS0FBM0IsQ0FBaUNILE9BQWpDLEtBQTZDRiw4QkFBOEJLLEtBQTlCLENBQW9DSCxPQUFwQyxDQUQvQyxHQUVJLElBRmpDOztBQUlBLGFBQU9JLG9CQUFQO0FBQ0Q7OztzREFFaUNKLE8sRUFBU0MsUyxFQUFXO0FBQ3BELFVBQU1HLHVCQUF1QkgsWUFDRSxJQURGLEdBRUlKLDZCQUE2Qk0sS0FBN0IsQ0FBbUNILE9BQW5DLENBRmpDOztBQUlBLGFBQU9JLG9CQUFQO0FBQ0Q7OzsyQ0FFc0JKLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRWpCQSxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUVyQ1YsTyxFQUFTO0FBQzFCQSxnQkFFRSxDQUVFLEVBQUUsVUFBV0cscUJBQWIsQ0FBc0M7O0FBQXRDLE9BRkYsRUFJRVksTUFKRixDQUlTZixPQUpULENBRkYsQ0FEMEIsQ0FPSjs7QUFFdEIsYUFBT0UsWUFBWWMsV0FBWixDQUF3QlAsYUFBeEIsRUFBdUNULE9BQXZDLENBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9TLGNBQWNPLFdBQWQsQ0FBMEJoQixPQUExQixDQUFQO0FBQTRDOzs7O0VBN0N6Q0UsVzs7QUFnRDVCZSxPQUFPQyxNQUFQLENBQWNULGFBQWQsRUFBNkI7QUFDM0JUO0FBRDJCLENBQTdCOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQlgsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIGRlZmF1bHRMZXhpY2FsUGF0dGVybiA9IHJlcXVpcmUoJy4vZGVmYXVsdExleGljYWxQYXR0ZXJuJyksXHJcbiAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YnKSxcclxuICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGVudHJpZXMgPVxyXG5cclxuICAgICAgW1xyXG5cclxuICAgICAgICB7IFwiY3VzdG9tXCIgOiBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gfSAgLy8vXHJcblxyXG4gICAgICBdLmNvbmNhdChlbnRyaWVzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhGbG9yZW5jZUxleGVyLCBlbnRyaWVzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19