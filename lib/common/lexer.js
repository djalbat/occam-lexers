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
      var commentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var tokensOrContents = [content]; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIk5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb21tZW50VHlwZSIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUFsbEJhckVuZE9mTGluZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZVN0cmluZ0xpdGVyYWxzIiwidG9rZW5pc2VDb21tZW50cyIsInJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJ0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2VuaXNlV2hpdGVzcGFjZSIsInRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50IiwidG9rZW5pc2UiLCJyZVRva2VuaXNlIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSx3QkFBUixDQUo1QjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSwwQkFBUixDQUw5QjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw0QkFBUixDQU5oQztBQUFBLElBT01PLGdDQUFnQ1AsUUFBUSwyQ0FBUixDQVB0Qzs7SUFTTVEsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUE2QjtBQUFBLFVBQXBCQyxXQUFvQix1RUFBTixJQUFNOztBQUNwQyxVQUFNQyxtQkFBbUIsQ0FBQ0YsT0FBRCxDQUF6QixDQURvQyxDQUNBOztBQUVwQyxXQUFLRyxrQkFBTCxDQUF3QkQsZ0JBQXhCOztBQUVBLFdBQUtFLHdCQUFMLENBQThCRixnQkFBOUIsRUFBZ0RELFdBQWhEOztBQUVBLFVBQU1JLFNBQVNILGdCQUFmLENBUG9DLENBT0Y7O0FBRWxDLGFBQU9HLE1BQVA7QUFDRDs7OzZDQUV3QkgsZ0IsRUFBa0JELFcsRUFBYTtBQUN0RCxXQUFLSyxzQkFBTCxDQUE0QkosZ0JBQTVCOztBQUVBRCxvQkFBYyxLQUFLTSxnQkFBTCxDQUFzQkwsZ0JBQXRCLEVBQXdDRCxXQUF4QyxDQUFkOztBQUVBLFdBQUtPLCtCQUFMLENBQXFDTixnQkFBckM7O0FBRUEsV0FBS08sMEJBQUwsQ0FBZ0NQLGdCQUFoQzs7QUFFQSxXQUFLUSxrQkFBTCxDQUF3QlIsZ0JBQXhCOztBQUVBLFdBQUtTLDBCQUFMLENBQWdDVCxnQkFBaEM7O0FBRUEsYUFBT0QsV0FBUDtBQUNEOzs7dUNBRWtCQyxnQixFQUFrQjtBQUFFTCxvQ0FBOEJlLFFBQTlCLENBQXVDVixnQkFBdkM7QUFBMkQ7OzsyQ0FFM0VBLGdCLEVBQWtCO0FBQUVSLDBCQUFvQmtCLFFBQXBCLENBQTZCVixnQkFBN0I7QUFBaUQ7OztxQ0FFM0VBLGdCLEVBQWtCRCxXLEVBQWE7QUFBRSxhQUFPVixjQUFjcUIsUUFBZCxDQUF1QlYsZ0JBQXZCLEVBQXlDRCxXQUF6QyxDQUFQO0FBQStEOzs7b0RBRWpGQyxnQixFQUFrQjtBQUFFUCw0QkFBc0JrQixVQUF0QixDQUFpQ1gsZ0JBQWpDO0FBQXFEOzs7K0NBRTlFQSxnQixFQUFrQjtBQUFFTiw4QkFBd0JnQixRQUF4QixDQUFpQ1YsZ0JBQWpDO0FBQXFEOzs7dUNBRWpGQSxnQixFQUFrQjtBQUFFVix1QkFBaUJvQixRQUFqQixDQUEwQlYsZ0JBQTFCO0FBQThDOzs7K0NBRTFEQSxnQixFQUFrQjtBQUFFVCx3QkFBa0JtQixRQUFsQixDQUEyQlYsZ0JBQTNCLEVBQTZDLEtBQUtILEtBQWxEO0FBQTBEOzs7Z0NBRXRGZSxLLEVBQU87QUFDbEIsVUFBRUMsT0FBRixHQUFjRCxLQUFkLENBQUVDLE9BQUY7QUFBQSxVQUNBaEIsS0FEQSxHQUNRVixNQUFNMkIsV0FBTixDQUFrQkQsT0FBbEIsQ0FEUjtBQUFBLFVBRUFFLEtBRkEsR0FFUSxJQUFJSCxLQUFKLENBQVVmLEtBQVYsQ0FGUjs7O0FBSU4sYUFBT2tCLEtBQVA7QUFDRDs7O2dDQUVrQkgsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWhCLFFBQVFWLE1BQU0yQixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVVmLEtBQVYsQ0FEZDs7QUFHQSxhQUFPa0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvbWlkZGxlT2ZDb21tZW50JyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50LCBjb21tZW50VHlwZSA9IG51bGwpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF07IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VBbGxCYXJFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQWxsQmFyRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSkge1xyXG4gICAgdGhpcy50b2tlbmlzZVN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbW1lbnRUeXBlID0gdGhpcy50b2tlbmlzZUNvbW1lbnRzKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICB0aGlzLnJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlV2hpdGVzcGFjZSh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlU2lnbmlmaWNhbnRDb250ZW50KHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHJldHVybiBjb21tZW50VHlwZTtcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzKSB7IE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlU3RyaW5nTGl0ZXJhbHModG9rZW5zT3JDb250ZW50cykgeyBTdHJpbmdMaXRlcmFsVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlQ29tbWVudHModG9rZW5zT3JDb250ZW50cywgY29tbWVudFR5cGUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cywgY29tbWVudFR5cGUpOyB9XHJcblxyXG4gIHJlVG9rZW5pc2VNaWRkbGVPZkNvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykgeyBNaWRkbGVPZkNvbW1lbnRUb2tlbnMucmVUb2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlV2hpdGVzcGFjZSh0b2tlbnNPckNvbnRlbnRzKSB7IFdoaXRlc3BhY2VUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VTaWduaWZpY2FudENvbnRlbnQodG9rZW5zT3JDb250ZW50cykgeyBTaWduaWZpY2FudFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzLCB0aGlzLnJ1bGVzKSB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==