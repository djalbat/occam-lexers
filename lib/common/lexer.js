'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule'),
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
      var endOfLineTokensOrContents = this.tokeniseEndOfLines(content),
          tokensOrContents = endOfLineTokensOrContents; ///

      this.tokeniseContents(tokensOrContents);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      var EndOfLineToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EndOfLineNonSignificantToken;

      var endOfLineTokensOrContents = [];

      var endOfLineToken = EndOfLineToken.match(content);

      while (endOfLineToken !== null) {
        var endOfLineTokenIndex = endOfLineToken.getIndex(),
            endOfLineTokenContentLength = endOfLineToken.getContentLength(),
            left = endOfLineTokenIndex,
            ///
        right = endOfLineTokenIndex + endOfLineTokenContentLength,
            leftContent = content.substring(0, left),
            rightContent = content.substring(right);

        content = leftContent; ///

        endOfLineTokensOrContents.push(content);

        endOfLineTokensOrContents.push(endOfLineToken);

        content = rightContent; ///

        endOfLineToken = EndOfLineToken.match(content);
      }

      endOfLineTokensOrContents.push(content);

      return endOfLineTokensOrContents;
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
        var token = this.matchMultiLineCommentInComment(content, inComment) || this.matchWhitespace(content) || this.matchMultiLineCommentNotInComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchBrokenComment(content, inComment) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content);

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
    key: 'matchSingleLineComment',
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : SingleLineCommentToken.match(content);

      return singleLineCommentToken;
    }
  }, {
    key: 'matchMultiLineCommentInComment',
    value: function matchMultiLineCommentInComment(content, inComment) {
      var multiLinCommentToken = inComment ? EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) : null;

      return multiLinCommentToken;
    }
  }, {
    key: 'matchMultiLineCommentNotInComment',
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      var multiLinCommentToken = inComment ? null : EntireMultiLineCommentToken.match(content) || StartOfMultiLineCommentToken.match(content);

      return multiLinCommentToken;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJCcm9rZW5Db21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaEJyb2tlbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwiRXJyb3IiLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiaXNJbkNvbW1lbnQiLCJicm9rZW5Db21tZW50VG9rZW4iLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJDbGFzcyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsImZyb21FbnRyeSIsImxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSwyQ0FBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSw4Q0FBUixDQUYzQjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSwrQ0FBUixDQUgvQjtBQUFBLElBSU1LLHlCQUF5QkwsUUFBUSxtREFBUixDQUovQjtBQUFBLElBS01NLDZCQUE2Qk4sUUFBUSx3REFBUixDQUxuQztBQUFBLElBTU1PLDhCQUE4QlAsUUFBUSx5REFBUixDQU5wQztBQUFB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QixDQUFzQlIsT0FBdEIsQ0FBUDtBQUF3Qzs7OzJDQUU1Q0EsTyxFQUFTO0FBQUUsYUFBT2YsdUJBQXVCdUIsS0FBdkIsQ0FBNkJSLE9BQTdCLENBQVA7QUFBK0M7OzttREFFbERBLE8sRUFBUztBQUFFLGFBQU9SLCtCQUErQmdCLEtBQS9CLENBQXFDUixPQUFyQyxLQUFpRE4scUNBQXFDYyxLQUFyQyxDQUEyQ1IsT0FBM0MsQ0FBeEQ7QUFBOEc7OzttREFFekhBLE8sRUFBUztBQUFFLGFBQU9QLCtCQUErQmUsS0FBL0IsQ0FBcUNSLE9BQXJDLEtBQWlETCxxQ0FBcUNhLEtBQXJDLENBQTJDUixPQUEzQyxDQUF4RDtBQUE4Rzs7O2dDQUVySW1ELEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FyRCxLQURBLEdBQ1FxRCxRQUFRQyxHQUFSLENBQVksVUFBQ0MsS0FBRDtBQUFBLGVBQVd4RSxLQUFLeUUsU0FBTCxDQUFlRCxLQUFmLENBQVg7QUFBQSxPQUFaLENBRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVEsSUFBSUwsS0FBSixDQUFVcEQsS0FBVixDQUZSOzs7QUFJTixhQUFPeUQsS0FBUDtBQUNEOzs7Z0NBRWtCTCxLLEVBQU9DLE8sRUFBUztBQUNqQyxVQUFNckQsUUFBUXFELFFBQVFDLEdBQVIsQ0FBWSxVQUFDQyxLQUFEO0FBQUEsZUFBV3hFLEtBQUt5RSxTQUFMLENBQWVELEtBQWYsQ0FBWDtBQUFBLE9BQVosQ0FBZDtBQUFBLFVBQ01FLFFBQVEsSUFBSUwsS0FBSixDQUFVcEQsS0FBVixDQURkOztBQUdBLGFBQU95RCxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCNUQsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2UnKSxcclxuICAgICAgQnJva2VuQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnQnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyksXHJcbiAgICAgIFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9icm9rZW5TdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZCcpLFxyXG4gICAgICBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQnKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50czsgLy8vXHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbikge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHdoaWxlIChlbmRPZkxpbmVUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbkluZGV4ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0SW5kZXgoKSxcclxuICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCArIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCxcclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpO1xyXG5cclxuICAgICAgY29udGVudCA9IGxlZnRDb250ZW50OyAgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJyksXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9IHRva2VuT3JDb250ZW50U3RyaW5nOyAvLy9cclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSB0aGlzLnRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgdG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcclxuXHJcbiAgICAgIGlmICh0b2tlbkNvbW1lbnRUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gY29tbWVudFRva2VuLmlzSW5Db21tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgYnJva2VuQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJva2VuQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBicm9rZW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19