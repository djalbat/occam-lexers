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
    value: function processAllBarEndOfLineTokens(tokensOrContents, commentType) {
      commentType = this.processCommentTokens(tokensOrContents, commentType);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTaWduaWZpY2FudFRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3NFbmRPZkxpbmVUb2tlbnMiLCJwcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zIiwidG9rZW5zIiwiY29tbWVudFR5cGUiLCJwcm9jZXNzQ29tbWVudFRva2VucyIsInByb2Nlc3NSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsInByb2Nlc3NTdHJpbmdMaXRlcmFsVG9rZW5zIiwicHJvY2Vzc1doaXRlc3BhY2VUb2tlbnMiLCJwcm9jZXNzU2lnbmlmaWNhbnRUb2tlbnMiLCJwcm9jZXNzIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSx3QkFBUixDQUo1QjtBQUFBLElBS01LLDBCQUEwQkwsUUFBUSw0QkFBUixDQUxoQzs7SUFPTU0sVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OztzQ0FFaUJDLE8sRUFBUztBQUN6QixVQUFNQyxtQkFBbUIsQ0FBQ0QsT0FBRCxDQUF6QixDQUR5QixDQUNXOztBQUVwQyxXQUFLRSxzQkFBTCxDQUE0QkQsZ0JBQTVCOztBQUVBLFdBQUtFLDRCQUFMLENBQWtDRixnQkFBbEM7O0FBRUEsVUFBTUcsU0FBU0gsZ0JBQWYsQ0FQeUIsQ0FPUzs7QUFFbEMsYUFBT0csTUFBUDtBQUNEOzs7aURBRTRCSCxnQixFQUFrQkksVyxFQUFhO0FBQzFEQSxvQkFBYyxLQUFLQyxvQkFBTCxDQUEwQkwsZ0JBQTFCLEVBQTRDSSxXQUE1QyxDQUFkOztBQUVBLFdBQUtFLDhCQUFMLENBQW9DTixnQkFBcEM7O0FBRUEsV0FBS08sMEJBQUwsQ0FBZ0NQLGdCQUFoQzs7QUFFQSxXQUFLUSx1QkFBTCxDQUE2QlIsZ0JBQTdCOztBQUVBLFdBQUtTLHdCQUFMLENBQThCVCxnQkFBOUI7O0FBRUEsYUFBT0ksV0FBUDtBQUNEOzs7eUNBRW9CSixnQixFQUFzQztBQUFBLFVBQXBCSSxXQUFvQix1RUFBTixJQUFNOztBQUN6REEsb0JBQWNaLGNBQWNrQixPQUFkLENBQXNCVixnQkFBdEIsRUFBd0NJLFdBQXhDLENBQWQ7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7bURBRThCSixnQixFQUFrQjtBQUMvQ0osOEJBQXdCYyxPQUF4QixDQUFnQ1YsZ0JBQWhDO0FBQ0Q7OzsrQ0FFMEJBLGdCLEVBQWtCO0FBQzNDTCwwQkFBb0JlLE9BQXBCLENBQTRCVixnQkFBNUI7QUFDRDs7OzRDQUV1QkEsZ0IsRUFBa0I7QUFDeENQLHVCQUFpQmlCLE9BQWpCLENBQXlCVixnQkFBekI7QUFDRDs7OzZDQUV3QkEsZ0IsRUFBa0I7QUFDekNOLHdCQUFrQmdCLE9BQWxCLENBQTBCVixnQkFBMUIsRUFBNEMsS0FBS0YsS0FBakQ7QUFDRDs7O2dDQUVrQmEsSyxFQUFPO0FBQ2xCLFVBQUVDLE9BQUYsR0FBY0QsS0FBZCxDQUFFQyxPQUFGO0FBQUEsVUFDQWQsS0FEQSxHQUNRUixNQUFNdUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FEUjtBQUFBLFVBRUFFLEtBRkEsR0FFUSxJQUFJSCxLQUFKLENBQVViLEtBQVYsQ0FGUjs7O0FBSU4sYUFBT2dCLEtBQVA7QUFDRDs7O2dDQUVrQkgsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWQsUUFBUVIsTUFBTXVCLFdBQU4sQ0FBa0JELE9BQWxCLENBQWQ7QUFBQSxVQUNNRSxRQUFRLElBQUlILEtBQUosQ0FBVWIsS0FBVixDQURkOztBQUdBLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF07IC8vL1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0VuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NBbGxCYXJFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQWxsQmFyRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKSB7XHJcbiAgICBjb21tZW50VHlwZSA9IHRoaXMucHJvY2Vzc0NvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cywgY29tbWVudFR5cGUpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc1N0cmluZ0xpdGVyYWxUb2tlbnModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzV2hpdGVzcGFjZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NTaWduaWZpY2FudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudFR5cGU7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBjb21tZW50VHlwZSA9IG51bGwpIHtcclxuICAgIGNvbW1lbnRUeXBlID0gQ29tbWVudFRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMsIGNvbW1lbnRUeXBlKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudFR5cGU7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzUmVndWxhckV4cHJlc3Npb25Ub2tlbnModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTdHJpbmdMaXRlcmFsVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NXaGl0ZXNwYWNlVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIFdoaXRlc3BhY2VUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTaWduaWZpY2FudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBTaWduaWZpY2FudFRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMsIHRoaXMucnVsZXMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=