'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    defaultLexicalPattern = require('./defaultLexicalPattern'),
    SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      SignificantEndOfLineTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      entries = [{ "custom": defaultLexicalPattern }].concat(entries); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJGbG9yZW5jZUxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlIiwiY29uY2F0IiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSx3QkFBd0JGLFFBQVEseUJBQVIsQ0FGOUI7QUFBQSxJQUdNRyw2QkFBNkJILFFBQVEsd0NBQVIsQ0FIbkM7O0lBS01JLGE7Ozs7Ozs7Ozs7O3VDQUNlQyxnQixFQUFrQjtBQUFFRixpQ0FBMkJHLFFBQTNCLENBQW9DRCxnQkFBcEM7QUFBd0Q7OzsrQ0FFcEVBLGdCLEVBQWtCLENBQUU7Ozt1REFFWkEsZ0IsRUFBa0IsQ0FBRTs7O2dDQUVwQ04sTyxFQUFTO0FBQzFCQSxnQkFBVSxDQUVSLEVBQUUsVUFBV0cscUJBQWIsRUFGUSxFQUlSSyxNQUpRLENBSURSLE9BSkMsQ0FBVixDQUQwQixDQUtOOztBQUVwQixhQUFPRSxZQUFZTyxXQUFaLENBQXdCSixhQUF4QixFQUF1Q0wsT0FBdkMsQ0FBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT0ssY0FBY0ksV0FBZCxDQUEwQlQsT0FBMUIsQ0FBUDtBQUE0Qzs7OztFQWpCekNFLFc7O0FBb0I1QlEsT0FBT0MsTUFBUCxDQUFjTixhQUFkLEVBQTZCO0FBQzNCTDtBQUQyQixDQUE3Qjs7QUFJQVksT0FBT0MsT0FBUCxHQUFpQlIsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIGRlZmF1bHRMZXhpY2FsUGF0dGVybiA9IHJlcXVpcmUoJy4vZGVmYXVsdExleGljYWxQYXR0ZXJuJyksXHJcbiAgICAgIFNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpIHsgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykge31cclxuXHJcbiAgdG9rZW5pc2VTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgZW50cmllcyA9IFtcclxuXHJcbiAgICAgIHsgXCJjdXN0b21cIiA6IGRlZmF1bHRMZXhpY2FsUGF0dGVybiB9XHJcblxyXG4gICAgXS5jb25jYXQoZW50cmllcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VMZXhlciwge1xyXG4gIGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==