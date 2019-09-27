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
        var token = this.matchWhitespace(content) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content) || this.matchMultiLineComment(content, inComment) || this.matchSingleLineComment(content, inComment);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGVzIiwidG9rZW5VdGlsaXRpZXMiLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwidG9rZW5pc2UiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaE11bHRpTGluZUNvbW1lbnQiLCJtYXRjaFNpbmdsZUxpbmVDb21tZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwibWF0Y2giLCJFcnJvciIsInB1c2giLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3Vic3RyaW5nIiwidG9rZW5Db21tZW50VG9rZW4iLCJpc0NvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImlzSW5Db21tZW50IiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ2xhc3MiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsUUFBUUQsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRyxrQkFBa0JILFFBQVEsMkNBQVIsQ0FGeEI7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsK0NBQVIsQ0FIL0I7QUFBQSxJQUlNSyx5QkFBeUJMLFFBQVEsbURBQVIsQ0FKL0I7QUFBQSxJQUtNTSw2QkFBNkJOLFFBQVEsd0RBQVIsQ0FMbkM7QUFBQSxJQU1NTyw4QkFBOEJQLFFBQVEseURBQVIsQ0FOcEM7QUFBQSxJQU9NUSwrQkFBK0JSLFFBQVEsMENBQVIsQ0FQckM7QUFBQSxJQVFNUywrQkFBK0JULFFBQVEsMERBQVIsQ0FSckM7QUFBQSxJQVNNVSxnQ0FBZ0NWLFFBQVEsMkRBQVIsQ0FUdEM7QUFBQSxJQVVNVyxpQ0FBaUNYLFFBQVEsd0RBQVIsQ0FWdkM7QUFBQSxJQVdNWSxpQ0FBaUNaLFFBQVEsd0RBQVIsQ0FYdkM7O0FBYU0sSUFBRWEsY0FBRixHQUFxQmQsU0FBckIsQ0FBRWMsY0FBRjtBQUFBLElBQ0VDLE1BREYsR0FDYUQsY0FEYixDQUNFQyxNQURGO0FBQUEsSUFFRUMsUUFGRixHQUVlYixjQUZmLENBRUVhLFFBRkY7O0lBSUFDLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixT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QU9DLE8sRUFBUztBQUNqQyxVQUFNeEMsUUFBUWhCLE1BQU15RCxXQUFOLENBQWtCRCxPQUFsQixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJSCxLQUFKLENBQVV2QyxLQUFWLENBRGQ7O0FBR0EsYUFBTzBDLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI3QyxXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIHRva2VuVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3Rva2VuJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUnKSxcclxuICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YnKSxcclxuICAgICAgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VudGlyZScpLFxyXG4gICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YnKSxcclxuICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YnKSxcclxuICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkJyksXHJcbiAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZCcpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXMsXHJcbiAgICAgIHsgdG9rZW5pc2UgfSA9IHRva2VuVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudDsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IHRoaXMudG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcclxuICAgICAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXHJcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xyXG5cclxuICAgICAgICBzcGxpY2UodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIGRlbGV0ZUNvdW50LCB0b2tlbnMpO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoICs9IHRva2Vuc0xlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGluZGV4ICs9IHRva2Vuc0xlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpIHtcclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBsZXQgdG9rZW4gPSB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KTtcclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlcy5zb21lKChydWxlKSA9PiB7XHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIGNhbm5vdCBiZSB0b2tlbmlzZWQuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCk7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbW1lbnRUb2tlbiA9IHRva2VuLmlzQ29tbWVudFRva2VuKCk7XHJcblxyXG4gICAgICBpZiAodG9rZW5Db21tZW50VG9rZW4pIHtcclxuICAgICAgICBjb25zdCBjb21tZW50VG9rZW4gPSB0b2tlbjsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IGNvbW1lbnRUb2tlbi5pc0luQ29tbWVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiB0b2tlbmlzZShjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaFdoaXRlc3BhY2UoY29udGVudCkgeyByZXR1cm4gV2hpdGVzcGFjZVRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gUmVndWxhckV4cHJlc3Npb25Ub2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19