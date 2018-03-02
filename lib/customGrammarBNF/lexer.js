'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('../bnf/entries'),
    CommonLexer = require('../common/lexer'),
    CommentTokens = require('../bnf/tokens/comment'),
    EndOfLineTokens = require('../bnf/tokens/endOfLine'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('../common/tokens/regularExpression');

var CustomGrammarBNFLexer = function (_CommonLexer) {
  _inherits(CustomGrammarBNFLexer, _CommonLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _possibleConstructorReturn(this, (CustomGrammarBNFLexer.__proto__ || Object.getPrototypeOf(CustomGrammarBNFLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return customGrammarBNFLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return CustomGrammarBNFLexer.fromEntries(entries);
    }
  }]);

  return CustomGrammarBNFLexer;
}(CommonLexer);

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJDb21tZW50VG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsInJ1bGVzIiwiUnVsZXMiLCJmcm9tRW50cmllcyIsImN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxnQkFBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxnQkFBZ0JGLFFBQVEsdUJBQVIsQ0FGdEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEseUJBQVIsQ0FIeEI7QUFBQSxJQUlNSSxtQkFBbUJKLFFBQVEsNkJBQVIsQ0FKekI7QUFBQSxJQUtNSyxzQkFBc0JMLFFBQVEsZ0NBQVIsQ0FMNUI7QUFBQSxJQU1NTSwwQkFBMEJOLFFBQVEsb0NBQVIsQ0FOaEM7O0lBUU1PLHFCOzs7Ozs7Ozs7OztnQ0FDZVIsTyxFQUFTO0FBQzFCLFVBQU1TLFFBQVFDLE1BQU1DLFdBQU4sQ0FBa0JYLE9BQWxCLENBQWQ7QUFBQSxVQUNNWSx3QkFBd0IsSUFBSUoscUJBQUosQ0FBMEJDLEtBQTFCLEVBQWlDTCxlQUFqQyxFQUFrREQsYUFBbEQsRUFBaUVFLGdCQUFqRSxFQUFtRkMsbUJBQW5GLEVBQXdHQyx1QkFBeEcsQ0FEOUI7O0FBR0EsYUFBT0sscUJBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9KLHNCQUFzQkcsV0FBdEIsQ0FBa0NYLE9BQWxDLENBQVA7QUFBb0Q7Ozs7RUFSekNFLFc7O0FBV3BDVyxPQUFPQyxPQUFQLEdBQWlCTixxQkFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi4vYm5mL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4uL2JuZi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9ibmYvdG9rZW5zL2VuZE9mTGluZScpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GTGV4ZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckJORkxleGVyKHJ1bGVzLCBFbmRPZkxpbmVUb2tlbnMsIENvbW1lbnRUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ3VzdG9tR3JhbW1hckJORkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xyXG4iXX0=