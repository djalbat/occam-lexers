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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInJ1bGVzIiwiY29uZmlndXJhdGlvbiIsInRva2VucyIsImluQ29tbWVudCIsImNvdmVyaW5nVG9rZW5NYXAiLCJ3aXRoQ292ZXJpbmdUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImluZGV4IiwiY292ZXJpbmdUb2tlbiIsInB1c2giLCJiaW5kIiwiY292ZXJpbmdUb2tlbkluZGV4IiwiY292ZXJpbmdUb2tlbkluZGV4ZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RUb2tlbiIsImdldFRva2VucyIsImZpcnN0SW5kZXgiLCJmaXJzdFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwibGFzdFRva2VuSW5kZXgiLCJmaWxlUGF0aCIsImh0bWwiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJjb3ZlcmVkVG9rZW4iLCJjb3ZlcmVkVG9rZW5JbmRleCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJuZXdDb3ZlcmluZ1Rva2VuIiwib2xkVG9rZW5JbmRleCIsIm9sZENvdmVyaW5nVG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJsaW5lIiwic3BsaWNlIiwic2V0TGluZSIsIm5ld0NvdmVyaW5nVG9rZW5JbmRleCIsImluZGV4ZXMiLCJnZXRJbmRleGVzIiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwiZ2V0TGFzdFRva2VuSW5kZXgiLCJmb3JFYWNoIiwiQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsIkxpbmUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBp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Q0FIYjs7QUFLQSxhQUFPbUMsSUFBUDtBQUNEOzs7Ozs7QUFHSGlCLE9BQU9DLE9BQVAsR0FBaUIzRCxVQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGluZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24sIHRva2VucywgaW5Db21tZW50LCBjb3ZlcmluZ1Rva2VuTWFwKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSBpbkNvbW1lbnQ7XHJcbiAgICB0aGlzLmNvdmVyaW5nVG9rZW5NYXAgPSBjb3ZlcmluZ1Rva2VuTWFwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMod2l0aENvdmVyaW5nVG9rZW5zID0gZmFsc2UpIHtcclxuICAgIGxldCB0b2tlbnMgPSB0aGlzLnRva2VucztcclxuXHJcbiAgICBpZiAod2l0aENvdmVyaW5nVG9rZW5zKSB7XHJcbiAgICAgIHRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbiwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3ZlcmluZ1Rva2VuID0gdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2luZGV4XTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSBjb3ZlcmluZ1Rva2VuIHx8IHRva2VuOyAgLy8vXHJcblxyXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgfS5iaW5kKHRoaXMpLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIGlzSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q292ZXJpbmdUb2tlbihjb3ZlcmluZ1Rva2VuSW5kZXgpIHtcclxuICAgIGNvbnN0IGNvdmVyaW5nVG9rZW4gPSB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbY292ZXJpbmdUb2tlbkluZGV4XSB8fCBudWxsO1xyXG5cclxuICAgIHJldHVybiBjb3ZlcmluZ1Rva2VuXHJcbiAgfVxyXG5cclxuICBnZXRDb3ZlcmluZ1Rva2VuSW5kZXhlcygpIHtcclxuICAgIGNvbnN0IGNvdmVyaW5nVG9rZW5JbmRleGVzID0gT2JqZWN0LmtleXModGhpcy5jb3ZlcmluZ1Rva2VuTWFwKTtcclxuXHJcbiAgICByZXR1cm4gY292ZXJpbmdUb2tlbkluZGV4ZXM7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdFRva2VuSW5kZXgoZmlyc3RUb2tlbiA9IG51bGwpIHtcclxuICAgIGNvbnN0IHdpdGhDb3ZlcmluZ1Rva2VucyA9IGZhbHNlLFxyXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMod2l0aENvdmVyaW5nVG9rZW5zKSxcclxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxyXG4gICAgICAgICAgZmlyc3RUb2tlbkluZGV4ID0gKGZpcnN0VG9rZW4gPT09IG51bGwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJbmRleCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLmluZGV4T2YoZmlyc3RUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGZpcnN0VG9rZW5JbmRleDtcclxuICB9XHJcblxyXG4gIGdldExhc3RUb2tlbkluZGV4KGxhc3RUb2tlbiA9IG51bGwpIHtcclxuICAgIGNvbnN0IHdpdGhDb3ZlcmluZ1Rva2VucyA9IGZhbHNlLFxyXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMod2l0aENvdmVyaW5nVG9rZW5zKSxcclxuICAgICAgICAgIHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICBsYXN0SW5kZXggPSB0b2tlbnNMZW5ndGggLSAxLFxyXG4gICAgICAgICAgbGFzdFRva2VuSW5kZXggPSAobGFzdFRva2VuID09PSBudWxsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLmluZGV4T2YobGFzdFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gbGFzdFRva2VuSW5kZXg7XHJcbiAgfVxyXG5cclxuICBhc0hUTUwoZmlsZVBhdGgsIHdpdGhDb3ZlcmluZ1Rva2Vucykge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMod2l0aENvdmVyaW5nVG9rZW5zKSxcclxuICAgICAgICAgIGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTChmaWxlUGF0aCk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgY292ZXJUb2tlbihjb3ZlcmVkVG9rZW4sIGNvdmVyaW5nVG9rZW4pIHtcclxuICAgIGNvbnN0IGNvdmVyZWRUb2tlbkluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZihjb3ZlcmVkVG9rZW4pLFxyXG4gICAgICAgICAgY292ZXJpbmdUb2tlbkluZGV4ID0gY292ZXJlZFRva2VuSW5kZXg7ICAvLy9cclxuXHJcbiAgICB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbY292ZXJpbmdUb2tlbkluZGV4XSA9IGNvdmVyaW5nVG9rZW47XHJcbiAgfVxyXG5cclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuLCBuZXdDb3ZlcmluZ1Rva2VuKSB7XHJcbiAgICBjb25zdCBvbGRUb2tlbkluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZihvbGRUb2tlbiksXHJcbiAgICAgICAgICBvbGRDb3ZlcmluZ1Rva2VuSW5kZXggPSBvbGRUb2tlbkluZGV4LCAvLy9cclxuICAgICAgICAgIHN0YXJ0ID0gb2xkVG9rZW5JbmRleCwgIC8vL1xyXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxLCAgLy8vXHJcbiAgICAgICAgICBsaW5lID0gdGhpczsgIC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld1Rva2VuKTtcclxuXHJcbiAgICBuZXdUb2tlbi5zZXRMaW5lKGxpbmUpO1xyXG5cclxuICAgIGRlbGV0ZSB0aGlzLmNvdmVyaW5nVG9rZW5NYXBbb2xkQ292ZXJpbmdUb2tlbkluZGV4XTtcclxuXHJcbiAgICBpZiAobmV3Q292ZXJpbmdUb2tlbikge1xyXG4gICAgICBjb25zdCBuZXdDb3ZlcmluZ1Rva2VuSW5kZXggPSBvbGRUb2tlbkluZGV4OyAvLy9cclxuXHJcbiAgICAgIHRoaXMuY292ZXJpbmdUb2tlbk1hcFtuZXdDb3ZlcmluZ1Rva2VuSW5kZXhdID0gbmV3Q292ZXJpbmdUb2tlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUNvdmVyaW5nVG9rZW5zKGZpcnN0VG9rZW4sIGxhc3RUb2tlbikge1xyXG4gICAgY29uc3QgaW5kZXhlcyA9IHRoaXMuZ2V0SW5kZXhlcygpLFxyXG4gICAgICAgICAgZmlyc3RUb2tlbkluZGV4ID0gdGhpcy5nZXRGaXJzdFRva2VuSW5kZXgoZmlyc3RUb2tlbiksXHJcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0TGFzdFRva2VuSW5kZXgobGFzdFRva2VuKTtcclxuXHJcbiAgICBpbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgaWYgKChpbmRleCA+PSBmaXJzdFRva2VuSW5kZXgpICYmIChpbmRleCA8PSBsYXN0VG9rZW5JbmRleCkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jb3ZlcmluZ1Rva2VuTWFwW2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW3RoaXMuY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdW5kZWZpbmVkLCAvLy9cclxuICAgICAgICAgIGluQ29tbWVudCA9IHVuZGVmaW5lZCwgLy9cclxuICAgICAgICAgIGNvdmVyaW5nVG9rZW5NYXAgPSB7fSxcclxuICAgICAgICAgIGxpbmUgPSBuZXcgTGluZShjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIGNvdmVyaW5nVG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MaW5lO1xyXG4iXX0=