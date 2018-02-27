'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    CommentTokens = require('../common/tokens/comment'),
    EndOfLineTokens = require('./tokens/endOfLine'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, null, [{
    key: 'fromCombinedCustomGrammarsLexicalPattern',
    value: function fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
      var custom = combinedCustomGrammarsLexicalPattern,
          ///
      customGrammarEntry = {
        custom: custom
      },
          customGrammarRule = CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return florenceLexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return florenceLexer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiQ29tbWVudFRva2VucyIsIkVuZE9mTGluZVRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJGbG9yZW5jZUxleGVyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuIiwiY3VzdG9tIiwiY3VzdG9tR3JhbW1hckVudHJ5IiwiY3VzdG9tR3JhbW1hclJ1bGUiLCJydWxlRnJvbUVudHJ5IiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwiYWRkUnVsZSIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSwwQkFBUixDQUZ0QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1JLG1CQUFtQkosUUFBUSw2QkFBUixDQUp6QjtBQUFBLElBS01LLHNCQUFzQkwsUUFBUSxnQ0FBUixDQUw1QjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw0QkFBUixDQU5oQzs7SUFRTU8sYTs7Ozs7Ozs7Ozs7NkRBQzRDQyxvQyxFQUFzQztBQUNwRixVQUFNQyxTQUFTRCxvQ0FBZjtBQUFBLFVBQXFEO0FBQy9DRSwyQkFBcUI7QUFDbkJELGdCQUFRQTtBQURXLE9BRDNCO0FBQUEsVUFJTUUsb0JBQXFCVixZQUFZVyxhQUFaLENBQTBCRixrQkFBMUIsQ0FKM0I7QUFBQSxVQUtNRyxRQUFRWixZQUFZYSxnQkFBWixDQUE2QmYsT0FBN0IsQ0FMZDs7QUFPQWMsWUFBTUUsT0FBTixDQUFjSixpQkFBZDs7QUFFQSxVQUFNSyxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQk0sS0FBbEIsRUFBeUJWLGVBQXpCLEVBQTBDRCxhQUExQyxFQUF5REUsZ0JBQXpELEVBQTJFQyxtQkFBM0UsRUFBZ0dDLHVCQUFoRyxDQUF0Qjs7QUFFQSxhQUFPVSxhQUFQO0FBQ0Q7OztnQ0FFa0JqQixPLEVBQVM7QUFDMUIsVUFBTWMsUUFBUVosWUFBWWEsZ0JBQVosQ0FBNkJmLE9BQTdCLENBQWQ7QUFBQSxVQUNNaUIsZ0JBQWdCLElBQUlULGFBQUosQ0FBa0JNLEtBQWxCLEVBQXlCVixlQUF6QixFQUEwQ0QsYUFBMUMsRUFBeURFLGdCQUF6RCxFQUEyRUMsbUJBQTNFLEVBQWdHQyx1QkFBaEcsQ0FEdEI7O0FBR0EsYUFBT1UsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT1QsY0FBY1UsV0FBZCxDQUEwQmxCLE9BQTFCLENBQVA7QUFBNEM7Ozs7RUF2QnpDRSxXOztBQTBCNUJpQixPQUFPQyxNQUFQLENBQWNaLGFBQWQsRUFBNkI7QUFDM0JSLFdBQVNBO0FBRGtCLENBQTdCOztBQUlBcUIsT0FBT0MsT0FBUCxHQUFpQmQsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybikge1xyXG4gICAgY29uc3QgY3VzdG9tID0gY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuLCAvLy9cclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJFbnRyeSA9IHtcclxuICAgICAgICAgICAgY3VzdG9tOiBjdXN0b21cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUnVsZSA9ICBDb21tb25MZXhlci5ydWxlRnJvbUVudHJ5KGN1c3RvbUdyYW1tYXJFbnRyeSksXHJcbiAgICAgICAgICBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcnVsZXMuYWRkUnVsZShjdXN0b21HcmFtbWFyUnVsZSk7XHJcblxyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBFbmRPZkxpbmVUb2tlbnMsIENvbW1lbnRUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIEVuZE9mTGluZVRva2VucywgQ29tbWVudFRva2VucywgV2hpdGVzcGFjZVRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=