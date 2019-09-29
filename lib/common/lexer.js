'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule'),
    tokenUtilities = require('../utilities/token'),
    WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
    BrokenCommentToken = require('../common/token/nonSignificant/brokenComment'),
    RegularExpressionToken = require('../common/token/significant/regularExpression'),
    SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
    EndOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/endOf'),
    EntireMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/entire'),
    EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine'),
    StartOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/middleOf'),
    SinglyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/singlyQuoted'),
    DoublyQuotedStringLiteralToken = require('../common/token/significant/stringLiteral/doublyQuoted'),
    SinglyQuotedBrokenStringLiteralToken = require('../common/token/significant/brokenStringLiteral/singlyQuoted'),
    DoublyQuotedBrokenStringLiteralToken = require('../common/token/significant/brokenStringLiteral/doublyQuoted');

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
        var token = this.matchWhitespace(content) || this.matchMultiLineComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchBrokenComment(content, inComment) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content);

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
    key: 'matchBrokenComment',
    value: function matchBrokenComment(content, inComment) {
      var brokenCommentToken = inComment ? null : BrokenCommentToken.match(content);

      return brokenCommentToken;
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
      var EndOfLineToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EndOfLineNonSignificantToken;
      return tokenise(content, EndOfLineToken);
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
      return SinglyQuotedStringLiteralToken.match(content) || SinglyQuotedBrokenStringLiteralToken.match(content);
    }
  }, {
    key: 'matchDoublyQuotedStringLiteral',
    value: function matchDoublyQuotedStringLiteral(content) {
      return DoublyQuotedStringLiteralToken.match(content) || DoublyQuotedBrokenStringLiteralToken.match(content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJ0b2tlblV0aWxpdGllcyIsIldoaXRlc3BhY2VUb2tlbiIsIkJyb2tlbkNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIiwiYXJyYXlVdGlsaXRpZXMiLCJzcGxpY2UiLCJ0b2tlbmlzZSIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJpbkNvbW1lbnQiLCJpbmRleCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbk9yQ29udGVudCIsInRva2VuT3JDb250ZW50U3RyaW5nIiwidG9rZW5PckNvbnRlbnRDb250ZW50IiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJtYXRjaCIsIkVycm9yIiwicHVzaCIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdWJzdHJpbmciLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiaXNJbkNvbW1lbnQiLCJicm9rZW5Db21tZW50VG9rZW4iLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVUb2tlbiIsIkNsYXNzIiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiZnJvbUVudHJ5IiwibGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUcsa0JBQWtCSCxRQUFRLDJDQUFSLENBRnhCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLDhDQUFSLENBSDNCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTU0seUJBQXlCTixRQUFRLG1EQUFSLENBTC9CO0FBQUEsSUFNTU8sNkJBQTZCUCxRQUFRLHdEQUFSLENBTm5DO0FBQUEsSUFPTVEsOEJBQThCUixRQUFRLHlEQUFSLENBUHBDO0FBQUEsSUFRTVMsK0JBQStCVCxRQUFRLDBDQUFSLENBUnJDO0FBQUEsSUFTTVUsK0JBQStCVixRQUFRLDBEQUFSLENBVHJDO0FBQUEsSUFVTVcsZ0NBQWdDWCxRQUFRLDJEQUFSLENBVnRDO0FBQUEsSUFXTVksaUNBQWlDWixRQUFRLHdEQUFS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c3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXHJcbiAgICAgIHRva2VuVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3Rva2VuJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlJyksXHJcbiAgICAgIEJyb2tlbkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9icm9rZW5Db21tZW50JyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUnKSxcclxuICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YnKSxcclxuICAgICAgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VudGlyZScpLFxyXG4gICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YnKSxcclxuICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YnKSxcclxuICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkJyksXHJcbiAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZCcpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcyxcclxuICAgICAgeyB0b2tlbmlzZSB9ID0gdG9rZW5VdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBicm9rZW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9rZW5Db21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGJyb2tlbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIHRva2VuaXNlKGNvbnRlbnQsIEVuZE9mTGluZVRva2VuKTsgfVxyXG5cclxuICBtYXRjaFdoaXRlc3BhY2UoY29udGVudCkgeyByZXR1cm4gV2hpdGVzcGFjZVRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gUmVndWxhckV4cHJlc3Npb25Ub2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==