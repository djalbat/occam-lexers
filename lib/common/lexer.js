'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule'),
    Rules = require('./rules'),
    Configuration = require('./configuration'),
    SignificantTokens = require('./tokens/significant');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;

var CommonLexer = function () {
  function CommonLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.EndOfLineTokens = EndOfLineTokens;
    this.CommentTokens = CommentTokens;
    this.WhitespaceTokens = WhitespaceTokens;
    this.StringLiteralTokens = StringLiteralTokens;
    this.RegularExpressionTokens = RegularExpressionTokens;
  }

  _createClass(CommonLexer, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'tokensFromContent',
    value: function tokensFromContent(content) {
      var previousTokenCommentToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nextTokenCommentToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var minimumContentLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;

      var configuration = new Configuration(previousTokenCommentToken, nextTokenCommentToken, minimumContentLength),
          tokens = this.tokensFromContentAndConfiguration(content, configuration);

      return tokens;
    }
  }, {
    key: 'tokensFromContentAndConfiguration',
    value: function tokensFromContentAndConfiguration(content, configuration) {
      var tokensOrContents = [content],
          ///
      previousTokenCommentToken = configuration.isPreviousTokenCommentToken();

      this.EndOfLineTokens.pass(tokensOrContents);

      var index = 0,
          inComment = previousTokenCommentToken,
          ///
      contentLength = 0,
          tokensOrContentsLength = tokensOrContents.length;

      while (index < tokensOrContentsLength) {
        var tokenOrContent = tokensOrContents[index],
            tokenOrContentContent = typeof tokenOrContent === 'string';

        if (tokenOrContentContent) {
          var _content = tokenOrContent,
              ///
          nonEndOfLineTokensOrContent = [_content];

          inComment = this.nonEndOfLineTokensFromContent(nonEndOfLineTokensOrContent, inComment);

          var nonEndOfLineTokens = nonEndOfLineTokensOrContent,
              ///
          terminate = configuration.shouldTerminate(contentLength, nonEndOfLineTokens),
              start = index,
              ///
          deleteCount = 1,
              nonEndOfLineTokensLength = nonEndOfLineTokens.length;

          splice(tokensOrContents, start, deleteCount, nonEndOfLineTokens);

          tokensOrContentsLength -= 1;

          tokensOrContentsLength += nonEndOfLineTokensLength;

          index += nonEndOfLineTokensLength;

          if (terminate) {
            var _start = index; ///

            splice(tokensOrContents, _start);

            break;
          } else {
            var nonEndOfLineTokensContentsLength = nonEndOfLineTokens.reduce(function (nonEndOfLineTokensContentsLength, nonEndOfLineToken) {
              var nonEndOfLineTokensContentLength = nonEndOfLineToken.getContentLength();

              nonEndOfLineTokensContentsLength += nonEndOfLineTokensContentLength;

              return nonEndOfLineTokensContentsLength;
            }, 0);

            contentLength += nonEndOfLineTokensContentsLength;
          }
        } else {
          var endOfLineToken = tokenOrContent,
              ///
          endOfLineTokens = [endOfLineToken],
              _terminate = configuration.shouldTerminate(contentLength, endOfLineTokens);

          index += 1;

          if (_terminate) {
            var _start2 = index; ///

            splice(tokensOrContents, _start2);

            break;
          } else {
            var endOfLineTokenContentLength = endOfLineToken.getContentLength();

            contentLength += endOfLineTokenContentLength;
          }
        }
      }

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'nonEndOfLineTokensFromContent',
    value: function nonEndOfLineTokensFromContent(nonEndOfLineTokensOrContent, inComment) {
      var tokensOrContents = nonEndOfLineTokensOrContent; ///

      inComment = this.CommentTokens.pass(tokensOrContents, inComment);

      this.RegularExpressionTokens.pass(tokensOrContents);

      this.StringLiteralTokens.pass(tokensOrContents);

      this.WhitespaceTokens.pass(tokensOrContents);

      SignificantTokens.pass(tokensOrContents, this.rules);

      return inComment;
    }
  }], [{
    key: 'ruleFromEntry',
    value: function ruleFromEntry(entry) {
      return Rule.fromEntry(entry);
    }
  }, {
    key: 'rulesFromEntries',
    value: function rulesFromEntries(entries) {
      return Rules.fromEntries(entries);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJSdWxlcyIsIkNvbmZpZ3VyYXRpb24iLCJTaWduaWZpY2FudFRva2VucyIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsIkVuZE9mTGluZVRva2VucyIsIkNvbW1lbnRUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiY29udGVudCIsInByZXZpb3VzVG9rZW5Db21tZW50VG9rZW4iLCJuZXh0VG9rZW5Db21tZW50VG9rZW4iLCJtaW5pbXVtQ29udGVudExlbmd0aCIsIkluZmluaXR5IiwiY29uZmlndXJhdGlvbiIsInRva2VucyIsInRva2Vuc0Zyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsInRva2Vuc09yQ29udGVudHMiLCJpc1ByZXZpb3VzVG9rZW5Db21tZW50VG9rZW4iLCJwYXNzIiwiaW5kZXgiLCJpbkNvbW1lbnQiLCJjb250ZW50TGVuZ3RoIiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRDb250ZW50Iiwibm9uRW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50Iiwibm9uRW5kT2ZMaW5lVG9rZW5zRnJvbUNvbnRlbnQiLCJub25FbmRPZkxpbmVUb2tlbnMiLCJ0ZXJtaW5hdGUiLCJzaG91bGRUZXJtaW5hdGUiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwibm9uRW5kT2ZMaW5lVG9rZW5zTGVuZ3RoIiwibm9uRW5kT2ZMaW5lVG9rZW5zQ29udGVudHNMZW5ndGgiLCJyZWR1Y2UiLCJub25FbmRPZkxpbmVUb2tlbiIsIm5vbkVuZE9mTGluZVRva2Vuc0NvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwiZW5kT2ZMaW5lVG9rZW4iLCJlbmRPZkxpbmVUb2tlbnMiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJlbnRyeSIsImZyb21FbnRyeSIsImVudHJpZXMiLCJmcm9tRW50cmllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxRQUFRRixRQUFRLFNBQVIsQ0FEZDtBQUFBLElBRU1HLGdCQUFnQkgsUUFBUSxpQkFBUixDQUZ0QjtBQUFBLElBR01JLG9CQUFvQkosUUFBUSxzQkFBUixDQUgxQjs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixTQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxjQURiLENBQ0VDLE1BREY7O0lBR0FDLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkMsZUFBbkIsRUFBb0NDLGFBQXBDLEVBQW1EQyxnQkFBbkQsRUFBcUVDLG1CQUFyRSxFQUEwRkMsdUJBQTFGLEVBQW1IO0FBQUE7O0FBQ2pILFNBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkJBLG1CQUEzQjtBQUNBLFNBQUtDLHVCQUFMLEdBQStCQSx1QkFBL0I7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0wsS0FBWjtBQUNEOzs7c0NBRWlCTSxPLEVBQTRHO0FBQUEsVUFBbkdDLHlCQUFtRyx1RUFBdkUsS0FBdUU7QUFBQSxVQUFoRUMscUJBQWdFLHVFQUF4QyxLQUF3QztBQUFBLFVBQWpDQyxvQkFBaUMsdUVBQVZDLFFBQVU7O0FBQzVILFVBQU1DLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQlkseUJBQWxCLEVBQTZDQyxxQkFBN0MsRUFBb0VDLG9CQUFwRSxD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Yix1QkFBTCxDQUE2QlcsSUFBN0IsQ0FBa0NGLGdCQUFsQzs7QUFFQSxXQUFLVixtQkFBTCxDQUF5QlksSUFBekIsQ0FBOEJGLGdCQUE5Qjs7QUFFQSxXQUFLWCxnQkFBTCxDQUFzQmEsSUFBdEIsQ0FBMkJGLGdCQUEzQjs7QUFFQWxCLHdCQUFrQm9CLElBQWxCLENBQXVCRixnQkFBdkIsRUFBeUMsS0FBS2QsS0FBOUM7O0FBRUEsYUFBT2tCLFNBQVA7QUFDRDs7O2tDQUVvQnNCLEssRUFBTztBQUFFLGFBQU8vQyxLQUFLZ0QsU0FBTCxDQUFlRCxLQUFmLENBQVA7QUFBK0I7OztxQ0FFckNFLE8sRUFBUztBQUFFLGFBQU9oRCxNQUFNaUQsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7Ozs7O0FBR3pFRSxPQUFPQyxPQUFQLEdBQWlCOUMsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEVuZE9mTGluZVRva2VucywgQ29tbWVudFRva2VucywgV2hpdGVzcGFjZVRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuRW5kT2ZMaW5lVG9rZW5zID0gRW5kT2ZMaW5lVG9rZW5zO1xyXG4gICAgdGhpcy5Db21tZW50VG9rZW5zID0gQ29tbWVudFRva2VucztcclxuICAgIHRoaXMuV2hpdGVzcGFjZVRva2VucyA9IFdoaXRlc3BhY2VUb2tlbnM7XHJcbiAgICB0aGlzLlN0cmluZ0xpdGVyYWxUb2tlbnMgPSBTdHJpbmdMaXRlcmFsVG9rZW5zO1xyXG4gICAgdGhpcy5SZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgcHJldmlvdXNUb2tlbkNvbW1lbnRUb2tlbiA9IGZhbHNlLCBuZXh0VG9rZW5Db21tZW50VG9rZW4gPSBmYWxzZSwgbWluaW11bUNvbnRlbnRMZW5ndGggPSBJbmZpbml0eSkge1xyXG4gICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHByZXZpb3VzVG9rZW5Db21tZW50VG9rZW4sIG5leHRUb2tlbkNvbW1lbnRUb2tlbiwgbWluaW11bUNvbnRlbnRMZW5ndGgpLFxyXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNUb2tlbkNvbW1lbnRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uaXNQcmV2aW91c1Rva2VuQ29tbWVudFRva2VuKCk7XHJcblxyXG4gICAgdGhpcy5FbmRPZkxpbmVUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIGluQ29tbWVudCA9IHByZXZpb3VzVG9rZW5Db21tZW50VG9rZW4sIC8vL1xyXG4gICAgICAgIGNvbnRlbnRMZW5ndGggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKTtcclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsIC8vL1xyXG4gICAgICAgICAgICAgIG5vbkVuZE9mTGluZVRva2Vuc09yQ29udGVudCA9IFtjb250ZW50XTtcclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy5ub25FbmRPZkxpbmVUb2tlbnNGcm9tQ29udGVudChub25FbmRPZkxpbmVUb2tlbnNPckNvbnRlbnQsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vbkVuZE9mTGluZVRva2VucyA9IG5vbkVuZE9mTGluZVRva2Vuc09yQ29udGVudCwgLy8vXHJcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gY29uZmlndXJhdGlvbi5zaG91bGRUZXJtaW5hdGUoY29udGVudExlbmd0aCwgbm9uRW5kT2ZMaW5lVG9rZW5zKSxcclxuICAgICAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXHJcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxyXG4gICAgICAgICAgICAgIG5vbkVuZE9mTGluZVRva2Vuc0xlbmd0aCA9IG5vbkVuZE9mTGluZVRva2Vucy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIG5vbkVuZE9mTGluZVRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggLT0gMTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSBub25FbmRPZkxpbmVUb2tlbnNMZW5ndGg7XHJcblxyXG4gICAgICAgIGluZGV4ICs9IG5vbkVuZE9mTGluZVRva2Vuc0xlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDsgIC8vL1xyXG5cclxuICAgICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG5vbkVuZE9mTGluZVRva2Vuc0NvbnRlbnRzTGVuZ3RoID0gbm9uRW5kT2ZMaW5lVG9rZW5zLnJlZHVjZShmdW5jdGlvbihub25FbmRPZkxpbmVUb2tlbnNDb250ZW50c0xlbmd0aCwgbm9uRW5kT2ZMaW5lVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9uRW5kT2ZMaW5lVG9rZW5zQ29udGVudExlbmd0aCA9IG5vbkVuZE9mTGluZVRva2VuLmdldENvbnRlbnRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICAgIG5vbkVuZE9mTGluZVRva2Vuc0NvbnRlbnRzTGVuZ3RoICs9IG5vbkVuZE9mTGluZVRva2Vuc0NvbnRlbnRMZW5ndGg7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9uRW5kT2ZMaW5lVG9rZW5zQ29udGVudHNMZW5ndGg7XHJcbiAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoICs9IG5vbkVuZE9mTGluZVRva2Vuc0NvbnRlbnRzTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5zID0gW2VuZE9mTGluZVRva2VuXSxcclxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSBjb25maWd1cmF0aW9uLnNob3VsZFRlcm1pbmF0ZShjb250ZW50TGVuZ3RoLCBlbmRPZkxpbmVUb2tlbnMpO1xyXG5cclxuICAgICAgICBpbmRleCArPSAxO1xyXG5cclxuICAgICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4OyAgLy8vXHJcblxyXG4gICAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0KTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggKz0gZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgbm9uRW5kT2ZMaW5lVG9rZW5zRnJvbUNvbnRlbnQobm9uRW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSBub25FbmRPZkxpbmVUb2tlbnNPckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgIGluQ29tbWVudCA9IHRoaXMuQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgdGhpcy5SZWd1bGFyRXhwcmVzc2lvblRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMuU3RyaW5nTGl0ZXJhbFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIHRoaXMuV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVGcm9tRW50cnkoZW50cnkpIHsgcmV0dXJuIFJ1bGUuZnJvbUVudHJ5KGVudHJ5KTsgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==