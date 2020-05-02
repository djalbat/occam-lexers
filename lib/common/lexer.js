"use strict";

var _necessary = require("necessary");

var _rule = _interopRequireDefault(require("./rule"));

var _whitespace = _interopRequireDefault(require("../common/token/nonSignificant/whitespace"));

var _brokenComment = _interopRequireDefault(require("../common/token/nonSignificant/brokenComment"));

var _regularExpression = _interopRequireDefault(require("../common/token/significant/regularExpression"));

var _singleLine = _interopRequireDefault(require("../common/token/nonSignificant/comment/singleLine"));

var _endOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/endOf"));

var _endOfLine = _interopRequireDefault(require("../common/token/nonSignificant/endOfLine"));

var _startOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/startOf"));

var _middleOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/middleOf"));

var _singlyQuoted = _interopRequireDefault(require("../common/token/significant/stringLiteral/singlyQuoted"));

var _doublyQuoted = _interopRequireDefault(require("../common/token/significant/stringLiteral/doublyQuoted"));

var _singlyQuoted2 = _interopRequireDefault(require("../common/token/significant/brokenStringLiteral/singlyQuoted"));

var _doublyQuoted2 = _interopRequireDefault(require("../common/token/significant/brokenStringLiteral/doublyQuoted"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var splice = _necessary.arrayUtilities.splice;

var CommonLexer = /*#__PURE__*/function () {
  function CommonLexer(rules) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
  }

  _createClass(CommonLexer, [{
    key: "getRules",
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: "tokenise",
    value: function tokenise(content) {
      var endOfLineTokensOrContents = this.tokeniseEndOfLines(content),
          tokensOrContents = endOfLineTokensOrContents; ///

      this.tokeniseContents(tokensOrContents);
      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      var EndOfLineToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _endOfLine["default"];
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
    key: "tokeniseContents",
    value: function tokeniseContents(tokensOrContents) {
      var inComment = false;
      var index = 0,
          tokensOrContentsLength = tokensOrContents.length;

      while (index < tokensOrContentsLength) {
        var tokenOrContent = tokensOrContents[index],
            tokenOrContentString = typeof tokenOrContent === "string",
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
    key: "tokeniseContent",
    value: function tokeniseContent(content, tokens, inComment) {
      var _this = this;

      while (content !== "") {
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
          throw new Error("The content '".concat(content, "' cannot be tokenised."));
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
    key: "matchBrokenComment",
    value: function matchBrokenComment(content, inComment) {
      var brokenCommentToken = inComment ? null : _brokenComment["default"].match(content);
      return brokenCommentToken;
    }
  }, {
    key: "matchSingleLineComment",
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : _singleLine["default"].match(content);
      return singleLineCommentToken;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      var multiLinCommentToken = inComment ? _endOf["default"].match(content) || _middleOf["default"].match(content) : null;
      return multiLinCommentToken;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      var multiLinCommentToken = inComment ? null : _startOf["default"].match(content);
      return multiLinCommentToken;
    }
  }, {
    key: "matchWhitespace",
    value: function matchWhitespace(content) {
      return _whitespace["default"].match(content);
    }
  }, {
    key: "matchRegularExpression",
    value: function matchRegularExpression(content) {
      return _regularExpression["default"].match(content);
    }
  }, {
    key: "matchSinglyQuotedStringLiteral",
    value: function matchSinglyQuotedStringLiteral(content) {
      return _singlyQuoted["default"].match(content) || _singlyQuoted2["default"].match(content);
    }
  }, {
    key: "matchDoublyQuotedStringLiteral",
    value: function matchDoublyQuotedStringLiteral(content) {
      return _doublyQuoted["default"].match(content) || _doublyQuoted2["default"].match(content);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      var entries = Class.entries,
          rules = entries.map(function (entry) {
        return _rule["default"].fromEntry(entry);
      }),
          lexer = new Class(rules);
      return lexer;
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(Class, entries) {
      var rules = entries.map(function (entry) {
        return _rule["default"].fromEntry(entry);
      }),
          lexer = new Class(rules);
      return lexer;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbInNwbGljZSIsImFycmF5VXRpbGl0aWVzIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsIm1hdGNoIiwiZW5kT2ZMaW5lVG9rZW5JbmRleCIsImdldEluZGV4IiwiZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwicHVzaCIsImluQ29tbWVudCIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRTdHJpbmciLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJ0b2tlbmlzZUNvbnRlbnQiLCJ0b2tlbnNMZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwidG9rZW4iLCJtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQiLCJtYXRjaFdoaXRlc3BhY2UiLCJtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQiLCJtYXRjaFNpbmdsZUxpbmVDb21tZW50IiwibWF0Y2hCcm9rZW5Db21tZW50IiwibWF0Y2hSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbCIsIm1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbCIsInNpZ25pZmljYW50VG9rZW4iLCJzb21lIiwicnVsZSIsIkVycm9yIiwidG9rZW5Db250ZW50TGVuZ3RoIiwidG9rZW5Db21tZW50VG9rZW4iLCJpc0NvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImlzSW5Db21tZW50IiwiYnJva2VuQ29tbWVudFRva2VuIiwiQnJva2VuQ29tbWVudFRva2VuIiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiIsIkNsYXNzIiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiUnVsZSIsImZyb21FbnRyeSIsImxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyx5QixDQUFYRCxNOztJQUVGRSxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzZCQUVRQyxPLEVBQVM7QUFDaEIsVUFBTUMseUJBQXlCLEdBQUcsS0FBS0Msa0JBQUwsQ0FBd0JGLE9BQXhCLENBQWxDO0FBQUEsVUFDTUcsZ0JBQWdCLEdBQUdGLHlCQUR6QixDQURnQixDQUVvQzs7QUFFcEQsV0FBS0csZ0JBQUwsQ0FB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Q0FBcUNULE9BQXJDLEtBQWlENEQsMEJBQXFDbkQsS0FBckMsQ0FBMkNULE9BQTNDLENBQXhEO0FBQThHOzs7bURBRXpIQSxPLEVBQVM7QUFBRSxhQUFPNkQseUJBQStCcEQsS0FBL0IsQ0FBcUNULE9BQXJDLEtBQWlEOEQsMEJBQXFDckQsS0FBckMsQ0FBMkNULE9BQTNDLENBQXhEO0FBQThHOzs7Z0NBRXJJK0QsSyxFQUFPO0FBQ2xCLFVBQUVDLE9BQUYsR0FBY0QsS0FBZCxDQUFFQyxPQUFGO0FBQUEsVUFDQWpFLEtBREEsR0FDUWlFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQyxpQkFBS0MsU0FBTCxDQUFlRixLQUFmLENBQVg7QUFBQSxPQUFaLENBRFI7QUFBQSxVQUVBRyxLQUZBLEdBRVEsSUFBSU4sS0FBSixDQUFVaEUsS0FBVixDQUZSO0FBSU4sYUFBT3NFLEtBQVA7QUFDRDs7O2dDQUVrQk4sSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTWpFLEtBQUssR0FBR2lFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQyxpQkFBS0MsU0FBTCxDQUFlRixLQUFmLENBQVg7QUFBQSxPQUFaLENBQWQ7QUFBQSxVQUNNRyxLQUFLLEdBQUcsSUFBSU4sS0FBSixDQUFVaEUsS0FBVixDQURkO0FBR0EsYUFBT3NFLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpFLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5jb25zdCB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSxcclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzOyAvLy9cclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gW107XHJcblxyXG4gICAgbGV0IGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgd2hpbGUgKGVuZE9mTGluZVRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGVuZE9mTGluZVRva2VuSW5kZXggPSBlbmRPZkxpbmVUb2tlbi5nZXRJbmRleCgpLFxyXG4gICAgICAgICAgICBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGggPSBlbmRPZkxpbmVUb2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIGxlZnQgPSBlbmRPZkxpbmVUb2tlbkluZGV4LCAvLy9cclxuICAgICAgICAgICAgcmlnaHQgPSBlbmRPZkxpbmVUb2tlbkluZGV4ICsgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoLFxyXG4gICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICByaWdodENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhyaWdodCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gbGVmdENvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChlbmRPZkxpbmVUb2tlbik7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmlnaHRDb250ZW50OyAvLy9cclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IFwiXCIpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcclxuXHJcbiAgICAgIGlmICh0b2tlbkNvbW1lbnRUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gY29tbWVudFRva2VuLmlzSW5Db21tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgYnJva2VuQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJva2VuQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBicm9rZW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=