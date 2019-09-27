'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rules = require('./rules'),
    WhitespaceToken = require('../common/token/nonSignificant/whitespace'),
    SingleLineCommentToken = require('../common/token/nonSignificant/comment/singleLine'),
    EndOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/endOf'),
    EntireMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/entire'),
    StartOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('../common/token/nonSignificant/comment/multiLine/middleOf');

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
      var whitespaceToken = WhitespaceToken.match(content);

      return whitespaceToken;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGVzIiwiV2hpdGVzcGFjZVRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiYXJyYXlVdGlsaXRpZXMiLCJzcGxpY2UiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaFJ1bGVzIiwiRXJyb3IiLCJwdXNoIiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInN1YnN0cmluZyIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJpc0luQ29tbWVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzb21lIiwicnVsZSIsIm1hdGNoIiwid2hpdGVzcGFjZVRva2VuIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ2xhc3MiLCJsZXhlciIs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b0Msc0JBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPdEMsSyxFQUFPO0FBQzdCLFVBQU11QyxRQUFRLElBQUlELEtBQUosQ0FBVXRDLEtBQVYsQ0FBZDs7QUFFQSxhQUFPdUMsS0FBUDtBQUNEOzs7Z0NBRWtCRCxLLEVBQU87QUFDbEIsVUFBRUUsT0FBRixHQUFjRixLQUFkLENBQUVFLE9BQUY7QUFBQSxVQUNBeEMsS0FEQSxHQUNRVixNQUFNbUQsV0FBTixDQUFrQkQsT0FBbEIsQ0FEUjtBQUFBLFVBRUFELEtBRkEsR0FFUSxJQUFJRCxLQUFKLENBQVV0QyxLQUFWLENBRlI7OztBQUlOLGFBQU91QyxLQUFQO0FBQ0Q7OztnQ0FFa0JELEssRUFBT0UsTyxFQUFTO0FBQ2pDLFVBQU14QyxRQUFRVixNQUFNbUQsV0FBTixDQUFrQkQsT0FBbEIsQ0FBZDtBQUFBLFVBQ01ELFFBQVEsSUFBSUQsS0FBSixDQUFVdEMsS0FBVixDQURkOztBQUdBLGFBQU91QyxLQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCNUMsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5tYXRjaFdoaXRlc3BhY2UoY29udGVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUnVsZXMoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaFJ1bGVzKGNvbnRlbnQpIHtcclxuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGxldCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgaWYgKCFpbkNvbW1lbnQpIHtcclxuICAgICAgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG11bHRpTGluQ29tbWVudFRva2VuID0gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGxldCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19