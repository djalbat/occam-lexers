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

      if (content !== '') {
        endOfLineTokensOrContents.push(content);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJCcm9rZW5Db21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaEJyb2tlbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwiRXJyb3IiLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiaXNJbkNvbW1lbnQiLCJicm9rZW5Db21tZW50VG9rZW4iLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsImZyb21FbnRyeSIsImxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSwyQ0FBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSw4Q0FBUixDQUYzQjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSwrQ0FBUixDQUgvQjtBQUFBLElBSU1LLHlCQUF5QkwsUUFBUSxtREFBUixDQUovQjtBQUFBLElBS01NLDZCQUE2Qk4sUUFBUSx3REFBUixDQUxuQztBQUFBLElBTU1PLDhCQUE4QlAsUUFBUSx5REFBUixDQU5wQztBQUFBLElBT01RLCtCQUErQlIsUUFBUSwwQ0FBUixDQVByQztBQUFBLElBUU1TLCtC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QXFDYyxLQUFyQyxDQUEyQ1IsT0FBM0MsQ0FBeEQ7QUFBOEc7OzttREFFekhBLE8sRUFBUztBQUFFLGFBQU9QLCtCQUErQmUsS0FBL0IsQ0FBcUNSLE9BQXJDLEtBQWlETCxxQ0FBcUNhLEtBQXJDLENBQTJDUixPQUEzQyxDQUF4RDtBQUE4Rzs7O2dDQUVySWtELEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FwRCxLQURBLEdBQ1FvRCxRQUFRQyxHQUFSLENBQVksVUFBQ0MsS0FBRDtBQUFBLGVBQVd2RSxLQUFLd0UsU0FBTCxDQUFlRCxLQUFmLENBQVg7QUFBQSxPQUFaLENBRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVEsSUFBSUwsS0FBSixDQUFVbkQsS0FBVixDQUZSOzs7QUFJTixhQUFPd0QsS0FBUDtBQUNEOzs7Z0NBRWtCTCxLLEVBQU9DLE8sRUFBUztBQUNqQyxVQUFNcEQsUUFBUW9ELFFBQVFDLEdBQVIsQ0FBWSxVQUFDQyxLQUFEO0FBQUEsZUFBV3ZFLEtBQUt3RSxTQUFMLENBQWVELEtBQWYsQ0FBWDtBQUFBLE9BQVosQ0FBZDtBQUFBLFVBQ01FLFFBQVEsSUFBSUwsS0FBSixDQUFVbkQsS0FBVixDQURkOztBQUdBLGFBQU93RCxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0QsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2UnKSxcclxuICAgICAgQnJva2VuQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnQnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyksXHJcbiAgICAgIFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9icm9rZW5TdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZCcpLFxyXG4gICAgICBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQnKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50czsgLy8vXHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbikge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHdoaWxlIChlbmRPZkxpbmVUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbkluZGV4ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0SW5kZXgoKSxcclxuICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCArIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCxcclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpO1xyXG5cclxuICAgICAgY29udGVudCA9IGxlZnRDb250ZW50OyAgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBicm9rZW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9rZW5Db21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGJyb2tlbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19