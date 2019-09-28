'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule'),
    tokenUtilities = require('../utilities/token'),
    WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
    RegularExpressionToken = require('../common/token/significant/regularExpression'),
    SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
    EndOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/endOf'),
    EntireMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/entire'),
    EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine'),
    StartOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/middleOf'),
    SinglyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/singlyQuoted'),
    DoublyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/doublyQuoted');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice,
    tokenise = tokenUtilities.tokenise;

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
      var tokensOrContents = this.tokeniseEndOfLines(content);

      this.tokeniseContents(tokensOrContents);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'tokeniseContents',
    value: function tokeniseContents(tokensOrContents) {
      var inComment = false;

      var index = 0,
          tokensOrContentsLength = tokensOrContents.length;

      while (index < tokensOrContentsLength) {
        var tokenOrContent = tokensOrContents[index],
            tokenOrContentString = typeof tokenOrContent === 'string',
            tokenOrContentContent = tokenOrContentString; ///

        if (tokenOrContentContent) {
          var tokens = [],
              content = tokenOrContent; ///

          inComment = this.tokeniseContent(content, tokens, inComment);

          var tokensLength = tokens.length,
              start = index,
              ///
          deleteCount = 1;

          splice(tokensOrContents, start, deleteCount, tokens);

          tokensOrContentsLength += tokensLength - 1;

          index += tokensLength - 1;
        }

        index++;
      }
    }
  }, {
    key: 'tokeniseContent',
    value: function tokeniseContent(content, tokens, inComment) {
      var _this = this;

      while (content !== '') {
        var token = this.matchWhitespace(content) || this.matchMultiLineComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content);

        if (token === null) {
          (function () {
            var significantToken = null;

            _this.rules.some(function (rule) {
              significantToken = rule.match(content);

              if (significantToken !== null) {
                token = significantToken; ///

                return true;
              }
            });
          })();
        }

        if (token === null) {
          throw new Error('The content \'' + content + '\' cannot be tokenised.');
        }

        tokens.push(token);

        var tokenContentLength = token.getContentLength(),
            start = tokenContentLength; ///

        content = content = content.substring(start);

        var tokenCommentToken = token.isCommentToken();

        if (tokenCommentToken) {
          var commentToken = token; ///

          inComment = commentToken.isInComment();
        }
      }

      return inComment;
    }
  }, {
    key: 'matchMultiLineComment',
    value: function matchMultiLineComment(content, inComment) {
      var multiLinCommentToken = inComment ? EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) : EntireMultiLineCommentToken.match(content) || StartOfMultiLineCommentToken.match(content);

      return multiLinCommentToken;
    }
  }, {
    key: 'matchSingleLineComment',
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : SingleLineCommentToken.match(content);

      return singleLineCommentToken;
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return tokenise(content, EndOfLineNonSignificantToken);
    }
  }, {
    key: 'matchWhitespace',
    value: function matchWhitespace(content) {
      return WhitespaceToken.match(content);
    }
  }, {
    key: 'matchRegularExpression',
    value: function matchRegularExpression(content) {
      return RegularExpressionToken.match(content);
    }
  }, {
    key: 'matchSinglyQuotedStringLiteral',
    value: function matchSinglyQuotedStringLiteral(content) {
      return SinglyQuotedStringLiteralToken.match(content);
    }
  }, {
    key: 'matchDoublyQuotedStringLiteral',
    value: function matchDoublyQuotedStringLiteral(content) {
      return DoublyQuotedStringLiteralToken.match(content);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(Class) {
      var entries = Class.entries,
          rules = entries.map(function (entry) {
        return Rule.fromEntry(entry);
      }),
          lexer = new Class(rules);


      return lexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(Class, entries) {
      var rules = entries.map(function (entry) {
        return Rule.fromEntry(entry);
      }),
          lexer = new Class(rules);

      return lexer;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJ0b2tlblV0aWxpdGllcyIsIldoaXRlc3BhY2VUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiYXJyYXlVdGlsaXRpZXMiLCJzcGxpY2UiLCJ0b2tlbmlzZSIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJpbkNvbW1lbnQiLCJpbmRleCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbk9yQ29udGVudCIsInRva2VuT3JDb250ZW50U3RyaW5nIiwidG9rZW5PckNvbnRlbnRDb250ZW50IiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJtYXRjaCIsIkVycm9yIiwicHVzaCIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdWJzdHJpbmciLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiaXNJbkNvbW1lbnQiLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsImZyb21FbnRyeSIsImxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1HLGtCQUFrQkgsUUFBUSwyQ0FBUixDQUZ4QjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSwrQ0FBUixDQUgvQjtBQUFBLElBSU1LLHlCQUF5QkwsUUFBUSxtREFBUixDQUovQjtBQUFBLElBS01NLDZCQUE2Qk4sUUFBUSx3REFBUixDQUxuQztBQUFBLElBTU1PLDhCQUE4QlAsUUFBUSx5REFBUixDQU5wQztBQUFBLElBT01RLCtCQUErQlIsUUFBUSwwQ0FBUixDQVByQztBQUFBLElBUU1TLCtCQUErQlQsUUFBUSwwREFBUixDQVJyQztBQUFBLElBU01VLGdDQUFnQ1YsUUFBUSwyREFBUixDQVR0QztBQUFBLElBVU1XLGlDQUFpQ1gsUUFBUSx3REFBUixDQVZ2QztBQUFBLElBV01ZLGlDQUFpQ1osUUFBUSx3REFBUixDQVh2Qzs7QUFhTSxJQUFFYSxjQUFGLEdBQXFCZCxTQUFyQixDQUFFYyxjQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxjQURiLENBQ0VDLE1BREY7QUFBQSxJQUVFQyxRQUZGLEdBRWViLGNBRmYsQ0FFRWEsUUFGRjs7SUFJQUMsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FB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TCxLQUFKLENBQVV2QyxLQUFWLENBRlI7OztBQUlOLGFBQU80QyxLQUFQO0FBQ0Q7OztnQ0FFa0JMLEssRUFBT0MsTyxFQUFTO0FBQ2pDLFVBQU14QyxRQUFRd0MsUUFBUUMsR0FBUixDQUFZLFVBQUNDLEtBQUQ7QUFBQSxlQUFXMUQsS0FBSzJELFNBQUwsQ0FBZUQsS0FBZixDQUFYO0FBQUEsT0FBWixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJTCxLQUFKLENBQVV2QyxLQUFWLENBRGQ7O0FBR0EsYUFBTzRDLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIvQyxXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxyXG4gICAgICB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbicpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3JlZ3VsYXJFeHByZXNzaW9uJyksXHJcbiAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lJyksXHJcbiAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mJyksXHJcbiAgICAgIEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbnRpcmUnKSxcclxuICAgICAgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmUnKSxcclxuICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mJyksXHJcbiAgICAgIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mJyksXHJcbiAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZCcpLFxyXG4gICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQnKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzLFxyXG4gICAgICB7IHRva2VuaXNlIH0gPSB0b2tlblV0aWxpdGllcztcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJyksXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9IHRva2VuT3JDb250ZW50U3RyaW5nOyAvLy9cclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSB0aGlzLnRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgdG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaFdoaXRlc3BhY2UoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gdG9rZW5pc2UoY29udGVudCwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19