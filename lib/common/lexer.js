'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    SignificantTokens = require('./tokens/significant'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

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
    key: 'tokensFromContent',
    value: function tokensFromContent(content) {
      var tokensOrContents = [content]; ///

      this.processEndOfLineTokens(tokensOrContents);

      this.processAllBarEndOfLineTokens(tokensOrContents);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'processAllBarEndOfLineTokens',
    value: function processAllBarEndOfLineTokens(tokensOrContents) {
      var inComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      inComment = this.processCommentTokens(tokensOrContents, inComment);

      this.processRegularExpressionTokens(tokensOrContents);

      this.processStringLiteralTokens(tokensOrContents);

      this.processWhitespaceTokens(tokensOrContents);

      this.processSignificantTokens(tokensOrContents);

      return inComment;
    }
  }, {
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents, inComment) {
      inComment = CommentTokens.process(tokensOrContents, inComment);

      return inComment;
    }
  }, {
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {
      RegularExpressionTokens.process(tokensOrContents);
    }
  }, {
    key: 'processStringLiteralTokens',
    value: function processStringLiteralTokens(tokensOrContents) {
      StringLiteralTokens.process(tokensOrContents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3NFbmRPZkxpbmVUb2tlbnMiLCJwcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zIiwidG9rZW5zIiwiaW5Db21tZW50IiwicHJvY2Vzc0NvbW1lbnRUb2tlbnMiLCJwcm9jZXNzUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJwcm9jZXNzU3RyaW5nTGl0ZXJhbFRva2VucyIsInByb2Nlc3NXaGl0ZXNwYWNlVG9rZW5zIiwicHJvY2Vzc1NpZ25pZmljYW50VG9rZW5zIiwicHJvY2VzcyIsIkNsYXNzIiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEscUJBQVIsQ0FGekI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FIMUI7QUFBQSxJQUlNSSxzQkFBc0JKLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNSywwQkFBMEJMLFFBQVEsNEJBQVIsQ0FMaEM7O0lBT01NLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7c0NBRWlCQyxPLEVBQVM7QUFDekIsVUFBTUMsbUJBQW1CLENBQUNELE9BQUQsQ0FBekIsQ0FEeUIsQ0FDVzs7QUFFcEMsV0FBS0Usc0JBQUwsQ0FBNEJELGdCQUE1Qjs7QUFFQSxXQUFLRSw0QkFBTCxDQUFrQ0YsZ0JBQWxDOztBQUVBLFVBQU1HLFNBQVNILGdCQUFmLENBUHlCLENBT1M7O0FBRWxDLGFBQU9HLE1BQVA7QUFDRDs7O2lEQUU0QkgsZ0IsRUFBcUM7QUFBQSxVQUFuQkksU0FBbUIsdUVBQVAsS0FBTzs7QUFDaEVBLGtCQUFZLEtBQUtDLG9CQUFMLENBQTBCTCxnQkFBMUIsRUFBNENJLFNBQTVDLENBQVo7O0FBRUEsV0FBS0UsOEJBQUwsQ0FBb0NOLGdCQUFwQzs7QUFFQSxXQUFLTywwQkFBTCxDQUFnQ1AsZ0JBQWhDOztBQUVBLFdBQUtRLHVCQUFMLENBQTZCUixnQkFBN0I7O0FBRUEsV0FBS1Msd0JBQUwsQ0FBOEJULGdCQUE5Qjs7QUFFQSxhQUFPSSxTQUFQO0FBQ0Q7Ozt5Q0FFb0JKLGdCLEVBQWtCSSxTLEVBQVc7QUFDaERBLGtCQUFZWixjQUFja0IsT0FBZCxDQUFzQlYsZ0JBQXRCLEVBQXdDSSxTQUF4QyxDQUFaOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7O21EQUU4QkosZ0IsRUFBa0I7QUFDL0NKLDhCQUF3QmMsT0FBeEIsQ0FBZ0NWLGdCQUFoQztBQUNEOzs7K0NBRTBCQSxnQixFQUFrQjtBQUMzQ0wsMEJBQW9CZSxPQUFwQixDQUE0QlYsZ0JBQTVCO0FBQ0Q7Ozs0Q0FFdUJBLGdCLEVBQWtCO0FBQ3hDUCx1QkFBaUJpQixPQUFqQixDQUF5QlYsZ0JBQXpCO0FBQ0Q7Ozs2Q0FFd0JBLGdCLEVBQWtCO0FBQ3pDTix3QkFBa0JnQixPQUFsQixDQUEwQlYsZ0JBQTFCLEVBQTRDLEtBQUtGLEtBQWpEO0FBQ0Q7OztnQ0FFa0JhLEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FkLEtBREEsR0FDUVIsTUFBTXVCLFdBQU4sQ0FBa0JELE9BQWxCLENBRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVEsSUFBSUgsS0FBSixDQUFVYixLQUFWLENBRlI7OztBQUlOLGFBQU9nQixLQUFQO0FBQ0Q7OztnQ0FFa0JILEssRUFBT0MsTyxFQUFTO0FBQ2pDLFVBQU1kLFFBQVFSLE1BQU11QixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVViLEtBQVYsQ0FEZDs7QUFHQSxhQUFPZ0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQm5CLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdOyAvLy9cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0FsbEJhckVuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQgPSBmYWxzZSkge1xyXG4gICAgaW5Db21tZW50ID0gdGhpcy5wcm9jZXNzQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NTaWduaWZpY2FudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KSB7XHJcbiAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU3RyaW5nTGl0ZXJhbFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBTdHJpbmdMaXRlcmFsVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzLCB0aGlzLnJ1bGVzKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19