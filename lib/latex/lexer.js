'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

var LaTeXLexer = function (_CommonLexer) {
  _inherits(LaTeXLexer, _CommonLexer);

  function LaTeXLexer() {
    _classCallCheck(this, LaTeXLexer);

    return _possibleConstructorReturn(this, (LaTeXLexer.__proto__ || Object.getPrototypeOf(LaTeXLexer)).apply(this, arguments));
  }

  _createClass(LaTeXLexer, [{
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      NonSignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(LaTeXLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(LaTeXLexer, entries);
    }
  }]);

  return LaTeXLexer;
}(CommonLexer);

Object.assign(LaTeXLexer, {
  entries: entries
});

module.exports = LaTeXLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJMYVRlWExleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3MiLCJmcm9tTm90aGluZyIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsZ0NBQWdDRixRQUFRLDJDQUFSLENBRnRDOztJQUlNRyxVOzs7Ozs7Ozs7OzsyQ0FDbUJDLGdCLEVBQWtCO0FBQ3ZDRixvQ0FBOEJHLE9BQTlCLENBQXNDRCxnQkFBdEM7QUFDRDs7O21EQUU4QkEsZ0IsRUFBa0IsQ0FBRTs7O2tDQUU5QjtBQUFFLGFBQU9ILFlBQVlLLFdBQVosQ0FBd0JILFVBQXhCLENBQVA7QUFBNkM7OztnQ0FFakRKLE8sRUFBUztBQUFFLGFBQU9FLFlBQVlNLFdBQVosQ0FBd0JKLFVBQXhCLEVBQW9DSixPQUFwQyxDQUFQO0FBQXNEOzs7O0VBVDdERSxXOztBQVl6Qk8sT0FBT0MsTUFBUCxDQUFjTixVQUFkLEVBQTBCO0FBQ3hCSixXQUFTQTtBQURlLENBQTFCOztBQUlBVyxPQUFPQyxPQUFQLEdBQWlCUixVQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgTGFUZVhMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBwcm9jZXNzRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzUmVndWxhckV4cHJlc3Npb25Ub2tlbnModG9rZW5zT3JDb250ZW50cykge31cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoTGFUZVhMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKExhVGVYTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oTGFUZVhMZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExhVGVYTGV4ZXI7XHJcbiJdfQ==