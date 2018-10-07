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

      this.processEndOfLineTokens(tokensOrContents);

      this.processAllBarEndOfLineTokens(tokensOrContents, commentType);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'processAllBarEndOfLineTokens',
    value: function processAllBarEndOfLineTokens(tokensOrContents, commentType) {
      this.processStringLiteralTokens(tokensOrContents);

      commentType = this.processCommentTokens(tokensOrContents, commentType);

      this.postProcessMiddleOfCommentTokens(tokensOrContents);

      this.processRegularExpressionTokens(tokensOrContents);

      this.processWhitespaceTokens(tokensOrContents);

      this.processSignificantTokens(tokensOrContents);

      return commentType;
    }
  }, {
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      NonSignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'processStringLiteralTokens',
    value: function processStringLiteralTokens(tokensOrContents) {
      StringLiteralTokens.process(tokensOrContents);
    }
  }, {
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents, commentType) {
      return CommentTokens.process(tokensOrContents, commentType);
    }
  }, {
    key: 'postProcessMiddleOfCommentTokens',
    value: function postProcessMiddleOfCommentTokens(tokensOrContents) {
      MiddleOfCommentTokens.postProcess(tokensOrContents);
    }
  }, {
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {
      RegularExpressionTokens.process(tokensOrContents);
    }
  }, {
    key: 'processWhitespaceTokens',
    value: function processWhitespaceTokens(tokensOrContents) {
      WhitespaceTokens.process(tokensOrContents);
    }
  }, {
    key: 'processSignificantTokens',
    value: function processSignificantTokens(tokensOrContents) {
      SignificantTokens.process(tokensOrContents, this.rules);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIk5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJ0b2tlbnNPckNvbnRlbnRzIiwiY29tbWVudFR5cGUiLCJwcm9jZXNzRW5kT2ZMaW5lVG9rZW5zIiwicHJvY2Vzc0FsbEJhckVuZE9mTGluZVRva2VucyIsInRva2VucyIsInByb2Nlc3NTdHJpbmdMaXRlcmFsVG9rZW5zIiwicHJvY2Vzc0NvbW1lbnRUb2tlbnMiLCJwb3N0UHJvY2Vzc01pZGRsZU9mQ29tbWVudFRva2VucyIsInByb2Nlc3NSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsInByb2Nlc3NXaGl0ZXNwYWNlVG9rZW5zIiwicHJvY2Vzc1NpZ25pZmljYW50VG9rZW5zIiwicHJvY2VzcyIsInBvc3RQcm9jZXNzIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSx3QkFBUixDQUo1QjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSwwQkFBUixDQUw5QjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw0QkFBUixDQU5oQztBQUFBLElBT01PLGdDQUFnQ1AsUUFBUSwyQ0FBUixDQVB0Qzs7SUFTTVEsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFVBQU1DLG1CQUFtQixDQUFDRCxPQUFELENBQXpCO0FBQUEsVUFBb0M7QUFDOUJFLG9CQUFjLElBRHBCOztBQUdBLFdBQUtDLHNCQUFMLENBQTRCRixnQkFBNUI7O0FBRUEsV0FBS0csNEJBQUwsQ0FBa0NILGdCQUFsQyxFQUFvREMsV0FBcEQ7O0FBRUEsVUFBTUcsU0FBU0osZ0JBQWYsQ0FSZ0IsQ0FRa0I7O0FBRWxDLGFBQU9JLE1BQVA7QUFDRDs7O2lEQUU0QkosZ0IsRUFBa0JDLFcsRUFBYTtBQUMxRCxXQUFLSSwwQkFBTCxDQUFnQ0wsZ0JBQWhDOztBQUVBQyxvQkFBYyxLQUFLSyxvQkFBTCxDQUEwQk4sZ0JBQTFCLEVBQTRDQyxXQUE1QyxDQUFkOztBQUVBLFdBQUtNLGdDQUFMLENBQXNDUCxnQkFBdEM7O0FBRUEsV0FBS1EsOEJBQUwsQ0FBb0NSLGdCQUFwQzs7QUFFQSxXQUFLUyx1QkFBTCxDQUE2QlQsZ0JBQTdCOztBQUVBLFdBQUtVLHdCQUFMLENBQThCVixnQkFBOUI7O0FBRUEsYUFBT0MsV0FBUDtBQUNEOzs7MkNBRXNCRCxnQixFQUFrQjtBQUFFSixvQ0FBOEJlLE9BQTlCLENBQXNDWCxnQkFBdEM7QUFBMEQ7OzsrQ0FFMUVBLGdCLEVBQWtCO0FBQUVQLDBCQUFvQmtCLE9BQXBCLENBQTRCWCxnQkFBNUI7QUFBZ0Q7Ozt5Q0FFMUVBLGdCLEVBQWtCQyxXLEVBQWE7QUFBRSxhQUFPWCxjQUFjcUIsT0FBZCxDQUFzQlgsZ0JBQXRCLEVBQXdDQyxXQUF4QyxDQUFQO0FBQThEOzs7cURBRW5GRCxnQixFQUFrQjtBQUFFTiw0QkFBc0JrQixXQUF0QixDQUFrQ1osZ0JBQWxDO0FBQXNEOzs7bURBRTVFQSxnQixFQUFrQjtBQUFFTCw4QkFBd0JnQixPQUF4QixDQUFnQ1gsZ0JBQWhDO0FBQW9EOzs7NENBRS9FQSxnQixFQUFrQjtBQUFFVCx1QkFBaUJvQixPQUFqQixDQUF5QlgsZ0JBQXpCO0FBQTZDOzs7NkNBRWhFQSxnQixFQUFrQjtBQUFFUix3QkFBa0JtQixPQUFsQixDQUEwQlgsZ0JBQTFCLEVBQTRDLEtBQUtGLEtBQWpEO0FBQXlEOzs7Z0NBRW5GZSxLLEVBQU87QUFDbEIsVUFBRUMsT0FBRixHQUFjRCxLQUFkLENBQUVDLE9BQUY7QUFBQSxVQUNBaEIsS0FEQSxHQUNRVixNQUFNMkIsV0FBTixDQUFrQkQsT0FBbEIsQ0FEUjtBQUFBLFVBRUFFLEtBRkEsR0FFUSxJQUFJSCxLQUFKLENBQVVmLEtBQVYsQ0FGUjs7O0FBSU4sYUFBT2tCLEtBQVA7QUFDRDs7O2dDQUVrQkgsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWhCLFFBQVFWLE1BQU0yQixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVVmLEtBQVYsQ0FEZDs7QUFHQSxhQUFPa0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvbWlkZGxlT2ZDb21tZW50JyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLCAvLy9cclxuICAgICAgICAgIGNvbW1lbnRUeXBlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHByb2Nlc3NBbGxCYXJFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cywgY29tbWVudFR5cGUpIHtcclxuICAgIHRoaXMucHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29tbWVudFR5cGUgPSB0aGlzLnByb2Nlc3NDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICB0aGlzLnBvc3RQcm9jZXNzTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1doaXRlc3BhY2VUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbW1lbnRUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0VuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7IE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgcHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnModG9rZW5zT3JDb250ZW50cykgeyBTdHJpbmdMaXRlcmFsVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgcHJvY2Vzc0NvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cywgY29tbWVudFR5cGUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSk7IH1cclxuXHJcbiAgcG9zdFByb2Nlc3NNaWRkbGVPZkNvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykgeyBNaWRkbGVPZkNvbW1lbnRUb2tlbnMucG9zdFByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgcHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHsgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICBwcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7IFdoaXRlc3BhY2VUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICBwcm9jZXNzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykgeyBTaWduaWZpY2FudFRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMsIHRoaXMucnVsZXMpIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19