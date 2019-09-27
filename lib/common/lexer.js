'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rules = require('./rules'),
    WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
    RegularExpressionToken = require('../common/token/significant/regularExpression'),
    SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
    EndOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/endOf'),
    EntireMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/entire'),
    StartOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/middleOf'),
    SinglyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/singlyQuoted'),
    DoublyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/doublyQuoted');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;

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
      while (content !== '') {
        var token = this.matchWhitespace(content) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content) || this.matchMultiLineComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchRules(content);

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
    key: 'matchRules',
    value: function matchRules(content) {
      var significantToken = null;

      this.rules.some(function (rule) {
        significantToken = rule.match(content);

        if (significantToken !== null) {
          return true;
        }
      });

      return significantToken;
    }
  }, {
    key: 'matchWhitespace',
    value: function matchWhitespace(content) {
      return WhitespaceToken.match(content);
    }
  }, {
    key: 'matchMultiLineComment',
    value: function matchMultiLineComment(content, inComment) {
      var multiLinCommentToken = null;

      if (!inComment) {
        multiLinCommentToken = EntireMultiLineCommentToken.match(content) || StartOfMultiLineCommentToken.match(content);
      } else {
        multiLinCommentToken = EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content);
      }

      return multiLinCommentToken;
    }
  }, {
    key: 'matchSingleLineComment',
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = null;

      if (!inComment) {
        singleLineCommentToken = SingleLineCommentToken.match(content);
      }

      return singleLineCommentToken;
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
    key: 'fromRules',
    value: function fromRules(Class, rules) {
      var lexer = new Class(rules);

      return lexer;
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGVzIiwiV2hpdGVzcGFjZVRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5pc2VDb250ZW50cyIsInRva2VucyIsImluQ29tbWVudCIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRTdHJpbmciLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJ0b2tlbmlzZUNvbnRlbnQiLCJ0b2tlbnNMZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwidG9rZW4iLCJtYXRjaFdoaXRlc3BhY2UiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoUnVsZXMiLCJFcnJvciIsInB1c2giLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3Vic3RyaW5nIiwidG9rZW5Db21tZW50VG9rZW4iLCJpc0NvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImlzSW5Db21tZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwibWF0Y2giLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsImxleGVyIiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSwyQ0FBUixDQUR4QjtBQUFBLElBRU1HLHlCQUF5QkgsUUFBUSwrQ0FBUixDQUYvQjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSxtREFBUixDQUgvQjtBQUFBLElBSU1LLDZCQUE2QkwsUUFBUSx3REFBUixDQUpuQztBQUFBLElBS01NLDhCQUE4Qk4sUUFBUSx5REFBUixDQUxwQztBQUFBLElBTU1PLCtCQUErQlAsUUFBUSwwREFBUixDQU5yQztBQUFBLElBT01RLGdDQUFnQ1IsUUFBUSwyREFBUixDQVB0QztBQUFBLElBUU1TLGlDQUFpQ1QsUUFBUSx3REFBUixDQVJ2QztBQUFBLElBU01VLGlDQUFpQ1YsUUFBUSx3REFBUixDQVR2Qzs7QUFXTSxJQUFFVyxjQUFGLEdBQXFCWixTQUFyQixDQUFFWSxjQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxjQURiLENBQ0VDLE1BREY7O0lBR0FDLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVFDLE8sRUFBUztBQUNoQixVQUFNQyxtQkFBbUIsS0FBS0Msa0JBQUwsQ0FBd0JGLE9BQXhCLENBQXpCOztBQUVBLFdBQUtHLGdCQUFMLENBQXNCRixnQkFB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TXdELFdBQU4sQ0FBa0JELE9BQWxCLENBQWQ7QUFBQSxVQUNNRCxRQUFRLElBQUlELEtBQUosQ0FBVXhDLEtBQVYsQ0FEZDs7QUFHQSxhQUFPeUMsS0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQjlDLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2UnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJyksXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9IHRva2VuT3JDb250ZW50U3RyaW5nOyAvLy9cclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSB0aGlzLnRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgdG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUnVsZXMoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaFJ1bGVzKGNvbnRlbnQpIHtcclxuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgbGV0IG11bHRpTGluQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgbGV0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgIGlmICghaW5Db21tZW50KSB7XHJcbiAgICAgIHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgY29uc3QgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==