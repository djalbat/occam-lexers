'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

var CommonLine = function () {
  function CommonLine(content, rules, configuration, tokens, inComment, replacementTokenMap) {
    _classCallCheck(this, CommonLine);

    this.content = content;
    this.rules = rules;
    this.configuration = configuration;
    this.tokens = tokens;
    this.inComment = inComment;
    this.replacementTokenMap = replacementTokenMap;
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
      var withReplacementTokens = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var tokens = this.tokens;

      if (withReplacementTokens) {
        tokens = tokens.reduce(function (tokens, token, index) {
          var replacementToken = this.replacementTokenMap[index];

          token = replacementToken || token; ///

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
    key: 'getReplacementToken',
    value: function getReplacementToken(replacementTokenIndex) {
      var replacementToken = this.replacementTokenMap[replacementTokenIndex] || null;

      return replacementToken;
    }
  }, {
    key: 'getReplacementTokenIndexes',
    value: function getReplacementTokenIndexes() {
      var replacementTokenIndexes = Object.keys(this.replacementTokenMap);

      return replacementTokenIndexes;
    }
  }, {
    key: 'getFirstTokenIndex',
    value: function getFirstTokenIndex() {
      var firstToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          firstIndex = 0,
          firstTokenIndex = firstToken === null ? firstIndex : tokens.indexOf(firstToken);

      return firstTokenIndex;
    }
  }, {
    key: 'getLastTokenIndex',
    value: function getLastTokenIndex() {
      var lastToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          tokensLength = tokens.length,
          lastIndex = tokensLength - 1,
          lastTokenIndex = lastToken === null ? lastIndex : tokens.indexOf(lastToken);

      return lastTokenIndex;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath, withReplacementTokens) {
      var html = void 0;

      var tokens = this.getTokens(withReplacementTokens);

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
    key: 'replaceToken',
    value: function replaceToken(replacedToken, replacementToken) {
      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          replacedTokenIndex = tokens.indexOf(replacedToken),
          replacementTokenIndex = replacedTokenIndex; ///

      this.replacementTokenMap[replacementTokenIndex] = replacementToken;
    }
  }, {
    key: 'spliceToken',
    value: function spliceToken(oldToken, newToken, newReplacementToken) {
      var oldTokenIndex = this.tokens.indexOf(oldToken),
          oldReplacementTokenIndex = oldTokenIndex,
          ///
      start = oldTokenIndex,
          ///
      deleteCount = 1; ///

      this.tokens.splice(start, deleteCount, newToken);

      delete this.replacementTokenMap[oldReplacementTokenIndex];

      if (newReplacementToken) {
        var newReplacementTokenIndex = oldTokenIndex; ///

        this.replacementTokenMap[newReplacementTokenIndex] = newReplacementToken;
      }
    }
  }, {
    key: 'removeReplacementTokens',
    value: function removeReplacementTokens(firstToken, lastToken) {
      var replacementTokenIndexes = this.getReplacementTokenIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

      replacementTokenIndexes.forEach(function (replacementTokenIndex) {
        if (replacementTokenIndex >= firstTokenIndex && replacementTokenIndex <= lastTokenIndex) {
          delete this.replacementTokenMap[replacementTokenIndex];
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
      replacementTokenMap = {},
          line = new Line(content, rules, configuration, tokens, inComment, replacementTokenMap);

      return line;
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInJ1bGVzIiwiY29uZmlndXJhdGlvbiIsInRva2VucyIsImluQ29tbWVudCIsInJlcGxhY2VtZW50VG9rZW5NYXAiLCJ3aXRoUmVwbGFjZW1lbnRUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImluZGV4IiwicmVwbGFjZW1lbnRUb2tlbiIsInB1c2giLCJiaW5kIiwicmVwbGFjZW1lbnRUb2tlbkluZGV4IiwicmVwbGFjZW1lbnRUb2tlbkluZGV4ZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RUb2tlbiIsImdldFRva2VucyIsImZpcnN0SW5kZXgiLCJmaXJzdFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwibGFzdFRva2VuSW5kZXgiLCJmaWxlUGF0aCIsImh0bWwiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJyZXBsYWNlZFRva2VuIiwicmVwbGFjZWRUb2tlbkluZGV4Iiwib2xkVG9rZW4iLCJuZXdUb2tlbiIsIm5ld1JlcGxhY2VtZW50VG9rZW4iLCJvbGRUb2tlbkluZGV4Iiwib2xkUmVwbGFjZW1lbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsIm5ld1JlcGxhY2VtZW50VG9rZW5JbmRleCIsImdldFJlcGxhY2VtZW50VG9rZW5JbmRleGVzIiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwiZ2V0TGFzdFRva2VuSW5kZXgiLCJmb3JFYWNoIiwiQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJMaW5lIiwidW5kZWZpbmVkIiwibW9k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LElBQUosQ0FBU3JELE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCQyxhQUF6QixFQUF3Q0MsTUFBeEMsRUFBZ0RDLFNBQWhELEVBQTJEQyxtQkFBM0QsQ0FIYjs7QUFLQSxhQUFPNkMsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnpELFVBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIHJlcGxhY2VtZW50VG9rZW5NYXApIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICAgIHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcCA9IHJlcGxhY2VtZW50VG9rZW5NYXA7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIGdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSkge1xyXG4gICAgbGV0IHRva2VucyA9IHRoaXMudG9rZW5zO1xyXG5cclxuICAgIGlmICh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpIHtcclxuICAgICAgdG9rZW5zID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSB0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXBbaW5kZXhdO1xyXG5cclxuICAgICAgICB0b2tlbiA9IHJlcGxhY2VtZW50VG9rZW4gfHwgdG9rZW47ICAvLy9cclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICB9LmJpbmQodGhpcyksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRSZXBsYWNlbWVudFRva2VuKHJlcGxhY2VtZW50VG9rZW5JbmRleCkge1xyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbiA9IHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcFtyZXBsYWNlbWVudFRva2VuSW5kZXhdIHx8IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VG9rZW5cclxuICB9XHJcblxyXG4gIGdldFJlcGxhY2VtZW50VG9rZW5JbmRleGVzKCkge1xyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbkluZGV4ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiByZXBsYWNlbWVudFRva2VuSW5kZXhlcztcclxuICB9XHJcblxyXG4gIGdldEZpcnN0VG9rZW5JbmRleChmaXJzdFRva2VuID0gbnVsbCkge1xyXG4gICAgY29uc3Qgd2l0aFJlcGxhY2VtZW50VG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpLFxyXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXHJcbiAgICAgICAgICBmaXJzdFRva2VuSW5kZXggPSAoZmlyc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuaW5kZXhPZihmaXJzdFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gZmlyc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdFRva2VuSW5kZXgobGFzdFRva2VuID0gbnVsbCkge1xyXG4gICAgY29uc3Qgd2l0aFJlcGxhY2VtZW50VG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpLFxyXG4gICAgICAgICAgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcclxuICAgICAgICAgIGxhc3RJbmRleCA9IHRva2Vuc0xlbmd0aCAtIDEsXHJcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IChsYXN0VG9rZW4gPT09IG51bGwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuaW5kZXhPZihsYXN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBsYXN0VG9rZW5JbmRleDtcclxuICB9XHJcblxyXG4gIGFzSFRNTChmaWxlUGF0aCwgd2l0aFJlcGxhY2VtZW50VG9rZW5zKSB7XHJcbiAgICBsZXQgaHRtbDtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpO1xyXG5cclxuICAgIGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTChmaWxlUGF0aCk7XHJcblxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHJlcGxhY2VUb2tlbihyZXBsYWNlZFRva2VuLCByZXBsYWNlbWVudFRva2VuKSB7XHJcbiAgICBjb25zdCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyksXHJcbiAgICAgICAgICByZXBsYWNlZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihyZXBsYWNlZFRva2VuKSxcclxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5JbmRleCA9IHJlcGxhY2VkVG9rZW5JbmRleDsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcFtyZXBsYWNlbWVudFRva2VuSW5kZXhdID0gcmVwbGFjZW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIHNwbGljZVRva2VuKG9sZFRva2VuLCBuZXdUb2tlbiwgbmV3UmVwbGFjZW1lbnRUb2tlbikge1xyXG4gICAgY29uc3Qgb2xkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob2xkVG9rZW4pLFxyXG4gICAgICAgICAgb2xkUmVwbGFjZW1lbnRUb2tlbkluZGV4ID0gb2xkVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICBzdGFydCA9IG9sZFRva2VuSW5kZXgsICAvLy9cclxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTsgIC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld1Rva2VuKTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwW29sZFJlcGxhY2VtZW50VG9rZW5JbmRleF07XHJcbiAgICBcclxuICAgIGlmIChuZXdSZXBsYWNlbWVudFRva2VuKSB7XHJcbiAgICAgIGNvbnN0IG5ld1JlcGxhY2VtZW50VG9rZW5JbmRleCA9IG9sZFRva2VuSW5kZXg7IC8vL1xyXG5cclxuICAgICAgdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwW25ld1JlcGxhY2VtZW50VG9rZW5JbmRleF0gPSBuZXdSZXBsYWNlbWVudFRva2VuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUmVwbGFjZW1lbnRUb2tlbnMoZmlyc3RUb2tlbiwgbGFzdFRva2VuKSB7XHJcbiAgICBjb25zdCByZXBsYWNlbWVudFRva2VuSW5kZXhlcyA9IHRoaXMuZ2V0UmVwbGFjZW1lbnRUb2tlbkluZGV4ZXMoKSxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4pLFxyXG4gICAgICAgICAgbGFzdFRva2VuSW5kZXggPSB0aGlzLmdldExhc3RUb2tlbkluZGV4KGxhc3RUb2tlbik7XHJcblxyXG4gICAgcmVwbGFjZW1lbnRUb2tlbkluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihyZXBsYWNlbWVudFRva2VuSW5kZXgpIHtcclxuICAgICAgaWYgKChyZXBsYWNlbWVudFRva2VuSW5kZXggPj0gZmlyc3RUb2tlbkluZGV4KSAmJiAocmVwbGFjZW1lbnRUb2tlbkluZGV4IDw9IGxhc3RUb2tlbkluZGV4KSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXBbcmVwbGFjZW1lbnRUb2tlbkluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW3RoaXMuY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdW5kZWZpbmVkLCAvLy9cclxuICAgICAgICAgIGluQ29tbWVudCA9IHVuZGVmaW5lZCwgLy9cclxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5NYXAgPSB7fSxcclxuICAgICAgICAgIGxpbmUgPSBuZXcgTGluZShjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIHJlcGxhY2VtZW50VG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MaW5lO1xyXG4iXX0=