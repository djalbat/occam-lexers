'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    SignificantTokens = require('./tokens/significant'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    MiddleOfCommentTokens = require('./tokens/middleOfComment'),
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
    value: function processAllBarEndOfLineTokens(tokensOrContents, commentType) {
      commentType = this.processCommentTokens(tokensOrContents, commentType);

      this.postProcessMiddleOfCommentTokens(tokensOrContents);

      this.processRegularExpressionTokens(tokensOrContents);

      this.processStringLiteralTokens(tokensOrContents);

      this.processWhitespaceTokens(tokensOrContents);

      this.processSignificantTokens(tokensOrContents);

      return commentType;
    }
  }, {
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents) {
      var commentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      commentType = CommentTokens.process(tokensOrContents, commentType);

      return commentType;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJNaWRkbGVPZkNvbW1lbnRUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3NFbmRPZkxpbmVUb2tlbnMiLCJwcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zIiwidG9rZW5zIiwiY29tbWVudFR5cGUiLCJwcm9jZXNzQ29tbWVudFRva2VucyIsInBvc3RQcm9jZXNzTWlkZGxlT2ZDb21tZW50VG9rZW5zIiwicHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwicHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnMiLCJwcm9jZXNzV2hpdGVzcGFjZVRva2VucyIsInByb2Nlc3NTaWduaWZpY2FudFRva2VucyIsInByb2Nlc3MiLCJwb3N0UHJvY2VzcyIsIkNsYXNzIiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEscUJBQVIsQ0FGekI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FIMUI7QUFBQSxJQUlNSSxzQkFBc0JKLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNSyx3QkFBd0JMLFFBQVEsMEJBQVIsQ0FMOUI7QUFBQSxJQU1NTSwwQkFBMEJOLFFBQVEsNEJBQVIsQ0FOaEM7O0lBUU1PLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7c0NBRWlCQyxPLEVBQVM7QUFDekIsVUFBTUMsbUJBQW1CLENBQUNELE9BQUQsQ0FBekIsQ0FEeUIsQ0FDVzs7QUFFcEMsV0FBS0Usc0JBQUwsQ0FBNEJELGdCQUE1Qjs7QUFFQSxXQUFLRSw0QkFBTCxDQUFrQ0YsZ0JBQWxDOztBQUVBLFVBQU1HLFNBQVNILGdCQUFmLENBUHlCLENBT1M7O0FBRWxDLGFBQU9HLE1BQVA7QUFDRDs7O2lEQUU0QkgsZ0IsRUFBa0JJLFcsRUFBYTtBQUMxREEsb0JBQWMsS0FBS0Msb0JBQUwsQ0FBMEJMLGdCQUExQixFQUE0Q0ksV0FBNUMsQ0FBZDs7QUFFQSxXQUFLRSxnQ0FBTCxDQUFzQ04sZ0JBQXRDOztBQUVBLFdBQUtPLDhCQUFMLENBQW9DUCxnQkFBcEM7O0FBRUEsV0FBS1EsMEJBQUwsQ0FBZ0NSLGdCQUFoQzs7QUFFQSxXQUFLUyx1QkFBTCxDQUE2QlQsZ0JBQTdCOztBQUVBLFdBQUtVLHdCQUFMLENBQThCVixnQkFBOUI7O0FBRUEsYUFBT0ksV0FBUDtBQUNEOzs7eUNBRW9CSixnQixFQUFzQztBQUFBLFVBQXBCSSxXQUFvQix1RUFBTixJQUFNOztBQUN6REEsb0JBQWNiLGNBQWNvQixPQUFkLENBQXNCWCxnQkFBdEIsRUFBd0NJLFdBQXhDLENBQWQ7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7cURBRWdDSixnQixFQUFrQjtBQUNqREwsNEJBQXNCaUIsV0FBdEIsQ0FBa0NaLGdCQUFsQztBQUNEOzs7bURBRThCQSxnQixFQUFrQjtBQUMvQ0osOEJBQXdCZSxPQUF4QixDQUFnQ1gsZ0JBQWhDO0FBQ0Q7OzsrQ0FFMEJBLGdCLEVBQWtCO0FBQzNDTiwwQkFBb0JpQixPQUFwQixDQUE0QlgsZ0JBQTVCO0FBQ0Q7Ozs0Q0FFdUJBLGdCLEVBQWtCO0FBQ3hDUix1QkFBaUJtQixPQUFqQixDQUF5QlgsZ0JBQXpCO0FBQ0Q7Ozs2Q0FFd0JBLGdCLEVBQWtCO0FBQ3pDUCx3QkFBa0JrQixPQUFsQixDQUEwQlgsZ0JBQTFCLEVBQTRDLEtBQUtGLEtBQWpEO0FBQ0Q7OztnQ0FFa0JlLEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FoQixLQURBLEdBQ1FULE1BQU0wQixXQUFOLENBQWtCRCxPQUFsQixDQURSO0FBQUEsVUFFQUUsS0FGQSxHQUVRLElBQUlILEtBQUosQ0FBVWYsS0FBVixDQUZSOzs7QUFJTixhQUFPa0IsS0FBUDtBQUNEOzs7Z0NBRWtCSCxLLEVBQU9DLE8sRUFBUztBQUNqQyxVQUFNaEIsUUFBUVQsTUFBTTBCLFdBQU4sQ0FBa0JELE9BQWxCLENBQWQ7QUFBQSxVQUNNRSxRQUFRLElBQUlILEtBQUosQ0FBVWYsS0FBVixDQURkOztBQUdBLGFBQU9rQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9taWRkbGVPZkNvbW1lbnQnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdOyAvLy9cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0FsbEJhckVuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSkge1xyXG4gICAgY29tbWVudFR5cGUgPSB0aGlzLnByb2Nlc3NDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICB0aGlzLnBvc3RQcm9jZXNzTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NTaWduaWZpY2FudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudFR5cGU7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSA9IG51bGwpIHtcclxuICAgIGNvbW1lbnRUeXBlID0gQ29tbWVudFRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudFR5cGU7XHJcbiAgfVxyXG5cclxuICBwb3N0UHJvY2Vzc01pZGRsZU9mQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbnMucG9zdFByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzUmVndWxhckV4cHJlc3Npb25Ub2tlbnModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTdHJpbmdMaXRlcmFsVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NXaGl0ZXNwYWNlVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIFdoaXRlc3BhY2VUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTaWduaWZpY2FudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBTaWduaWZpY2FudFRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMsIHRoaXMucnVsZXMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=