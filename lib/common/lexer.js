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
    key: 'fromNothing',
    value: function fromNothing(Class) {
      var entries = Class.entries,
          rules = Rules.fromEntries(entries),
          lexer = new Class(rules);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIk1pZGRsZU9mQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHMiLCJ0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzIiwidG9rZW5pc2VDb21tZW50cyIsInJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJ0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2VuaXNlV2hpdGVzcGFjZSIsInRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJyZVRva2VuaXNlIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHdCQUF3QkosUUFBUSwwQkFBUixDQUo5QjtBQUFBLElBS01LLDBCQUEwQkwsUUFBUSw0QkFBUixDQUxoQztBQUFBLElBTU1NLGdDQUFnQ04sUUFBUSwyQ0FBUixDQU50QztBQUFBLElBT01PLGtDQUFrQ1AsUUFBUSxxQ0FBUixDQVB4QztBQUFBLElBUU1RLGtDQUFrQ1IsUUFBUSxxQ0FBUixDQVJ4Qzs7SUFVTVMsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFVBQU1DLG1CQUFtQixDQUFDRCxPQUFELENBQXpCLENBRGdCLENBQ29COztBQUVwQyxXQUFLRSxrQkFBTCxDQUF3QkQsZ0JBQXhCOztBQUVBLFdBQUtFLGtDQUFMLENBQXdDRixnQkFBeEM7O0FBRUEsV0FBS0csa0NBQUwsQ0FBd0NILGdCQUF4Qzs7QUFFQSxXQUFLSSxnQkFBTCxDQUFzQkosZ0JBQXRCOztBQUVBLFdBQUtLLCtCQUFMLENBQXFDTCxnQkFBckM7O0FBRUEsV0FBS00sMEJBQUwsQ0FBZ0NOLGdCQUFoQzs7QUFFQSxXQUFLTyxrQkFBTCxDQUF3QlAsZ0JBQXhCOztBQUVBLFdBQUtRLDBCQUFMLENBQWdDUixnQkFBaEM7O0FBRUEsVUFBTVMsU0FBU1QsZ0JBQWYsQ0FuQmdCLENBbUJrQjs7QUFFbEMsYUFBT1MsTUFBUDtBQUNEOzs7cUNBRWdCVCxnQixFQUFrQjtBQUFFWCxvQkFBY3FCLFFBQWQsQ0FBdUJWLGdCQUF2QjtBQUEyQzs7O3VDQUU3REEsZ0IsRUFBa0I7QUFBRVYsdUJBQWlCb0IsUUFBakIsQ0FBMEJWLGdCQUExQjtBQUE4Qzs7O3VDQUVsRUEsZ0IsRUFBa0I7QUFBRU4sb0NBQThCZ0IsUUFBOUIsQ0FBdUNWLGdCQUF2QztBQUEyRDs7O3VEQUUvREEsZ0IsRUFBa0I7QUFBRUosc0NBQWdDYyxRQUFoQyxDQUF5Q1YsZ0JBQXpDO0FBQTZEOzs7dURBRWpGQSxnQixFQUFrQjtBQUFFTCxzQ0FBZ0NlLFFBQWhDLENBQXlDVixnQkFBekM7QUFBNkQ7OzsrQ0FFekZBLGdCLEVBQWtCO0FBQUVULHdCQUFrQm1CLFFBQWxCLENBQTJCVixnQkFBM0IsRUFBNkMsS0FBS0YsS0FBbEQ7QUFBMEQ7OzsrQ0FFOUVFLGdCLEVBQWtCO0FBQUVQLDhCQUF3QmlCLFFBQXhCLENBQWlDVixnQkFBakM7QUFBcUQ7OztvREFFcEVBLGdCLEVBQWtCO0FBQUVSLDRCQUFzQm1CLFVBQXRCLENBQWlDWCxnQkFBakM7QUFBcUQ7OztnQ0FFdEZZLEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FmLEtBREEsR0FDUVgsTUFBTTJCLFdBQU4sQ0FBa0JELE9BQWxCLENBRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVEsSUFBSUgsS0FBSixDQUFVZCxLQUFWLENBRlI7OztBQUlOLGFBQU9pQixLQUFQO0FBQ0Q7OztnQ0FFa0JILEssRUFBT0MsTyxFQUFTO0FBQ2pDLFVBQU1mLFFBQVFYLE1BQU0yQixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVVkLEtBQVYsQ0FEZDs7QUFHQSxhQUFPaUIsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvbWlkZGxlT2ZDb21tZW50JyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF07IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucmVUb2tlbmlzZU1pZGRsZU9mQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlUmVndWxhckV4cHJlc3Npb25zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VXaGl0ZXNwYWNlKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VTaWduaWZpY2FudENvbnRlbnQodG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMpIHsgQ29tbWVudFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVdoaXRlc3BhY2UodG9rZW5zT3JDb250ZW50cykgeyBXaGl0ZXNwYWNlVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzKSB7IE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cykgeyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cykgeyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50KHRva2Vuc09yQ29udGVudHMpIHsgU2lnbmlmaWNhbnRUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cywgdGhpcy5ydWxlcykgfVxyXG5cclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykgeyBNaWRkbGVPZkNvbW1lbnRUb2tlbnMucmVUb2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=