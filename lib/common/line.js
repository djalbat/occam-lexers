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
      var tokens = this.getTokens(withCoveringTokens),
          html = tokens.reduce(function (html, token) {
        var tokenHTML = token.asHTML(filePath);

        html += tokenHTML;

        return html;
      }, '');

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
      var tokensOrContents = [this.content],
          inComment = CommentTokens.pass(tokensOrContents, this.configuration);

      RegularExpressionTokens.pass(tokensOrContents);

      StringLiteralTokens.pass(tokensOrContents);

      WhitespaceTokens.pass(tokensOrContents);

      var tokens = SignificantTokens.pass(tokensOrContents, this.rules);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInJ1bGVzIiwiY29uZmlndXJhdGlvbiIsInRva2VucyIsImluQ29tbWVudCIsImNvdmVyaW5nVG9rZW5NYXAiLCJ3aXRoQ292ZXJpbmdUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImluZGV4IiwiY292ZXJpbmdUb2tlbiIsInB1c2giLCJiaW5kIiwiY292ZXJpbmdUb2tlbkluZGV4IiwiY292ZXJpbmdUb2tlbkluZGV4ZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RUb2tlbiIsImdldFRva2VucyIsImZpcnN0SW5kZXgiLCJmaXJzdFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwibGFzdFRva2VuSW5kZXgiLCJmaWxlUGF0aCIsImh0bWwiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJjb3ZlcmVkVG9rZW4iLCJjb3ZlcmVkVG9rZW5JbmRleCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJuZXdDb3ZlcmluZ1Rva2VuIiwib2xkVG9rZW5JbmRleCIsIm9sZENvdmVyaW5nVG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJsaW5lIiwic3BsaWNlIiwic2V0TGluZSIsIm5ld0NvdmVyaW5nVG9rZW5JbmRleCIsImluZGV4ZXMiLCJnZXRJbmRleGVzIiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwiZ2V0TGFzdFRva2VuSW5kZXgiLCJmb3JFYWNoIiwiQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsIkxpbmUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBp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b250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uLCB0b2tlbnMsIGluQ29tbWVudCwgY292ZXJpbmdUb2tlbk1hcCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gICAgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwID0gY292ZXJpbmdUb2tlbk1hcDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdG9rZW5zID0gdGhpcy50b2tlbnM7XHJcblxyXG4gICAgaWYgKHdpdGhDb3ZlcmluZ1Rva2Vucykge1xyXG4gICAgICB0b2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW4sIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY292ZXJpbmdUb2tlbiA9IHRoaXMuY292ZXJpbmdUb2tlbk1hcFtpbmRleF07XHJcblxyXG4gICAgICAgIHRva2VuID0gY292ZXJpbmdUb2tlbiB8fCB0b2tlbjsgIC8vL1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgIH0uYmluZCh0aGlzKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldENvdmVyaW5nVG9rZW4oY292ZXJpbmdUb2tlbkluZGV4KSB7XHJcbiAgICBjb25zdCBjb3ZlcmluZ1Rva2VuID0gdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2NvdmVyaW5nVG9rZW5JbmRleF0gfHwgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gY292ZXJpbmdUb2tlblxyXG4gIH1cclxuXHJcbiAgZ2V0Q292ZXJpbmdUb2tlbkluZGV4ZXMoKSB7XHJcbiAgICBjb25zdCBjb3ZlcmluZ1Rva2VuSW5kZXhlcyA9IE9iamVjdC5rZXlzKHRoaXMuY292ZXJpbmdUb2tlbk1hcCk7XHJcblxyXG4gICAgcmV0dXJuIGNvdmVyaW5nVG9rZW5JbmRleGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoQ292ZXJpbmdUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyksXHJcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IChmaXJzdFRva2VuID09PSBudWxsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGZpcnN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBmaXJzdFRva2VuSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0VG9rZW5JbmRleChsYXN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoQ292ZXJpbmdUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyksXHJcbiAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgbGFzdEluZGV4ID0gdG9rZW5zTGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGxhc3RUb2tlbkluZGV4ID0gKGxhc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGxhc3RUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGxhc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgYXNIVE1MKGZpbGVQYXRoLCB3aXRoQ292ZXJpbmdUb2tlbnMpIHtcclxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyksXHJcbiAgICAgICAgICBodG1sID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoZmlsZVBhdGgpO1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIGNvdmVyVG9rZW4oY292ZXJlZFRva2VuLCBjb3ZlcmluZ1Rva2VuKSB7XHJcbiAgICBjb25zdCBjb3ZlcmVkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2YoY292ZXJlZFRva2VuKSxcclxuICAgICAgICAgIGNvdmVyaW5nVG9rZW5JbmRleCA9IGNvdmVyZWRUb2tlbkluZGV4OyAgLy8vXHJcblxyXG4gICAgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2NvdmVyaW5nVG9rZW5JbmRleF0gPSBjb3ZlcmluZ1Rva2VuO1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZVRva2VuKG9sZFRva2VuLCBuZXdUb2tlbiwgbmV3Q292ZXJpbmdUb2tlbikge1xyXG4gICAgY29uc3Qgb2xkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob2xkVG9rZW4pLFxyXG4gICAgICAgICAgb2xkQ292ZXJpbmdUb2tlbkluZGV4ID0gb2xkVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICBzdGFydCA9IG9sZFRva2VuSW5kZXgsICAvLy9cclxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSwgIC8vL1xyXG4gICAgICAgICAgbGluZSA9IHRoaXM7ICAvLy9cclxuXHJcbiAgICB0aGlzLnRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdUb2tlbik7XHJcblxyXG4gICAgbmV3VG9rZW4uc2V0TGluZShsaW5lKTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW29sZENvdmVyaW5nVG9rZW5JbmRleF07XHJcblxyXG4gICAgaWYgKG5ld0NvdmVyaW5nVG9rZW4pIHtcclxuICAgICAgY29uc3QgbmV3Q292ZXJpbmdUb2tlbkluZGV4ID0gb2xkVG9rZW5JbmRleDsgLy8vXHJcblxyXG4gICAgICB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbbmV3Q292ZXJpbmdUb2tlbkluZGV4XSA9IG5ld0NvdmVyaW5nVG9rZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb3ZlcmluZ1Rva2VucyhmaXJzdFRva2VuLCBsYXN0VG9rZW4pIHtcclxuICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmdldEluZGV4ZXMoKSxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4pLFxyXG4gICAgICAgICAgbGFzdFRva2VuSW5kZXggPSB0aGlzLmdldExhc3RUb2tlbkluZGV4KGxhc3RUb2tlbik7XHJcblxyXG4gICAgaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIGlmICgoaW5kZXggPj0gZmlyc3RUb2tlbkluZGV4KSAmJiAoaW5kZXggPD0gbGFzdFRva2VuSW5kZXgpKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY292ZXJpbmdUb2tlbk1hcFtpbmRleF07XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gW3RoaXMuY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdW5kZWZpbmVkLCAvLy9cclxuICAgICAgICAgIGluQ29tbWVudCA9IHVuZGVmaW5lZCwgLy9cclxuICAgICAgICAgIGNvdmVyaW5nVG9rZW5NYXAgPSB7fSxcclxuICAgICAgICAgIGxpbmUgPSBuZXcgTGluZShjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIGNvdmVyaW5nVG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MaW5lO1xyXG4iXX0=