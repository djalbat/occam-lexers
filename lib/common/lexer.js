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

        endOfLineToken = Token.match(content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJCcm9rZW5Db21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiVG9rZW4iLCJpbkNvbW1lbnQiLCJpbmRleCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbk9yQ29udGVudCIsInRva2VuT3JDb250ZW50U3RyaW5nIiwidG9rZW5PckNvbnRlbnRDb250ZW50IiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJFcnJvciIsInRva2VuQ29udGVudExlbmd0aCIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJpc0luQ29tbWVudCIsImJyb2tlbkNvbW1lbnRUb2tlbiIsIm11bHRpTGluQ29tbWVudFRva2VuIiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNsYXNzIiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiZnJvbUVudHJ5IiwibGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLDJDQUFSLENBRHhCO0FBQUEsSUFFTUcscUJBQXFCSCxRQUFRLDhDQUFSLENBRjNCO0FBQUEsSUFHTUkseUJBQXlCSixRQUFRLCtDQUFSLENBSC9CO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLG1EQUFSLENBSi9CO0FBQUEsSUFLTU0sNkJBQTZCTixRQUFRLHdEQUFSLENBTG5DO0FBQUEsSUFNTU8sOEJBQThCUCxRQUFRLHlEQUFSLENBTnBDO0FBQUEsSUFPTVEsK0JBQStCUixRQUFRLDBDQUFSLENBUHJDO0FBQUEs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RE4scUNBQXFDYyxLQUFyQyxDQUEyQ1IsT0FBM0MsQ0FBeEQ7QUFBOEc7OzttREFFekhBLE8sRUFBUztBQUFFLGFBQU9QLCtCQUErQmUsS0FBL0IsQ0FBcUNSLE9BQXJDLEtBQWlETCxxQ0FBcUNhLEtBQXJDLENBQTJDUixPQUEzQyxDQUF4RDtBQUE4Rzs7O2dDQUVySW1ELEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FyRCxLQURBLEdBQ1FxRCxRQUFRQyxHQUFSLENBQVksVUFBQ0MsS0FBRDtBQUFBLGVBQVd4RSxLQUFLeUUsU0FBTCxDQUFlRCxLQUFmLENBQVg7QUFBQSxPQUFaLENBRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVEsSUFBSUwsS0FBSixDQUFVcEQsS0FBVixDQUZSOzs7QUFJTixhQUFPeUQsS0FBUDtBQUNEOzs7Z0NBRWtCTCxLLEVBQU9DLE8sRUFBUztBQUNqQyxVQUFNckQsUUFBUXFELFFBQVFDLEdBQVIsQ0FBWSxVQUFDQyxLQUFEO0FBQUEsZUFBV3hFLEtBQUt5RSxTQUFMLENBQWVELEtBQWYsQ0FBWDtBQUFBLE9BQVosQ0FBZDtBQUFBLFVBQ01FLFFBQVEsSUFBSUwsS0FBSixDQUFVcEQsS0FBVixDQURkOztBQUdBLGFBQU95RCxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCNUQsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2UnKSxcclxuICAgICAgQnJva2VuQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnQnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZScpLFxyXG4gICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZicpLFxyXG4gICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZicpLFxyXG4gICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQnKSxcclxuICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkJyksXHJcbiAgICAgIFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9icm9rZW5TdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZCcpLFxyXG4gICAgICBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQnKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50czsgLy8vXHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbikge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHdoaWxlIChlbmRPZkxpbmVUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbkluZGV4ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0SW5kZXgoKSxcclxuICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCArIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCxcclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpO1xyXG5cclxuICAgICAgY29udGVudCA9IGxlZnRDb250ZW50OyAgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbiA9IFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBicm9rZW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9rZW5Db21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGJyb2tlbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19