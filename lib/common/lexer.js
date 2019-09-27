'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rules = require('./rules'),
    tokenUtilities = require('../utilities/token'),
    WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
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
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return tokenise(content, EndOfLineNonSignificantToken);
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
        var token = this.matchWhitespace(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content) || this.matchMultiLineComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchRules(content);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGVzIiwidG9rZW5VdGlsaXRpZXMiLCJXaGl0ZXNwYWNlVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiYXJyYXlVdGlsaXRpZXMiLCJzcGxpY2UiLCJ0b2tlbmlzZSIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJpbkNvbW1lbnQiLCJpbmRleCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbk9yQ29udGVudCIsInRva2VuT3JDb250ZW50U3RyaW5nIiwidG9rZW5PckNvbnRlbnRDb250ZW50IiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoUnVsZXMiLCJFcnJvciIsInB1c2giLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3Vic3RyaW5nIiwidG9rZW5Db21tZW50VG9rZW4iLCJpc0NvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImlzSW5Db21tZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwibWF0Y2giLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsImxleGVyIiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1HLGtCQUFrQkgsUUFBUSwyQ0FBUixDQUZ4QjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSxtREFBUixDQUgvQjtBQUFBLElBSU1LLDZCQUE2QkwsUUFBUSx3REFBUixDQUpuQztBQUFBLElBS01NLDhCQUE4Qk4sUUFBUSx5REFBUixDQUxwQztBQUFBLElBTU1PLCtCQUErQlAsUUFBUSwwQ0FBUixDQU5yQztBQUFBLElBT01RLCtCQUErQlIsUUFBUSwwREFBUixDQVByQztBQUFBLElBUU1TLGdDQUFnQ1QsUUFBUSwyREFBUixDQVJ0QztBQUFBLElBU01VLGlDQUFpQ1YsUUFBUSx3REFBUixDQVR2QztBQUFBLElBVU1XLGlDQUFpQ1gsUUFBUSx3REFBUixDQVZ2Qzs7QUFZTSxJQUFFWSxjQUFGLEdBQXFCYixTQUFyQixDQUFFYSxjQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxjQURiLENBQ0VDLE1BREY7QUFBQSxJQUVFQyxRQUZGLEdBRWVaLGNBRmYsQ0FFRVksUUFGRjs7SUFJQUMsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxF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a0JELEssRUFBT0UsTyxFQUFTO0FBQ2pDLFVBQU16QyxRQUFRZixNQUFNeUQsV0FBTixDQUFrQkQsT0FBbEIsQ0FBZDtBQUFBLFVBQ01ELFFBQVEsSUFBSUQsS0FBSixDQUFVdkMsS0FBVixDQURkOztBQUdBLGFBQU93QyxLQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCN0MsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbicpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcyxcclxuICAgICAgeyB0b2tlbmlzZSB9ID0gdG9rZW5VdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gdG9rZW5pc2UoY29udGVudCwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudDsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IHRoaXMudG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcclxuICAgICAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXHJcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xyXG5cclxuICAgICAgICBzcGxpY2UodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIGRlbGV0ZUNvdW50LCB0b2tlbnMpO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoICs9IHRva2Vuc0xlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGluZGV4ICs9IHRva2Vuc0xlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpIHtcclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hSdWxlcyhjb250ZW50KTtcclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIGNhbm5vdCBiZSB0b2tlbmlzZWQuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCk7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbW1lbnRUb2tlbiA9IHRva2VuLmlzQ29tbWVudFRva2VuKCk7XHJcblxyXG4gICAgICBpZiAodG9rZW5Db21tZW50VG9rZW4pIHtcclxuICAgICAgICBjb25zdCBjb21tZW50VG9rZW4gPSB0b2tlbjsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IGNvbW1lbnRUb2tlbi5pc0luQ29tbWVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIG1hdGNoUnVsZXMoY29udGVudCkge1xyXG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBsZXQgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgIGlmICghaW5Db21tZW50KSB7XHJcbiAgICAgIG11bHRpTGluQ29tbWVudFRva2VuID0gRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBsZXQgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgaWYgKCFpbkNvbW1lbnQpIHtcclxuICAgICAgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcclxuICAgIGNvbnN0IGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=