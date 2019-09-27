'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rules = require('./rules'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGVzIiwidG9rZW5VdGlsaXRpZXMiLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwidG9rZW5pc2UiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaE11bHRpTGluZUNvbW1lbnQiLCJtYXRjaFNpbmdsZUxpbmVDb21tZW50IiwibWF0Y2hSdWxlcyIsIkVycm9yIiwicHVzaCIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdWJzdHJpbmciLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiaXNJbkNvbW1lbnQiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJtYXRjaCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNsYXNzIiwibGV4ZXIiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUcsa0JBQWtCSCxRQUFRLDJDQUFSLENBRnhCO0FBQUEsSUFHTUkseUJBQXlCSixRQUFRLCtDQUFSLENBSC9CO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLG1EQUFSLENBSi9CO0FBQUEsSUFLTU0sNkJBQTZCTixRQUFRLHdEQUFSLENBTG5DO0FBQUEsSUFNTU8sOEJBQThCUCxRQUFRLHlEQUFSLENBTnBDO0FBQUEsSUFPTVEsK0JBQStCUixRQUFRLDBDQUFSLENBUHJDO0FBQUEsSUFRTVMsK0JBQStCVCxRQUFRLDBEQUFSLENBUnJDO0FBQUEsSUFTTVUsZ0NBQWdDVixRQUFRLDJEQUFSLENBVHRDO0FBQUEsSUFVTVcsaUNBQWlDWCxRQUFRLHdEQUFSLENBVnZDO0FBQUEsSUFXTVksaUNBQWlDWixRQUFRLHdEQUFSLENBWHZDOztBQWFNLElBQUVhLGNBQUYsR0FBcUJkLFNBQXJCLENBQUVjLGNBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELGNBRGIsQ0FDRUMsTUFERjtBQUFBLElBRUVDLFFBRkYsR0FFZWIsY0FGZixDQUVFYSxRQUZGOztJQUlBQyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7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QUNEOzs7Z0NBRWtCRCxLLEVBQU87QUFDbEIsVUFBRUUsT0FBRixHQUFjRixLQUFkLENBQUVFLE9BQUY7QUFBQSxVQUNBMUMsS0FEQSxHQUNRaEIsTUFBTTJELFdBQU4sQ0FBa0JELE9BQWxCLENBRFI7QUFBQSxVQUVBRCxLQUZBLEdBRVEsSUFBSUQsS0FBSixDQUFVeEMsS0FBVixDQUZSOzs7QUFJTixhQUFPeUMsS0FBUDtBQUNEOzs7Z0NBRWtCRCxLLEVBQU9FLE8sRUFBUztBQUNqQyxVQUFNMUMsUUFBUWhCLE1BQU0yRCxXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUQsUUFBUSxJQUFJRCxLQUFKLENBQVV4QyxLQUFWLENBRGQ7O0FBR0EsYUFBT3lDLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUI5QyxXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIHRva2VuVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3Rva2VuJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUnKSxcclxuICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YnKSxcclxuICAgICAgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VudGlyZScpLFxyXG4gICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YnKSxcclxuICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YnKSxcclxuICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkJyksXHJcbiAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZCcpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXMsXHJcbiAgICAgIHsgdG9rZW5pc2UgfSA9IHRva2VuVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHRva2VuaXNlKGNvbnRlbnQsIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pOyB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJyksXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9IHRva2VuT3JDb250ZW50U3RyaW5nOyAvLy9cclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSB0aGlzLnRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgdG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUnVsZXMoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaFJ1bGVzKGNvbnRlbnQpIHtcclxuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgbGV0IG11bHRpTGluQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgbGV0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgIGlmICghaW5Db21tZW50KSB7XHJcbiAgICAgIHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgY29uc3QgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==