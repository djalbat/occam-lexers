'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    CommentTokens = require('./tokens/comment'),
    EndOfLineTokens = require('./tokens/endOfLine'),
    WhitespaceTokens = require('./tokens/whitespace'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

var CustomGrammarLexicalPatternLexer = function (_CommonLexer) {
  _inherits(CustomGrammarLexicalPatternLexer, _CommonLexer);

  function CustomGrammarLexicalPatternLexer() {
    _classCallCheck(this, CustomGrammarLexicalPatternLexer);

    return _possibleConstructorReturn(this, (CustomGrammarLexicalPatternLexer.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          customGrammarLexicalPatternLexer = new CustomGrammarLexicalPatternLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return customGrammarLexicalPatternLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return CustomGrammarLexicalPatternLexer.fromEntries(entries);
    }
  }]);

  return CustomGrammarLexicalPatternLexer;
}(CommonLexer);

module.exports = CustomGrammarLexicalPatternLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIkNvbW1lbnRUb2tlbnMiLCJFbmRPZkxpbmVUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIiLCJydWxlcyIsIlJ1bGVzIiwiZnJvbUVudHJpZXMiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUZ0QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1JLG1CQUFtQkosUUFBUSxxQkFBUixDQUp6QjtBQUFBLElBS01LLHNCQUFzQkwsUUFBUSx3QkFBUixDQUw1QjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw0QkFBUixDQU5oQzs7SUFRTU8sZ0M7Ozs7Ozs7Ozs7O2dDQUNlUixPLEVBQVM7QUFDMUIsVUFBTVMsUUFBUUMsTUFBTUMsV0FBTixDQUFrQlgsT0FBbEIsQ0FBZDtBQUFBLFVBQ01ZLG1DQUFtQyxJQUFJSixnQ0FBSixDQUFxQ0MsS0FBckMsRUFBNENMLGVBQTVDLEVBQTZERCxhQUE3RCxFQUE0RUUsZ0JBQTVFLEVBQThGQyxtQkFBOUYsRUFBbUhDLHVCQUFuSCxDQUR6Qzs7QUFHQSxhQUFPSyxnQ0FBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT0osaUNBQWlDRyxXQUFqQyxDQUE2Q1gsT0FBN0MsQ0FBUDtBQUErRDs7OztFQVJ6Q0UsVzs7QUFXL0NXLE9BQU9DLE9BQVAsR0FBaUJOLGdDQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zdHJpbmdMaXRlcmFsJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKTtcclxuXHJcbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIocnVsZXMsIEVuZE9mTGluZVRva2VucywgQ29tbWVudFRva2VucywgV2hpdGVzcGFjZVRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XHJcbiJdfQ==