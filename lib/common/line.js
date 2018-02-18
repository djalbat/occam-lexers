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
      deleteCount = 1; ///

      this.tokens.splice(start, deleteCount, newToken);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInJ1bGVzIiwiY29uZmlndXJhdGlvbiIsInRva2VucyIsImluQ29tbWVudCIsImNvdmVyaW5nVG9rZW5NYXAiLCJ3aXRoQ292ZXJpbmdUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImluZGV4IiwiY292ZXJpbmdUb2tlbiIsInB1c2giLCJiaW5kIiwiY292ZXJpbmdUb2tlbkluZGV4IiwiY292ZXJpbmdUb2tlbkluZGV4ZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RUb2tlbiIsImdldFRva2VucyIsImZpcnN0SW5kZXgiLCJmaXJzdFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwibGFzdFRva2VuSW5kZXgiLCJmaWxlUGF0aCIsImh0bWwiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJjb3ZlcmVkVG9rZW4iLCJjb3ZlcmVkVG9rZW5JbmRleCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJuZXdDb3ZlcmluZ1Rva2VuIiwib2xkVG9rZW5JbmRleCIsIm9sZENvdmVyaW5nVG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJuZXdDb3ZlcmluZ1Rva2VuSW5kZXgiLCJpbmRleGVzIiwiZ2V0SW5kZXhlcyIsImdldEZpcnN0VG9rZW5JbmRleCIsImdldExhc3RUb2tlbkluZGV4IiwiZm9yRWFjaCIsIkNvbW1lbnRUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwibGluZSIsInRva2Vuc09yQ29udGVudHMiLCJwYXNzIiwiTGluZSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFB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Q0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCMUQsVUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uLCB0b2tlbnMsIGluQ29tbWVudCwgY292ZXJpbmdUb2tlbk1hcCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gICAgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwID0gY292ZXJpbmdUb2tlbk1hcDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdG9rZW5zID0gdGhpcy50b2tlbnM7XHJcblxyXG4gICAgaWYgKHdpdGhDb3ZlcmluZ1Rva2Vucykge1xyXG4gICAgICB0b2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW4sIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY292ZXJpbmdUb2tlbiA9IHRoaXMuY292ZXJpbmdUb2tlbk1hcFtpbmRleF07XHJcblxyXG4gICAgICAgIHRva2VuID0gY292ZXJpbmdUb2tlbiB8fCB0b2tlbjsgIC8vL1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgIH0uYmluZCh0aGlzKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldENvdmVyaW5nVG9rZW4oY292ZXJpbmdUb2tlbkluZGV4KSB7XHJcbiAgICBjb25zdCBjb3ZlcmluZ1Rva2VuID0gdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2NvdmVyaW5nVG9rZW5JbmRleF0gfHwgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gY292ZXJpbmdUb2tlblxyXG4gIH1cclxuXHJcbiAgZ2V0Q292ZXJpbmdUb2tlbkluZGV4ZXMoKSB7XHJcbiAgICBjb25zdCBjb3ZlcmluZ1Rva2VuSW5kZXhlcyA9IE9iamVjdC5rZXlzKHRoaXMuY292ZXJpbmdUb2tlbk1hcCk7XHJcblxyXG4gICAgcmV0dXJuIGNvdmVyaW5nVG9rZW5JbmRleGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoQ292ZXJpbmdUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyksXHJcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IChmaXJzdFRva2VuID09PSBudWxsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGZpcnN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBmaXJzdFRva2VuSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0VG9rZW5JbmRleChsYXN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoQ292ZXJpbmdUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2VucyksXHJcbiAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgbGFzdEluZGV4ID0gdG9rZW5zTGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGxhc3RUb2tlbkluZGV4ID0gKGxhc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGxhc3RUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGxhc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgYXNIVE1MKGZpbGVQYXRoLCB3aXRoQ292ZXJpbmdUb2tlbnMpIHtcclxuICAgIGxldCBodG1sO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhDb3ZlcmluZ1Rva2Vucyk7XHJcblxyXG4gICAgaHRtbCA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKGZpbGVQYXRoKTtcclxuXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG5cclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7IC8vL1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgY292ZXJUb2tlbihjb3ZlcmVkVG9rZW4sIGNvdmVyaW5nVG9rZW4pIHtcclxuICAgIGNvbnN0IGNvdmVyZWRUb2tlbkluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZihjb3ZlcmVkVG9rZW4pLFxyXG4gICAgICAgICAgY292ZXJpbmdUb2tlbkluZGV4ID0gY292ZXJlZFRva2VuSW5kZXg7ICAvLy9cclxuXHJcbiAgICB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbY292ZXJpbmdUb2tlbkluZGV4XSA9IGNvdmVyaW5nVG9rZW47XHJcbiAgfVxyXG5cclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuLCBuZXdDb3ZlcmluZ1Rva2VuKSB7XHJcbiAgICBjb25zdCBvbGRUb2tlbkluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZihvbGRUb2tlbiksXHJcbiAgICAgICAgICBvbGRDb3ZlcmluZ1Rva2VuSW5kZXggPSBvbGRUb2tlbkluZGV4LCAvLy9cclxuICAgICAgICAgIHN0YXJ0ID0gb2xkVG9rZW5JbmRleCwgIC8vL1xyXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxOyAgLy8vXHJcblxyXG4gICAgdGhpcy50b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgbmV3VG9rZW4pO1xyXG5cclxuICAgIGRlbGV0ZSB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbb2xkQ292ZXJpbmdUb2tlbkluZGV4XTtcclxuXHJcbiAgICBpZiAobmV3Q292ZXJpbmdUb2tlbikge1xyXG4gICAgICBjb25zdCBuZXdDb3ZlcmluZ1Rva2VuSW5kZXggPSBvbGRUb2tlbkluZGV4OyAvLy9cclxuXHJcbiAgICAgIHRoaXMuY292ZXJpbmdUb2tlbk1hcFtuZXdDb3ZlcmluZ1Rva2VuSW5kZXhdID0gbmV3Q292ZXJpbmdUb2tlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUNvdmVyaW5nVG9rZW5zKGZpcnN0VG9rZW4sIGxhc3RUb2tlbikge1xyXG4gICAgY29uc3QgaW5kZXhlcyA9IHRoaXMuZ2V0SW5kZXhlcygpLFxyXG4gICAgICAgICAgZmlyc3RUb2tlbkluZGV4ID0gdGhpcy5nZXRGaXJzdFRva2VuSW5kZXgoZmlyc3RUb2tlbiksXHJcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0TGFzdFRva2VuSW5kZXgobGFzdFRva2VuKTtcclxuXHJcbiAgICBpbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgaWYgKChpbmRleCA+PSBmaXJzdFRva2VuSW5kZXgpICYmIChpbmRleCA8PSBsYXN0VG9rZW5JbmRleCkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW3RoaXMuY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdW5kZWZpbmVkLCAvLy9cclxuICAgICAgICAgIGluQ29tbWVudCA9IHVuZGVmaW5lZCwgLy9cclxuICAgICAgICAgIGNvdmVyaW5nVG9rZW5NYXAgPSB7fSxcclxuICAgICAgICAgIGxpbmUgPSBuZXcgTGluZShjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIGNvdmVyaW5nVG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MaW5lO1xyXG4iXX0=