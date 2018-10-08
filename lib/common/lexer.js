'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    SignificantTokens = require('./tokens/significant'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    MiddleOfCommentTokens = require('./tokens/middleOfComment'),
    RegularExpressionTokens = require('./tokens/regularExpression'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

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
      var tokensOrContents = [content],
          ///
      commentType = null;

      this.tokeniseEndOfLines(tokensOrContents);

      this.tokeniseAllBarEndOfLines(tokensOrContents, commentType);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'tokeniseAllBarEndOfLines',
    value: function tokeniseAllBarEndOfLines(tokensOrContents, commentType) {
      this.tokeniseStringLiterals(tokensOrContents);

      commentType = this.tokeniseComments(tokensOrContents, commentType);

      this.reTokeniseMiddleOfCommentTokens(tokensOrContents);

      this.tokeniseRegularExpressions(tokensOrContents);

      this.tokeniseWhitespace(tokensOrContents);

      this.tokeniseSignificantContent(tokensOrContents);

      return commentType;
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      NonSignificantEndOfLineTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseStringLiterals',
    value: function tokeniseStringLiterals(tokensOrContents) {
      StringLiteralTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseComments',
    value: function tokeniseComments(tokensOrContents, commentType) {
      return CommentTokens.tokenise(tokensOrContents, commentType);
    }
  }, {
    key: 'reTokeniseMiddleOfCommentTokens',
    value: function reTokeniseMiddleOfCommentTokens(tokensOrContents) {
      MiddleOfCommentTokens.reTokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {
      RegularExpressionTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseWhitespace',
    value: function tokeniseWhitespace(tokensOrContents) {
      WhitespaceTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseSignificantContent',
    value: function tokeniseSignificantContent(tokensOrContents) {
      SignificantTokens.tokenise(tokensOrContents, this.rules);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIk5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJ0b2tlbnNPckNvbnRlbnRzIiwiY29tbWVudFR5cGUiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUFsbEJhckVuZE9mTGluZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZVN0cmluZ0xpdGVyYWxzIiwidG9rZW5pc2VDb21tZW50cyIsInJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJ0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2VuaXNlV2hpdGVzcGFjZSIsInRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50IiwidG9rZW5pc2UiLCJyZVRva2VuaXNlIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSx3QkFBUixDQUo1QjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSwwQkFBUixDQUw5QjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw0QkFBUixDQU5oQztBQUFBLElBT01PLGdDQUFnQ1AsUUFBUSwyQ0FBUixDQVB0Qzs7SUFTTVEsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFVBQU1DLG1CQUFtQixDQUFDRCxPQUFELENBQXpCO0FBQUEsVUFBb0M7QUFDOUJFLG9CQUFjLElBRHBCOztBQUdBLFdBQUtDLGtCQUFMLENBQXdCRixnQkFBeEI7O0FBRUEsV0FBS0csd0JBQUwsQ0FBOEJILGdCQUE5QixFQUFnREMsV0FBaEQ7O0FBRUEsVUFBTUcsU0FBU0osZ0JBQWYsQ0FSZ0IsQ0FRa0I7O0FBRWxDLGFBQU9JLE1BQVA7QUFDRDs7OzZDQUV3QkosZ0IsRUFBa0JDLFcsRUFBYTtBQUN0RCxXQUFLSSxzQkFBTCxDQUE0QkwsZ0JBQTVCOztBQUVBQyxvQkFBYyxLQUFLSyxnQkFBTCxDQUFzQk4sZ0JBQXRCLEVBQXdDQyxXQUF4QyxDQUFkOztBQUVBLFdBQUtNLCtCQUFMLENBQXFDUCxnQkFBckM7O0FBRUEsV0FBS1EsMEJBQUwsQ0FBZ0NSLGdCQUFoQzs7QUFFQSxXQUFLUyxrQkFBTCxDQUF3QlQsZ0JBQXhCOztBQUVBLFdBQUtVLDBCQUFMLENBQWdDVixnQkFBaEM7O0FBRUEsYUFBT0MsV0FBUDtBQUNEOzs7dUNBRWtCRCxnQixFQUFrQjtBQUFFSixvQ0FBOEJlLFFBQTlCLENBQXVDWCxnQkFBdkM7QUFBMkQ7OzsyQ0FFM0VBLGdCLEVBQWtCO0FBQUVQLDBCQUFvQmtCLFFBQXBCLENBQTZCWCxnQkFBN0I7QUFBaUQ7OztxQ0FFM0VBLGdCLEVBQWtCQyxXLEVBQWE7QUFBRSxhQUFPWCxjQUFjcUIsUUFBZCxDQUF1QlgsZ0JBQXZCLEVBQXlDQyxXQUF6QyxDQUFQO0FBQStEOzs7b0RBRWpGRCxnQixFQUFrQjtBQUFFTiw0QkFBc0JrQixVQUF0QixDQUFpQ1osZ0JBQWpDO0FBQXFEOzs7K0NBRTlFQSxnQixFQUFrQjtBQUFFTCw4QkFBd0JnQixRQUF4QixDQUFpQ1gsZ0JBQWpDO0FBQXFEOzs7dUNBRWpGQSxnQixFQUFrQjtBQUFFVCx1QkFBaUJvQixRQUFqQixDQUEwQlgsZ0JBQTFCO0FBQThDOzs7K0NBRTFEQSxnQixFQUFrQjtBQUFFUix3QkFBa0JtQixRQUFsQixDQUEyQlgsZ0JBQTNCLEVBQTZDLEtBQUtGLEtBQWxEO0FBQTBEOzs7Z0NBRXRGZSxLLEVBQU87QUFDbEIsVUFBRUMsT0FBRixHQUFjRCxLQUFkLENBQUVDLE9BQUY7QUFBQSxVQUNBaEIsS0FEQSxHQUNRVixNQUFNMkIsV0FBTixDQUFrQkQsT0FBbEIsQ0FEUjtBQUFBLFVBRUFFLEtBRkEsR0FFUSxJQUFJSCxLQUFKLENBQVVmLEtBQVYsQ0FGUjs7O0FBSU4sYUFBT2tCLEtBQVA7QUFDRDs7O2dDQUVrQkgsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWhCLFFBQVFWLE1BQU0yQixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVVmLEtBQVYsQ0FEZDs7QUFHQSxhQUFPa0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvbWlkZGxlT2ZDb21tZW50JyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLCAvLy9cclxuICAgICAgICAgIGNvbW1lbnRUeXBlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQWxsQmFyRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUFsbEJhckVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cywgY29tbWVudFR5cGUpIHtcclxuICAgIHRoaXMudG9rZW5pc2VTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb21tZW50VHlwZSA9IHRoaXMudG9rZW5pc2VDb21tZW50cyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSk7XHJcblxyXG4gICAgdGhpcy5yZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVdoaXRlc3BhY2UodG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVNpZ25pZmljYW50Q29udGVudCh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudFR5cGU7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cykgeyBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHsgU3RyaW5nTGl0ZXJhbFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKSB7IHJldHVybiBDb21tZW50VG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTsgfVxyXG5cclxuICByZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHsgTWlkZGxlT2ZDb21tZW50VG9rZW5zLnJlVG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykgeyBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVdoaXRlc3BhY2UodG9rZW5zT3JDb250ZW50cykgeyBXaGl0ZXNwYWNlVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50KHRva2Vuc09yQ29udGVudHMpIHsgU2lnbmlmaWNhbnRUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cywgdGhpcy5ydWxlcykgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=