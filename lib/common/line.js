'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

var CommonLine = function () {
  function CommonLine(content, rules, configuration, tokens, inComment, coveringTokenMap) {
    _classCallCheck(this, CommonLine);

    this.content = content;
    this.rules = rules;
    this.configuration = configuration;
    this.tokens = tokens;
    this.inComment = inComment;
    this.coveringTokenMap = coveringTokenMap;
  }

  _createClass(CommonLine, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getConfiguration',
    value: function getConfiguration() {
      return this.configuration;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      var withCoveringTokens = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var tokens = this.tokens;

      if (withCoveringTokens) {
        tokens = tokens.reduce(function (tokens, token, index) {
          var coveringToken = this.coveringTokenMap[index];

          token = coveringToken || token; ///

          tokens.push(token);

          return tokens;
        }.bind(this), []);
      }

      return tokens;
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      return this.inComment;
    }
  }, {
    key: 'getCoveringToken',
    value: function getCoveringToken(coveringTokenIndex) {
      var coveringToken = this.coveringTokenMap[coveringTokenIndex] || null;

      return coveringToken;
    }
  }, {
    key: 'getCoveringTokenIndexes',
    value: function getCoveringTokenIndexes() {
      var coveringTokenIndexes = Object.keys(this.coveringTokenMap);

      return coveringTokenIndexes;
    }
  }, {
    key: 'getFirstTokenIndex',
    value: function getFirstTokenIndex() {
      var firstToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var withCoveringTokens = false,
          tokens = this.getTokens(withCoveringTokens),
          firstIndex = 0,
          firstTokenIndex = firstToken === null ? firstIndex : tokens.indexOf(firstToken);

      return firstTokenIndex;
    }
  }, {
    key: 'getLastTokenIndex',
    value: function getLastTokenIndex() {
      var lastToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var withCoveringTokens = false,
          tokens = this.getTokens(withCoveringTokens),
          tokensLength = tokens.length,
          lastIndex = tokensLength - 1,
          lastTokenIndex = lastToken === null ? lastIndex : tokens.indexOf(lastToken);

      return lastTokenIndex;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath, withCoveringTokens) {
      var html = void 0;

      var tokens = this.getTokens(withCoveringTokens);

      html = tokens.reduce(function (html, token) {
        var tokenHTML = token.asHTML(filePath);

        html += tokenHTML;

        return html;
      }, '');

      html += '\n'; ///

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'coverToken',
    value: function coverToken(coveredToken, coveringToken) {
      var coveredTokenIndex = this.tokens.indexOf(coveredToken),
          coveringTokenIndex = coveredTokenIndex; ///

      this.coveringTokenMap[coveringTokenIndex] = coveringToken;
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken, newCoveringToken) {
      var oldTokenIndex = this.tokens.indexOf(oldToken),
          oldCoveringTokenIndex = oldTokenIndex,
          ///
      start = oldTokenIndex,
          ///
      deleteCount = 1,
          ///
      line = this; ///

      this.tokens.splice(start, deleteCount, newToken);

      newToken.setLine(line);

      delete this.coveringTokenMap[oldCoveringTokenIndex];

      if (newCoveringToken) {
        var newCoveringTokenIndex = oldTokenIndex; ///

        this.coveringTokenMap[newCoveringTokenIndex] = newCoveringToken;
      }
    }
  }, {
    key: 'removeCoveringTokens',
    value: function removeCoveringTokens(firstToken, lastToken) {
      var indexes = this.getIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

      indexes.forEach(function (index) {
        if (index >= firstTokenIndex && index <= lastTokenIndex) {
          delete this.coveringTokenMap[index];
        }
      }.bind(this));
    }
  }, {
    key: 'initialise',
    value: function initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
      var line = this,
          ///
      tokensOrContents = [this.content],
          inComment = CommentTokens.pass(tokensOrContents, line, this.configuration);

      RegularExpressionTokens.pass(tokensOrContents, line);

      StringLiteralTokens.pass(tokensOrContents, line);

      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, this.rules);

      this.tokens = tokens;

      this.inComment = inComment;
    }
  }], [{
    key: 'fromContentRulesAndConfiguration',
    value: function fromContentRulesAndConfiguration(Line, content, rules, configuration) {
      var tokens = undefined,
          ///
      inComment = undefined,
          //
      coveringTokenMap = {},
          line = new Line(content, rules, configuration, tokens, inComment, coveringTokenMap);

      return line;
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInJ1bGVzIiwiY29uZmlndXJhdGlvbiIsInRva2VucyIsImluQ29tbWVudCIsImNvdmVyaW5nVG9rZW5NYXAiLCJ3aXRoQ292ZXJpbmdUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImluZGV4IiwiY292ZXJpbmdUb2tlbiIsInB1c2giLCJiaW5kIiwiY292ZXJpbmdUb2tlbkluZGV4IiwiY292ZXJpbmdUb2tlbkluZGV4ZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RUb2tlbiIsImdldFRva2VucyIsImZpcnN0SW5kZXgiLCJmaXJzdFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwibGFzdFRva2VuSW5kZXgiLCJmaWxlUGF0aCIsImh0bWwiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJjb3ZlcmVkVG9rZW4iLCJjb3ZlcmVkVG9rZW5JbmRleCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJuZXdDb3ZlcmluZ1Rva2VuIiwib2xkVG9rZW5JbmRleCIsIm9sZENvdmVyaW5nVG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJsaW5lIiwic3BsaWNlIiwic2V0TGluZSIsIm5ld0NvdmVyaW5nVG9rZW5JbmRleCIsImluZGV4ZXMiLCJnZXRJbmRleGVzIiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwiZ2V0TGFzdFRva2VuSW5kZXgiLCJmb3JFYWNoIiwiQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsIkxpbmUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBp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QXpCLEVBQXdDQyxNQUF4QyxFQUFnREMsU0FBaEQsRUFBMkRDLGdCQUEzRCxDQUhiOztBQUtBLGFBQU9tQyxJQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsT0FBT0MsT0FBUCxHQUFpQjNELFVBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIGNvdmVyaW5nVG9rZW5NYXApIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICAgIHRoaXMuY292ZXJpbmdUb2tlbk1hcCA9IGNvdmVyaW5nVG9rZW5NYXA7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIGdldFRva2Vucyh3aXRoQ292ZXJpbmdUb2tlbnMgPSBmYWxzZSkge1xyXG4gICAgbGV0IHRva2VucyA9IHRoaXMudG9rZW5zO1xyXG5cclxuICAgIGlmICh3aXRoQ292ZXJpbmdUb2tlbnMpIHtcclxuICAgICAgdG9rZW5zID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvdmVyaW5nVG9rZW4gPSB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbaW5kZXhdO1xyXG5cclxuICAgICAgICB0b2tlbiA9IGNvdmVyaW5nVG9rZW4gfHwgdG9rZW47ICAvLy9cclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICB9LmJpbmQodGhpcyksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb3ZlcmluZ1Rva2VuKGNvdmVyaW5nVG9rZW5JbmRleCkge1xyXG4gICAgY29uc3QgY292ZXJpbmdUb2tlbiA9IHRoaXMuY292ZXJpbmdUb2tlbk1hcFtjb3ZlcmluZ1Rva2VuSW5kZXhdIHx8IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIGNvdmVyaW5nVG9rZW5cclxuICB9XHJcblxyXG4gIGdldENvdmVyaW5nVG9rZW5JbmRleGVzKCkge1xyXG4gICAgY29uc3QgY292ZXJpbmdUb2tlbkluZGV4ZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvdmVyaW5nVG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBjb3ZlcmluZ1Rva2VuSW5kZXhlcztcclxuICB9XHJcblxyXG4gIGdldEZpcnN0VG9rZW5JbmRleChmaXJzdFRva2VuID0gbnVsbCkge1xyXG4gICAgY29uc3Qgd2l0aENvdmVyaW5nVG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoQ292ZXJpbmdUb2tlbnMpLFxyXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXHJcbiAgICAgICAgICBmaXJzdFRva2VuSW5kZXggPSAoZmlyc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuaW5kZXhPZihmaXJzdFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gZmlyc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdFRva2VuSW5kZXgobGFzdFRva2VuID0gbnVsbCkge1xyXG4gICAgY29uc3Qgd2l0aENvdmVyaW5nVG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoQ292ZXJpbmdUb2tlbnMpLFxyXG4gICAgICAgICAgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcclxuICAgICAgICAgIGxhc3RJbmRleCA9IHRva2Vuc0xlbmd0aCAtIDEsXHJcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IChsYXN0VG9rZW4gPT09IG51bGwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuaW5kZXhPZihsYXN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBsYXN0VG9rZW5JbmRleDtcclxuICB9XHJcblxyXG4gIGFzSFRNTChmaWxlUGF0aCwgd2l0aENvdmVyaW5nVG9rZW5zKSB7XHJcbiAgICBsZXQgaHRtbDtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoQ292ZXJpbmdUb2tlbnMpO1xyXG5cclxuICAgIGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTChmaWxlUGF0aCk7XHJcblxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIGNvdmVyVG9rZW4oY292ZXJlZFRva2VuLCBjb3ZlcmluZ1Rva2VuKSB7XHJcbiAgICBjb25zdCBjb3ZlcmVkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2YoY292ZXJlZFRva2VuKSxcclxuICAgICAgICAgIGNvdmVyaW5nVG9rZW5JbmRleCA9IGNvdmVyZWRUb2tlbkluZGV4OyAgLy8vXHJcblxyXG4gICAgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2NvdmVyaW5nVG9rZW5JbmRleF0gPSBjb3ZlcmluZ1Rva2VuO1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZVRva2VuKG9sZFRva2VuLCBuZXdUb2tlbiwgbmV3Q292ZXJpbmdUb2tlbikge1xyXG4gICAgY29uc3Qgb2xkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob2xkVG9rZW4pLFxyXG4gICAgICAgICAgb2xkQ292ZXJpbmdUb2tlbkluZGV4ID0gb2xkVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICBzdGFydCA9IG9sZFRva2VuSW5kZXgsICAvLy9cclxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSwgIC8vL1xyXG4gICAgICAgICAgbGluZSA9IHRoaXM7ICAvLy9cclxuXHJcbiAgICB0aGlzLnRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdUb2tlbik7XHJcblxyXG4gICAgbmV3VG9rZW4uc2V0TGluZShsaW5lKTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW29sZENvdmVyaW5nVG9rZW5JbmRleF07XHJcblxyXG4gICAgaWYgKG5ld0NvdmVyaW5nVG9rZW4pIHtcclxuICAgICAgY29uc3QgbmV3Q292ZXJpbmdUb2tlbkluZGV4ID0gb2xkVG9rZW5JbmRleDsgLy8vXHJcblxyXG4gICAgICB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbbmV3Q292ZXJpbmdUb2tlbkluZGV4XSA9IG5ld0NvdmVyaW5nVG9rZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb3ZlcmluZ1Rva2VucyhmaXJzdFRva2VuLCBsYXN0VG9rZW4pIHtcclxuICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmdldEluZGV4ZXMoKSxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4pLFxyXG4gICAgICAgICAgbGFzdFRva2VuSW5kZXggPSB0aGlzLmdldExhc3RUb2tlbkluZGV4KGxhc3RUb2tlbik7XHJcblxyXG4gICAgaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIGlmICgoaW5kZXggPj0gZmlyc3RUb2tlbkluZGV4KSAmJiAoaW5kZXggPD0gbGFzdFRva2VuSW5kZXgpKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY292ZXJpbmdUb2tlbk1hcFtpbmRleF07XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gdGhpcywgIC8vL1xyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IFt0aGlzLmNvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHRoaXMuY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBTdHJpbmdMaXRlcmFsVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcblxyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IHRva2VucyA9IHVuZGVmaW5lZCwgLy8vXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSB1bmRlZmluZWQsIC8vXHJcbiAgICAgICAgICBjb3ZlcmluZ1Rva2VuTWFwID0ge30sXHJcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUoY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24sIHRva2VucywgaW5Db21tZW50LCBjb3ZlcmluZ1Rva2VuTWFwKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGluZTtcclxuIl19