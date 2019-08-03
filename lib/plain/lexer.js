'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

var PlainLexer = function (_CommonLexer) {
  _inherits(PlainLexer, _CommonLexer);

  function PlainLexer() {
    _classCallCheck(this, PlainLexer);

    return _possibleConstructorReturn(this, (PlainLexer.__proto__ || Object.getPrototypeOf(PlainLexer)).apply(this, arguments));
  }

  _createClass(PlainLexer, [{
    key: 'tokeniseComments',
    value: function tokeniseComments(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      SignificantEndOfLineTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }, {
    key: 'tokeniseDoublyQuotedStringLiterals',
    value: function tokeniseDoublyQuotedStringLiterals(tokensOrContents) {}
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromEntries(PlainLexer, entries);
    }
  }, {
    key: 'fromEntries',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJQbGFpbkxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsImluQ29tbWVudCIsInRva2VuaXNlIiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSw2QkFBNkJGLFFBQVEsd0NBQVIsQ0FGbkM7O0lBSU1HLFU7Ozs7Ozs7Ozs7O3FDQUNhQyxnQixFQUFrQkMsUyxFQUFXO0FBQUUsYUFBT0EsU0FBUDtBQUFtQjs7O3VDQUVoREQsZ0IsRUFBa0I7QUFBRUYsaUNBQTJCSSxRQUEzQixDQUFvQ0YsZ0JBQXBDO0FBQXdEOzs7K0NBRXBFQSxnQixFQUFrQixDQUFFOzs7dURBRVpBLGdCLEVBQWtCLENBQUU7Ozt1REFFcEJBLGdCLEVBQWtCLENBQUU7OztrQ0FFbEM7QUFBRSxhQUFPSCxZQUFZTSxXQUFaLENBQXdCSixVQUF4QixFQUFvQ0osT0FBcEMsQ0FBUDtBQUFzRDs7O2dDQUUxREEsTyxFQUFTO0FBQUUsYUFBT0UsWUFBWU0sV0FBWixDQUF3QkosVUFBeEIsRUFBb0NKLE9BQXBDLENBQVA7QUFBc0Q7Ozs7RUFiN0RFLFc7O0FBZ0J6Qk8sT0FBT0MsTUFBUCxDQUFjTixVQUFkLEVBQTBCO0FBQ3hCSjtBQUR3QixDQUExQjs7QUFJQVcsT0FBT0MsT0FBUCxHQUFpQlIsVUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIFBsYWluTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VDb21tZW50cyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpIHsgcmV0dXJuIGluQ29tbWVudDsgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cykgeyBTaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICB0b2tlbmlzZURvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHRva2VuaXNlU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cykge31cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoUGxhaW5MZXhlciwgZW50cmllcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFBsYWluTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oUGxhaW5MZXhlciwge1xyXG4gIGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYWluTGV4ZXI7XHJcbiJdfQ==