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
      var multiLinCommentToken = inComment ? null : StartOfMultiLineCommentToken.match(content);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJCcm9rZW5Db21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaEJyb2tlbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwiRXJyb3IiLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiaXNJbkNvbW1lbnQiLCJicm9rZW5Db21tZW50VG9rZW4iLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJDbGFzcyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsImZyb21FbnRyeSIsImxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSwyQ0FBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSw4Q0FBUixDQUYzQjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSwrQ0FBUixDQUgvQjtBQUFBLElBSU1LLHlCQUF5QkwsUUFBUSxtREFBUixDQUovQjtBQUFBLElBS01NLDZCQUE2Qk4sUUFBUSx3REFBUixDQUxuQztBQUFBLElBTU1PLCtCQUErQlAsUUFBUSwwQ0FBUixDQU5yQztBQUFBLElBT01RLCtCQUErQlIsUUFBUSwwREFBUixDQVBy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TyxFQUFTO0FBQUUsYUFBT1IsK0JBQStCZ0IsS0FBL0IsQ0FBcUNSLE9BQXJDLEtBQWlETixxQ0FBcUNjLEtBQXJDLENBQTJDUixPQUEzQyxDQUF4RDtBQUE4Rzs7O21EQUV6SEEsTyxFQUFTO0FBQUUsYUFBT1AsK0JBQStCZSxLQUEvQixDQUFxQ1IsT0FBckMsS0FBaURMLHFDQUFxQ2EsS0FBckMsQ0FBMkNSLE9BQTNDLENBQXhEO0FBQThHOzs7Z0NBRXJJbUQsSyxFQUFPO0FBQ2xCLFVBQUVDLE9BQUYsR0FBY0QsS0FBZCxDQUFFQyxPQUFGO0FBQUEsVUFDQXJELEtBREEsR0FDUXFELFFBQVFDLEdBQVIsQ0FBWSxVQUFDQyxLQUFEO0FBQUEsZUFBV3ZFLEtBQUt3RSxTQUFMLENBQWVELEtBQWYsQ0FBWDtBQUFBLE9BQVosQ0FEUjtBQUFBLFVBRUFFLEtBRkEsR0FFUSxJQUFJTCxLQUFKLENBQVVwRCxLQUFWLENBRlI7OztBQUlOLGFBQU95RCxLQUFQO0FBQ0Q7OztnQ0FFa0JMLEssRUFBT0MsTyxFQUFTO0FBQ2pDLFVBQU1yRCxRQUFRcUQsUUFBUUMsR0FBUixDQUFZLFVBQUNDLEtBQUQ7QUFBQSxlQUFXdkUsS0FBS3dFLFNBQUwsQ0FBZUQsS0FBZixDQUFYO0FBQUEsT0FBWixDQUFkO0FBQUEsVUFDTUUsUUFBUSxJQUFJTCxLQUFKLENBQVVwRCxLQUFWLENBRGQ7O0FBR0EsYUFBT3lELEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI1RCxXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpLFxyXG4gICAgICBCcm9rZW5Db21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvYnJva2VuQ29tbWVudCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3JlZ3VsYXJFeHByZXNzaW9uJyksXHJcbiAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lJyksXHJcbiAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mJyksXHJcbiAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyksXHJcbiAgICAgIFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9icm9rZW5TdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZCcpLFxyXG4gICAgICBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQnKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50czsgLy8vXHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbikge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHdoaWxlIChlbmRPZkxpbmVUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbkluZGV4ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0SW5kZXgoKSxcclxuICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCArIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCxcclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpO1xyXG5cclxuICAgICAgY29udGVudCA9IGxlZnRDb250ZW50OyAgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJyksXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9IHRva2VuT3JDb250ZW50U3RyaW5nOyAvLy9cclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSB0aGlzLnRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgdG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcclxuXHJcbiAgICAgIGlmICh0b2tlbkNvbW1lbnRUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gY29tbWVudFRva2VuLmlzSW5Db21tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgYnJva2VuQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJva2VuQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBicm9rZW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=