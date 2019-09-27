'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule'),
    Rules = require('./rules'),
    WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
    SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
    EntireMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/entire');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice,
    whiteSpaceRule = Rule.fromToken(WhitespaceToken),
    entireMultiLineCommentRule = Rule.fromToken(EntireMultiLineCommentToken);

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
        var token = this.matchWhitespace(content) || this.matchMultiLineComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchRules(content);

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
      var whiteSpaceToken = whiteSpaceRule.match(content);

      return whiteSpaceToken;
    }
  }, {
    key: 'matchMultiLineComment',
    value: function matchMultiLineComment(content, inComment) {
      var multiLinCommentToken = null;

      if (!inComment) {} else {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJSdWxlcyIsIldoaXRlc3BhY2VUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJhcnJheVV0aWxpdGllcyIsInNwbGljZSIsIndoaXRlU3BhY2VSdWxlIiwiZnJvbVRva2VuIiwiZW50aXJlTXVsdGlMaW5lQ29tbWVudFJ1bGUiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaFJ1bGVzIiwiRXJyb3IiLCJwdXNoIiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInN1YnN0cmluZyIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJpc0luQ29tbWVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzb21lIiwicnVsZSIsIm1hdGNoIiwid2hpdGVTcGFjZVRva2VuIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ2xhc3MiLCJsZXhlciIsImVudHJpZXMiLCJmcm9tRW50cmllcyIsIm1v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LEtBREEsR0FDUVYsTUFBTW1ELFdBQU4sQ0FBa0JELE9BQWxCLENBRFI7QUFBQSxVQUVBRCxLQUZBLEdBRVEsSUFBSUQsS0FBSixDQUFVdEMsS0FBVixDQUZSOzs7QUFJTixhQUFPdUMsS0FBUDtBQUNEOzs7Z0NBRWtCRCxLLEVBQU9FLE8sRUFBUztBQUNqQyxVQUFNeEMsUUFBUVYsTUFBTW1ELFdBQU4sQ0FBa0JELE9BQWxCLENBQWQ7QUFBQSxVQUNNRCxRQUFRLElBQUlELEtBQUosQ0FBVXRDLEtBQVYsQ0FEZDs7QUFHQSxhQUFPdUMsS0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQjVDLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcyxcclxuICAgICAgd2hpdGVTcGFjZVJ1bGUgPSBSdWxlLmZyb21Ub2tlbihXaGl0ZXNwYWNlVG9rZW4pLFxyXG4gICAgICBlbnRpcmVNdWx0aUxpbmVDb21tZW50UnVsZSA9IFJ1bGUuZnJvbVRva2VuKEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbik7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5tYXRjaFdoaXRlc3BhY2UoY29udGVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUnVsZXMoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaFJ1bGVzKGNvbnRlbnQpIHtcclxuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB3aGl0ZVNwYWNlVG9rZW4gPSB3aGl0ZVNwYWNlUnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gd2hpdGVTcGFjZVRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgbGV0IG11bHRpTGluQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIWluQ29tbWVudCkge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBsZXQgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgaWYgKCFpbkNvbW1lbnQpIHtcclxuICAgICAgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgY29uc3QgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==