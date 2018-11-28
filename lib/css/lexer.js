'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

var CSSLexer = function (_CommonLexer) {
  _inherits(CSSLexer, _CommonLexer);

  function CSSLexer() {
    _classCallCheck(this, CSSLexer);

    return _possibleConstructorReturn(this, (CSSLexer.__proto__ || Object.getPrototypeOf(CSSLexer)).apply(this, arguments));
  }

  _createClass(CSSLexer, [{
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      SignificantEndOfLineTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(CSSLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CSSLexer, entries);
    }
  }]);

  return CSSLexer;
}(CommonLexer);

Object.assign(CSSLexer, {
  entries: entries
});

module.exports = CSSLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIlNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ1NTTGV4ZXIiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2UiLCJmcm9tTm90aGluZyIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsNkJBQTZCRixRQUFRLHdDQUFSLENBRm5DOztJQUlNRyxROzs7Ozs7Ozs7Ozt1Q0FDZUMsZ0IsRUFBa0I7QUFBRUYsaUNBQTJCRyxRQUEzQixDQUFvQ0QsZ0JBQXBDO0FBQXdEOzs7K0NBRXBFQSxnQixFQUFrQixDQUFFOzs7a0NBRTFCO0FBQUUsYUFBT0gsWUFBWUssV0FBWixDQUF3QkgsUUFBeEIsQ0FBUDtBQUEyQzs7O2dDQUUvQ0osTyxFQUFTO0FBQUUsYUFBT0UsWUFBWU0sV0FBWixDQUF3QkosUUFBeEIsRUFBa0NKLE9BQWxDLENBQVA7QUFBb0Q7Ozs7RUFQN0RFLFc7O0FBVXZCTyxPQUFPQyxNQUFQLENBQWNOLFFBQWQsRUFBd0I7QUFDdEJKO0FBRHNCLENBQXhCOztBQUlBVyxPQUFPQyxPQUFQLEdBQWlCUixRQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ1NTTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpIHsgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykge31cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ1NTTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDU1NMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihDU1NMZXhlciwge1xyXG4gIGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENTU0xleGVyO1xyXG4iXX0=