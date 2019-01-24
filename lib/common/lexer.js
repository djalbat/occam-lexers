'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
    URLTokens = require('./tokens/url'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    SignificantTokens = require('./tokens/significant'),
    RegularExpressionTokens = require('./tokens/regularExpression'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant'),
    SinglyQuotedStringLiteralTokens = require('./tokens/stringLiteral/singlyQuoted'),
    DoublyQuotedStringLiteralTokens = require('./tokens/stringLiteral/doublyQuoted');

var CommonLexer = function () {
  function CommonLexer(rules) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
  }

  _createClass(CommonLexer, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'tokenise',
    value: function tokenise(content) {
      var tokensOrContents = [content]; ///

      this.tokeniseEndOfLines(tokensOrContents);

      this.tokeniseDoublyQuotedStringLiterals(tokensOrContents);

      this.tokeniseSinglyQuotedStringLiterals(tokensOrContents);

      this.tokeniseURLs(tokensOrContents);

      this.tokeniseComments(tokensOrContents);

      this.tokeniseRegularExpressions(tokensOrContents);

      this.tokeniseWhitespace(tokensOrContents);

      this.tokeniseSignificantContent(tokensOrContents);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'tokeniseComments',
    value: function tokeniseComments(tokensOrContents) {
      CommentTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseURLs',
    value: function tokeniseURLs(tokensOrContents) {
      URLTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseWhitespace',
    value: function tokeniseWhitespace(tokensOrContents) {
      WhitespaceTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      NonSignificantEndOfLineTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseSignificantContent',
    value: function tokeniseSignificantContent(tokensOrContents) {
      SignificantTokens.tokenise(tokensOrContents, this.rules);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {
      RegularExpressionTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseDoublyQuotedStringLiterals',
    value: function tokeniseDoublyQuotedStringLiterals(tokensOrContents) {
      DoublyQuotedStringLiteralTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {
      SinglyQuotedStringLiteralTokens.tokenise(tokensOrContents);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(Class) {
      var entries = Class.entries,
          lexer = CommonLexer.fromEntries(Class, entries);


      return lexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(Class, entries) {
      var rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

      return lexer;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiVVJMVG9rZW5zIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHMiLCJ0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzIiwidG9rZW5pc2VVUkxzIiwidG9rZW5pc2VDb21tZW50cyIsInRva2VuaXNlUmVndWxhckV4cHJlc3Npb25zIiwidG9rZW5pc2VXaGl0ZXNwYWNlIiwidG9rZW5pc2VTaWduaWZpY2FudENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIkNsYXNzIiwiZW50cmllcyIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNRyxtQkFBbUJILFFBQVEscUJBQVIsQ0FIekI7QUFBQSxJQUlNSSxvQkFBb0JKLFFBQVEsc0JBQVIsQ0FKMUI7QUFBQSxJQUtNSywwQkFBMEJMLFFBQVEsNEJBQVIsQ0FMaEM7QUFBQSxJQU1NTSxnQ0FBZ0NOLFFBQVEsMkNBQVIsQ0FOdEM7QUFBQSxJQU9NTyxrQ0FBa0NQLFFBQVEscUNBQVIsQ0FQeEM7QUFBQSxJQVFNUSxrQ0FBa0NSLFFBQVEscUNBQVIsQ0FSeEM7O0lBVU1TLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVFDLE8sRUFBUztBQUNoQixVQUFNQyxtQkFBbUIsQ0FBQ0QsT0FBRCxDQUF6QixDQURnQixDQUNvQjs7QUFFcEMsV0FBS0Usa0JBQUwsQ0FBd0JELGdCQUF4Qjs7QUFFQSxXQUFLRSxrQ0FBTCxDQUF3Q0YsZ0JBQXhDOztBQUVBLFdBQUtHLGtDQUFMLENBQXdDSCxnQkFBeEM7O0FBRUEsV0FBS0ksWUFBTCxDQUFrQkosZ0JBQWxCOztBQUVBLFdBQUtLLGdCQUFMLENBQXNCTCxnQkFBdEI7O0FBRUEsV0FBS00sMEJBQUwsQ0FBZ0NOLGdCQUFoQzs7QUFFQSxXQUFLTyxrQkFBTCxDQUF3QlAsZ0JBQXhCOztBQUVBLFdBQUtRLDBCQUFMLENBQWdDUixnQkFBaEM7O0FBRUEsVUFBTVMsU0FBU1QsZ0JBQWYsQ0FuQmdCLENBbUJrQjs7QUFFbEMsYUFBT1MsTUFBUDtBQUNEOzs7cUNBRWdCVCxnQixFQUFrQjtBQUFFVixvQkFBY29CLFFBQWQsQ0FBdUJWLGdCQUF2QjtBQUEyQzs7O2lDQUVuRUEsZ0IsRUFBa0I7QUFBRVgsZ0JBQVVxQixRQUFWLENBQW1CVixnQkFBbkI7QUFBdUM7Ozt1Q0FFckRBLGdCLEVBQWtCO0FBQUVULHVCQUFpQm1CLFFBQWpCLENBQTBCVixnQkFBMUI7QUFBOEM7Ozt1Q0FFbEVBLGdCLEVBQWtCO0FBQUVOLG9DQUE4QmdCLFFBQTlCLENBQXVDVixnQkFBdkM7QUFBMkQ7OzsrQ0FFdkVBLGdCLEVBQWtCO0FBQUVSLHdCQUFrQmtCLFFBQWxCLENBQTJCVixnQkFBM0IsRUFBNkMsS0FBS0YsS0FBbEQ7QUFBMEQ7OzsrQ0FFOUVFLGdCLEVBQWtCO0FBQUVQLDhCQUF3QmlCLFFBQXhCLENBQWlDVixnQkFBakM7QUFBcUQ7Ozt1REFFakVBLGdCLEVBQWtCO0FBQUVKLHNDQUFnQ2MsUUFBaEMsQ0FBeUNWLGdCQUF6QztBQUE2RDs7O3VEQUVqRkEsZ0IsRUFBa0I7QUFBRUwsc0NBQWdDZSxRQUFoQyxDQUF5Q1YsZ0JBQXpDO0FBQTZEOzs7Z0NBRWpHVyxLLEVBQU87QUFDbEIsVUFBRUMsT0FBRixHQUFjRCxLQUFkLENBQUVDLE9BQUY7QUFBQSxVQUNBQyxLQURBLEdBQ1FoQixZQUFZaUIsV0FBWixDQUF3QkgsS0FBeEIsRUFBK0JDLE9BQS9CLENBRFI7OztBQUdOLGFBQU9DLEtBQVA7QUFDRDs7O2dDQUVrQkYsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWQsUUFBUVgsTUFBTTJCLFdBQU4sQ0FBa0JGLE9BQWxCLENBQWQ7QUFBQSxVQUNNQyxRQUFRLElBQUlGLEtBQUosQ0FBVWIsS0FBVixDQURkOztBQUdBLGFBQU9lLEtBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJuQixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBVUkxUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy91cmwnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyksXHJcbiAgICAgIE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvbm9uU2lnbmlmaWNhbnQnKSxcclxuICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkJyksXHJcbiAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdOyAvLy9cclxuXHJcbiAgICB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VVUkxzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb21tZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlUmVndWxhckV4cHJlc3Npb25zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VXaGl0ZXNwYWNlKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VTaWduaWZpY2FudENvbnRlbnQodG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMpIHsgQ29tbWVudFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVVSTHModG9rZW5zT3JDb250ZW50cykgeyBVUkxUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VXaGl0ZXNwYWNlKHRva2Vuc09yQ29udGVudHMpIHsgV2hpdGVzcGFjZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cykgeyBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVNpZ25pZmljYW50Q29udGVudCh0b2tlbnNPckNvbnRlbnRzKSB7IFNpZ25pZmljYW50VG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMsIHRoaXMucnVsZXMpIH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykgeyBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZURvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHsgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHsgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBsZXhlciA9IENvbW1vbkxleGVyLmZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19