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
      var inComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var tokensOrContents = [content]; ///

      this.processEndOfLineTokens(tokensOrContents);

      this.processAllBarEndOfLineTokens(tokensOrContents, inComment);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {}
  }, {
    key: 'processAllBarEndOfLineTokens',
    value: function processAllBarEndOfLineTokens(tokensOrContents, inComment) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwiaW5Db21tZW50IiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3NFbmRPZkxpbmVUb2tlbnMiLCJwcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zIiwidG9rZW5zIiwicHJvY2Vzc0NvbW1lbnRUb2tlbnMiLCJwcm9jZXNzUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJwcm9jZXNzU3RyaW5nTGl0ZXJhbFRva2VucyIsInByb2Nlc3NXaGl0ZXNwYWNlVG9rZW5zIiwicHJvY2Vzc1NpZ25pZmljYW50VG9rZW5zIiwicHJvY2VzcyIsIkNsYXNzIiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEscUJBQVIsQ0FGekI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FIMUI7QUFBQSxJQUlNSSxzQkFBc0JKLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNSywwQkFBMEJMLFFBQVEsNEJBQVIsQ0FMaEM7O0lBT01NLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7c0NBRWlCQyxPLEVBQTRCO0FBQUEsVUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQzVDLFVBQU1DLG1CQUFtQixDQUFDRixPQUFELENBQXpCLENBRDRDLENBQ1I7O0FBRXBDLFdBQUtHLHNCQUFMLENBQTRCRCxnQkFBNUI7O0FBRUEsV0FBS0UsNEJBQUwsQ0FBa0NGLGdCQUFsQyxFQUFvREQsU0FBcEQ7O0FBRUEsVUFBTUksU0FBU0gsZ0JBQWYsQ0FQNEMsQ0FPVjs7QUFFbEMsYUFBT0csTUFBUDtBQUNEOzs7MkNBRXNCSCxnQixFQUFrQixDQUFFOzs7aURBRWRBLGdCLEVBQWtCRCxTLEVBQVc7QUFDeERBLGtCQUFZLEtBQUtLLG9CQUFMLENBQTBCSixnQkFBMUIsRUFBNENELFNBQTVDLENBQVo7O0FBRUEsV0FBS00sOEJBQUwsQ0FBb0NMLGdCQUFwQzs7QUFFQSxXQUFLTSwwQkFBTCxDQUFnQ04sZ0JBQWhDOztBQUVBLFdBQUtPLHVCQUFMLENBQTZCUCxnQkFBN0I7O0FBRUEsV0FBS1Esd0JBQUwsQ0FBOEJSLGdCQUE5Qjs7QUFFQSxhQUFPRCxTQUFQO0FBQ0Q7Ozt5Q0FFb0JDLGdCLEVBQWtCRCxTLEVBQVc7QUFDaERBLGtCQUFZUixjQUFja0IsT0FBZCxDQUFzQlQsZ0JBQXRCLEVBQXdDRCxTQUF4QyxDQUFaOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7O21EQUU4QkMsZ0IsRUFBa0I7QUFDL0NMLDhCQUF3QmMsT0FBeEIsQ0FBZ0NULGdCQUFoQztBQUNEOzs7K0NBRTBCQSxnQixFQUFrQjtBQUMzQ04sMEJBQW9CZSxPQUFwQixDQUE0QlQsZ0JBQTVCO0FBQ0Q7Ozs0Q0FFdUJBLGdCLEVBQWtCO0FBQ3hDUix1QkFBaUJpQixPQUFqQixDQUF5QlQsZ0JBQXpCO0FBQ0Q7Ozs2Q0FFd0JBLGdCLEVBQWtCO0FBQ3pDUCx3QkFBa0JnQixPQUFsQixDQUEwQlQsZ0JBQTFCLEVBQTRDLEtBQUtILEtBQWpEO0FBQ0Q7OztnQ0FFa0JhLEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FkLEtBREEsR0FDUVIsTUFBTXVCLFdBQU4sQ0FBa0JELE9BQWxCLENBRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVEsSUFBSUgsS0FBSixDQUFVYixLQUFWLENBRlI7OztBQUlOLGFBQU9nQixLQUFQO0FBQ0Q7OztnQ0FFa0JILEssRUFBT0MsTyxFQUFTO0FBQ2pDLFVBQU1kLFFBQVFSLE1BQU11QixXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVViLEtBQVYsQ0FEZDs7QUFHQSxhQUFPZ0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQm5CLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50LCBpbkNvbW1lbnQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50cyA9IFtjb250ZW50XTsgLy8vXHJcblxyXG4gICAgdGhpcy5wcm9jZXNzRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0FsbEJhckVuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0VuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBwcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGluQ29tbWVudCkge1xyXG4gICAgaW5Db21tZW50ID0gdGhpcy5wcm9jZXNzQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NTaWduaWZpY2FudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KSB7XHJcbiAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU3RyaW5nTGl0ZXJhbFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBTdHJpbmdMaXRlcmFsVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzLCB0aGlzLnJ1bGVzKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19