'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

var PlainLexer = function (_CommonLexer) {
  _inherits(PlainLexer, _CommonLexer);

  function PlainLexer() {
    _classCallCheck(this, PlainLexer);

    return _possibleConstructorReturn(this, (PlainLexer.__proto__ || Object.getPrototypeOf(PlainLexer)).apply(this, arguments));
  }

  _createClass(PlainLexer, [{
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      NonSignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'postProcessMiddleOfCommentTokens',
    value: function postProcessMiddleOfCommentTokens(tokensOrContents) {}
  }, {
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {}
  }, {
    key: 'processStringLiteralTokens',
    value: function processStringLiteralTokens(tokensOrContents) {}
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(PlainLexer, entries);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(PlainLexer);
    }
  }]);

  return PlainLexer;
}(CommonLexer);

Object.assign(PlainLexer, {
  entries: entries
});

module.exports = PlainLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJQbGFpbkxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3MiLCJpbkNvbW1lbnQiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsZ0NBQWdDRixRQUFRLDJDQUFSLENBRnRDOztJQUlNRyxVOzs7Ozs7Ozs7OzsyQ0FDbUJDLGdCLEVBQWtCO0FBQ3ZDRixvQ0FBOEJHLE9BQTlCLENBQXNDRCxnQkFBdEM7QUFDRDs7O3lDQUVvQkEsZ0IsRUFBa0JFLFMsRUFBVztBQUFFLGFBQU9BLFNBQVA7QUFBbUI7OztxREFFdENGLGdCLEVBQWtCLENBQUU7OzttREFFdEJBLGdCLEVBQWtCLENBQUU7OzsrQ0FFeEJBLGdCLEVBQWtCLENBQUU7OztnQ0FFNUJMLE8sRUFBUztBQUFFLGFBQU9FLFlBQVlNLFdBQVosQ0FBd0JKLFVBQXhCLEVBQW9DSixPQUFwQyxDQUFQO0FBQXNEOzs7a0NBRS9EO0FBQUUsYUFBT0UsWUFBWU8sV0FBWixDQUF3QkwsVUFBeEIsQ0FBUDtBQUE2Qzs7OztFQWY3Q0YsVzs7QUFrQnpCUSxPQUFPQyxNQUFQLENBQWNQLFVBQWQsRUFBMEI7QUFDeEJKLFdBQVNBO0FBRGUsQ0FBMUI7O0FBSUFZLE9BQU9DLE9BQVAsR0FBaUJULFVBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvZW5kT2ZMaW5lL25vblNpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBQbGFpbkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHByb2Nlc3NFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGluQ29tbWVudCkgeyByZXR1cm4gaW5Db21tZW50OyB9XHJcblxyXG4gIHBvc3RQcm9jZXNzTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHByb2Nlc3NSZWd1bGFyRXhwcmVzc2lvblRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBwcm9jZXNzU3RyaW5nTGl0ZXJhbFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoUGxhaW5MZXhlciwgZW50cmllcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoUGxhaW5MZXhlcik7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihQbGFpbkxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhaW5MZXhlcjtcclxuIl19