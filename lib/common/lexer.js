'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
    URLTokens = require('./tokens/url'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    SignificantTokens = require('./tokens/significant'),
    MiddleOfCommentTokens = require('./tokens/middleOfComment'),
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

      this.reTokeniseMiddleOfCommentTokens(tokensOrContents);

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
    key: 'reTokeniseMiddleOfCommentTokens',
    value: function reTokeniseMiddleOfCommentTokens(tokensOrContents) {
      MiddleOfCommentTokens.reTokenise(tokensOrContents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiVVJMVG9rZW5zIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIk1pZGRsZU9mQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHMiLCJ0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzIiwidG9rZW5pc2VVUkxzIiwidG9rZW5pc2VDb21tZW50cyIsInJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJ0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2VuaXNlV2hpdGVzcGFjZSIsInRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJyZVRva2VuaXNlIiwiQ2xhc3MiLCJlbnRyaWVzIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUZ0QjtBQUFBLElBR01HLG1CQUFtQkgsUUFBUSxxQkFBUixDQUh6QjtBQUFBLElBSU1JLG9CQUFvQkosUUFBUSxzQkFBUixDQUoxQjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSwwQkFBUixDQUw5QjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw0QkFBUixDQU5oQztBQUFBLElBT01PLGdDQUFnQ1AsUUFBUSwyQ0FBUixDQVB0QztBQUFBLElBUU1RLGtDQUFrQ1IsUUFBUSxxQ0FBUixDQVJ4QztBQUFBLElBU01TLGtDQUFrQ1QsUUFBUSxxQ0FBUixDQVR4Qzs7SUFXTVUsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFVBQU1DLG1CQUFtQixDQUFDRCxPQUFELENBQXpCLENBRGdCLENBQ29COztBQUVwQyxXQUFLRSxrQkFBTCxDQUF3QkQsZ0JBQXhCOztBQUVBLFdBQUtFLGtDQUFMLENBQXdDRixnQkFBeEM7O0FBRUEsV0FBS0csa0NBQUwsQ0FBd0NILGdCQUF4Qzs7QUFFQSxXQUFLSSxZQUFMLENBQWtCSixnQkFBbEI7O0FBRUEsV0FBS0ssZ0JBQUwsQ0FBc0JMLGdCQUF0Qjs7QUFFQSxXQUFLTSwrQkFBTCxDQUFxQ04sZ0JBQXJDOztBQUVBLFdBQUtPLDBCQUFMLENBQWdDUCxnQkFBaEM7O0FBRUEsV0FBS1Esa0JBQUwsQ0FBd0JSLGdCQUF4Qjs7QUFFQSxXQUFLUywwQkFBTCxDQUFnQ1QsZ0JBQWhDOztBQUVBLFVBQU1VLFNBQVNWLGdCQUFmLENBckJnQixDQXFCa0I7O0FBRWxDLGFBQU9VLE1BQVA7QUFDRDs7O3FDQUVnQlYsZ0IsRUFBa0I7QUFBRVgsb0JBQWNzQixRQUFkLENBQXVCWCxnQkFBdkI7QUFBMkM7OztpQ0FFbkVBLGdCLEVBQWtCO0FBQUVaLGdCQUFVdUIsUUFBVixDQUFtQlgsZ0JBQW5CO0FBQXVDOzs7dUNBRXJEQSxnQixFQUFrQjtBQUFFVix1QkFBaUJxQixRQUFqQixDQUEwQlgsZ0JBQTFCO0FBQThDOzs7dUNBRWxFQSxnQixFQUFrQjtBQUFFTixvQ0FBOEJpQixRQUE5QixDQUF1Q1gsZ0JBQXZDO0FBQTJEOzs7K0NBRXZFQSxnQixFQUFrQjtBQUFFVCx3QkFBa0JvQixRQUFsQixDQUEyQlgsZ0JBQTNCLEVBQTZDLEtBQUtGLEtBQWxEO0FBQTBEOzs7K0NBRTlFRSxnQixFQUFrQjtBQUFFUCw4QkFBd0JrQixRQUF4QixDQUFpQ1gsZ0JBQWpDO0FBQXFEOzs7b0RBRXBFQSxnQixFQUFrQjtBQUFFUiw0QkFBc0JvQixVQUF0QixDQUFpQ1osZ0JBQWpDO0FBQXFEOzs7dURBRXRFQSxnQixFQUFrQjtBQUFFSixzQ0FBZ0NlLFFBQWhDLENBQXlDWCxnQkFBekM7QUFBNkQ7Ozt1REFFakZBLGdCLEVBQWtCO0FBQUVMLHNDQUFnQ2dCLFFBQWhDLENBQXlDWCxnQkFBekM7QUFBNkQ7OztnQ0FFakdhLEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FDLEtBREEsR0FDUWxCLFlBQVltQixXQUFaLENBQXdCSCxLQUF4QixFQUErQkMsT0FBL0IsQ0FEUjs7O0FBR04sYUFBT0MsS0FBUDtBQUNEOzs7Z0NBRWtCRixLLEVBQU9DLE8sRUFBUztBQUNqQyxVQUFNaEIsUUFBUVosTUFBTThCLFdBQU4sQ0FBa0JGLE9BQWxCLENBQWQ7QUFBQSxVQUNNQyxRQUFRLElBQUlGLEtBQUosQ0FBVWYsS0FBVixDQURkOztBQUdBLGFBQU9pQixLQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCckIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgVVJMVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvdXJsJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvbWlkZGxlT2ZDb21tZW50JyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF07IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVVSTHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucmVUb2tlbmlzZU1pZGRsZU9mQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlUmVndWxhckV4cHJlc3Npb25zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VXaGl0ZXNwYWNlKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VTaWduaWZpY2FudENvbnRlbnQodG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMpIHsgQ29tbWVudFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVVSTHModG9rZW5zT3JDb250ZW50cykgeyBVUkxUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VXaGl0ZXNwYWNlKHRva2Vuc09yQ29udGVudHMpIHsgV2hpdGVzcGFjZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cykgeyBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVNpZ25pZmljYW50Q29udGVudCh0b2tlbnNPckNvbnRlbnRzKSB7IFNpZ25pZmljYW50VG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMsIHRoaXMucnVsZXMpIH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykgeyBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICByZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHsgTWlkZGxlT2ZDb21tZW50VG9rZW5zLnJlVG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKSB7IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKSB7IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgbGV4ZXIgPSBDb21tb25MZXhlci5mcm9tRW50cmllcyhDbGFzcywgZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==