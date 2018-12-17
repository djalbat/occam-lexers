'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
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
    key: 'tokeniseDoublyQuotedStringLiterals',
    value: function tokeniseDoublyQuotedStringLiterals(tokensOrContents) {
      DoublyQuotedStringLiteralTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {
      SinglyQuotedStringLiteralTokens.tokenise(tokensOrContents);
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
  }], [{
    key: 'fromEntries',
    value: function fromEntries(Class, entries) {
      var rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

      return lexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing(Class) {
      var entries = Class.entries,
          lexer = CommonLexer.fromEntries(Class, entries);


      return lexer;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIk1pZGRsZU9mQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHMiLCJ0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzIiwidG9rZW5pc2VDb21tZW50cyIsInJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJ0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2VuaXNlV2hpdGVzcGFjZSIsInRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJyZVRva2VuaXNlIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHdCQUF3QkosUUFBUSwwQkFBUixDQUo5QjtBQUFBLElBS01LLDBCQUEwQkwsUUFBUSw0QkFBUixDQUxoQztBQUFBLElBTU1NLGdDQUFnQ04sUUFBUSwyQ0FBUixDQU50QztBQUFBLElBT01PLGtDQUFrQ1AsUUFBUSxxQ0FBUixDQVB4QztBQUFBLElBUU1RLGtDQUFrQ1IsUUFBUSxxQ0FBUixDQVJ4Qzs7SUFVTVMsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFVBQU1DLG1CQUFtQixDQUFDRCxPQUFELENBQXpCLENBRGdCLENBQ29COztBQUVwQyxXQUFLRSxrQkFBTCxDQUF3QkQsZ0JBQXhCOztBQUVBLFdBQUtFLGtDQUFMLENBQXdDRixnQkFBeEM7O0FBRUEsV0FBS0csa0NBQUwsQ0FBd0NILGdCQUF4Qzs7QUFFQSxXQUFLSSxnQkFBTCxDQUFzQkosZ0JBQXRCOztBQUVBLFdBQUtLLCtCQUFMLENBQXFDTCxnQkFBckM7O0FBRUEsV0FBS00sMEJBQUwsQ0FBZ0NOLGdCQUFoQzs7QUFFQSxXQUFLTyxrQkFBTCxDQUF3QlAsZ0JBQXhCOztBQUVBLFdBQUtRLDBCQUFMLENBQWdDUixnQkFBaEM7O0FBRUEsVUFBTVMsU0FBU1QsZ0JBQWYsQ0FuQmdCLENBbUJrQjs7QUFFbEMsYUFBT1MsTUFBUDtBQUNEOzs7cUNBRWdCVCxnQixFQUFrQjtBQUFFWCxvQkFBY3FCLFFBQWQsQ0FBdUJWLGdCQUF2QjtBQUEyQzs7O3VDQUU3REEsZ0IsRUFBa0I7QUFBRVYsdUJBQWlCb0IsUUFBakIsQ0FBMEJWLGdCQUExQjtBQUE4Qzs7O3VDQUVsRUEsZ0IsRUFBa0I7QUFBRU4sb0NBQThCZ0IsUUFBOUIsQ0FBdUNWLGdCQUF2QztBQUEyRDs7O3VEQUUvREEsZ0IsRUFBa0I7QUFBRUosc0NBQWdDYyxRQUFoQyxDQUF5Q1YsZ0JBQXpDO0FBQTZEOzs7dURBRWpGQSxnQixFQUFrQjtBQUFFTCxzQ0FBZ0NlLFFBQWhDLENBQXlDVixnQkFBekM7QUFBNkQ7OzsrQ0FFekZBLGdCLEVBQWtCO0FBQUVULHdCQUFrQm1CLFFBQWxCLENBQTJCVixnQkFBM0IsRUFBNkMsS0FBS0YsS0FBbEQ7QUFBMEQ7OzsrQ0FFOUVFLGdCLEVBQWtCO0FBQUVQLDhCQUF3QmlCLFFBQXhCLENBQWlDVixnQkFBakM7QUFBcUQ7OztvREFFcEVBLGdCLEVBQWtCO0FBQUVSLDRCQUFzQm1CLFVBQXRCLENBQWlDWCxnQkFBakM7QUFBcUQ7OztnQ0FFdEZZLEssRUFBT0MsTyxFQUFTO0FBQ2pDLFVBQU1mLFFBQVFYLE1BQU0yQixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVVkLEtBQVYsQ0FEZDs7QUFHQSxhQUFPaUIsS0FBUDtBQUNEOzs7Z0NBRWtCSCxLLEVBQU87QUFDbEIsVUFBRUMsT0FBRixHQUFjRCxLQUFkLENBQUVDLE9BQUY7QUFBQSxVQUNBRSxLQURBLEdBQ1FsQixZQUFZaUIsV0FBWixDQUF3QkYsS0FBeEIsRUFBK0JDLE9BQS9CLENBRFI7OztBQUdOLGFBQU9FLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3NpZ25pZmljYW50JyksXHJcbiAgICAgIE1pZGRsZU9mQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL21pZGRsZU9mQ29tbWVudCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyksXHJcbiAgICAgIE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvbm9uU2lnbmlmaWNhbnQnKSxcclxuICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkJyksXHJcbiAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdOyAvLy9cclxuXHJcbiAgICB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb21tZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlV2hpdGVzcGFjZSh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50KHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb21tZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7IENvbW1lbnRUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VXaGl0ZXNwYWNlKHRva2Vuc09yQ29udGVudHMpIHsgV2hpdGVzcGFjZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cykgeyBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZURvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHsgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHsgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVNpZ25pZmljYW50Q29udGVudCh0b2tlbnNPckNvbnRlbnRzKSB7IFNpZ25pZmljYW50VG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMsIHRoaXMucnVsZXMpIH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykgeyBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICByZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHsgTWlkZGxlT2ZDb21tZW50VG9rZW5zLnJlVG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIGxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==