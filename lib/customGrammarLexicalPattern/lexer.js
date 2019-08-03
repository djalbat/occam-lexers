'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

var CustomGrammarLexicalPatternLexer = function (_CommonLexer) {
  _inherits(CustomGrammarLexicalPatternLexer, _CommonLexer);

  function CustomGrammarLexicalPatternLexer() {
    _classCallCheck(this, CustomGrammarLexicalPatternLexer);

    return _possibleConstructorReturn(this, (CustomGrammarLexicalPatternLexer.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternLexer, [{
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
      return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries);
    }
  }]);

  return CustomGrammarLexicalPatternLexer;
}(CommonLexer);

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries: entries
});

module.exports = CustomGrammarLexicalPatternLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIlNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIiLCJ0b2tlbnNPckNvbnRlbnRzIiwiaW5Db21tZW50IiwidG9rZW5pc2UiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLDZCQUE2QkYsUUFBUSx3Q0FBUixDQUZuQzs7SUFJTUcsZ0M7Ozs7Ozs7Ozs7O3FDQUNhQyxnQixFQUFrQkMsUyxFQUFXO0FBQUUsYUFBT0EsU0FBUDtBQUFtQjs7O3VDQUVoREQsZ0IsRUFBa0I7QUFBRUYsaUNBQTJCSSxRQUEzQixDQUFvQ0YsZ0JBQXBDO0FBQXdEOzs7K0NBRXBFQSxnQixFQUFrQixDQUFFOzs7dURBRVpBLGdCLEVBQWtCLENBQUU7Ozt1REFFcEJBLGdCLEVBQWtCLENBQUU7OztrQ0FFbEM7QUFBRSxhQUFPSCxZQUFZTSxXQUFaLENBQXdCSixnQ0FBeEIsRUFBMERKLE9BQTFELENBQVA7QUFBNEU7OztnQ0FFaEZBLE8sRUFBUztBQUFFLGFBQU9FLFlBQVlNLFdBQVosQ0FBd0JKLGdDQUF4QixFQUEwREosT0FBMUQsQ0FBUDtBQUE0RTs7OztFQWI3REUsVzs7QUFnQi9DTyxPQUFPQyxNQUFQLENBQWNOLGdDQUFkLEVBQWdEO0FBQzlDSjtBQUQ4QyxDQUFoRDs7QUFJQVcsT0FBT0MsT0FBUCxHQUFpQlIsZ0NBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxuICAgICAgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9zaWduaWZpY2FudCcpXG5cbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xuICB0b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMsIGluQ29tbWVudCkgeyByZXR1cm4gaW5Db21tZW50OyB9XG5cbiAgdG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpIHsgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cblxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxuXG4gIHRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cykge31cblxuICB0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHt9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIGVudHJpZXMpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLCBlbnRyaWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLCB7XG4gIGVudHJpZXNcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyO1xuIl19