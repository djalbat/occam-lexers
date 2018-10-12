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
      var tokensOrContents = [content]; ///

      this.tokeniseEndOfLines(tokensOrContents);

      this.tokeniseStringLiterals(tokensOrContents);

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
    key: 'tokeniseStringLiterals',
    value: function tokeniseStringLiterals(tokensOrContents) {
      StringLiteralTokens.tokenise(tokensOrContents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIk5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5pc2VTdHJpbmdMaXRlcmFscyIsInRva2VuaXNlQ29tbWVudHMiLCJyZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zIiwidG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnMiLCJ0b2tlbmlzZVdoaXRlc3BhY2UiLCJ0b2tlbmlzZVNpZ25pZmljYW50Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwicmVUb2tlbmlzZSIsIkNsYXNzIiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEscUJBQVIsQ0FGekI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FIMUI7QUFBQSxJQUlNSSxzQkFBc0JKLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNSyx3QkFBd0JMLFFBQVEsMEJBQVIsQ0FMOUI7QUFBQSxJQU1NTSwwQkFBMEJOLFFBQVEsNEJBQVIsQ0FOaEM7QUFBQSxJQU9NTyxnQ0FBZ0NQLFFBQVEsMkNBQVIsQ0FQdEM7O0lBU01RLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVFDLE8sRUFBUztBQUNoQixVQUFNQyxtQkFBbUIsQ0FBQ0QsT0FBRCxDQUF6QixDQURnQixDQUNvQjs7QUFFcEMsV0FBS0Usa0JBQUwsQ0FBd0JELGdCQUF4Qjs7QUFFQSxXQUFLRSxzQkFBTCxDQUE0QkYsZ0JBQTVCOztBQUVBLFdBQUtHLGdCQUFMLENBQXNCSCxnQkFBdEI7O0FBRUEsV0FBS0ksK0JBQUwsQ0FBcUNKLGdCQUFyQzs7QUFFQSxXQUFLSywwQkFBTCxDQUFnQ0wsZ0JBQWhDOztBQUVBLFdBQUtNLGtCQUFMLENBQXdCTixnQkFBeEI7O0FBRUEsV0FBS08sMEJBQUwsQ0FBZ0NQLGdCQUFoQzs7QUFFQSxVQUFNUSxTQUFTUixnQkFBZixDQWpCZ0IsQ0FpQmtCOztBQUVsQyxhQUFPUSxNQUFQO0FBQ0Q7OztxQ0FFZ0JSLGdCLEVBQWtCO0FBQUVWLG9CQUFjbUIsUUFBZCxDQUF1QlQsZ0JBQXZCO0FBQTJDOzs7dUNBRTdEQSxnQixFQUFrQjtBQUFFVCx1QkFBaUJrQixRQUFqQixDQUEwQlQsZ0JBQTFCO0FBQThDOzs7dUNBRWxFQSxnQixFQUFrQjtBQUFFSixvQ0FBOEJhLFFBQTlCLENBQXVDVCxnQkFBdkM7QUFBMkQ7OzsyQ0FFM0VBLGdCLEVBQWtCO0FBQUVQLDBCQUFvQmdCLFFBQXBCLENBQTZCVCxnQkFBN0I7QUFBaUQ7OzsrQ0FFakVBLGdCLEVBQWtCO0FBQUVSLHdCQUFrQmlCLFFBQWxCLENBQTJCVCxnQkFBM0IsRUFBNkMsS0FBS0YsS0FBbEQ7QUFBMEQ7OzsrQ0FFOUVFLGdCLEVBQWtCO0FBQUVMLDhCQUF3QmMsUUFBeEIsQ0FBaUNULGdCQUFqQztBQUFxRDs7O29EQUVwRUEsZ0IsRUFBa0I7QUFBRU4sNEJBQXNCZ0IsVUFBdEIsQ0FBaUNWLGdCQUFqQztBQUFxRDs7O2dDQUV0RlcsSyxFQUFPO0FBQ2xCLFVBQUVDLE9BQUYsR0FBY0QsS0FBZCxDQUFFQyxPQUFGO0FBQUEsVUFDQWQsS0FEQSxHQUNRVixNQUFNeUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FEUjtBQUFBLFVBRUFFLEtBRkEsR0FFUSxJQUFJSCxLQUFKLENBQVViLEtBQVYsQ0FGUjs7O0FBSU4sYUFBT2dCLEtBQVA7QUFDRDs7O2dDQUVrQkgsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWQsUUFBUVYsTUFBTXlCLFdBQU4sQ0FBa0JELE9BQWxCLENBQWQ7QUFBQSxVQUNNRSxRQUFRLElBQUlILEtBQUosQ0FBVWIsS0FBVixDQURkOztBQUdBLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9taWRkbGVPZkNvbW1lbnQnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvZW5kT2ZMaW5lL25vblNpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF07IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29tbWVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5yZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVdoaXRlc3BhY2UodG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZVNpZ25pZmljYW50Q29udGVudCh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29tbWVudHModG9rZW5zT3JDb250ZW50cykgeyBDb21tZW50VG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlV2hpdGVzcGFjZSh0b2tlbnNPckNvbnRlbnRzKSB7IFdoaXRlc3BhY2VUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKHRva2Vuc09yQ29udGVudHMpIHsgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKSB7IFN0cmluZ0xpdGVyYWxUb2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgdG9rZW5pc2VTaWduaWZpY2FudENvbnRlbnQodG9rZW5zT3JDb250ZW50cykgeyBTaWduaWZpY2FudFRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzLCB0aGlzLnJ1bGVzKSB9XHJcblxyXG4gIHRva2VuaXNlUmVndWxhckV4cHJlc3Npb25zKHRva2Vuc09yQ29udGVudHMpIHsgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMudG9rZW5pc2UodG9rZW5zT3JDb250ZW50cyk7IH1cclxuXHJcbiAgcmVUb2tlbmlzZU1pZGRsZU9mQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7IE1pZGRsZU9mQ29tbWVudFRva2Vucy5yZVRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==