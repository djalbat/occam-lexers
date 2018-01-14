'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

var CommonLine = function () {
  function CommonLine(content, rules, tokens, inComment, configuration, replacementTokenMap) {
    _classCallCheck(this, CommonLine);

    this.content = content;
    this.rules = rules;
    this.tokens = tokens;
    this.inComment = inComment;
    this.configuration = configuration;
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
    key: 'getConfiguration',
    value: function getConfiguration() {
      return this.configuration;
    }
  }, {
    key: 'getReplacementTokenMap',
    value: function getReplacementTokenMap() {
      return this.replacementTokenMap;
    }
  }, {
    key: 'getIndexes',
    value: function getIndexes() {
      var indexes = Object.keys(this.replacementTokenMap);

      return indexes;
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
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(replacedToken, replacementToken) {
      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          replacedTokenIndex = tokens.indexOf(replacedToken),
          index = replacedTokenIndex; ///

      this.replacementTokenMap[index] = replacementToken;
    }
  }, {
    key: 'removeReplacementTokens',
    value: function removeReplacementTokens(firstToken, lastToken) {
      var indexes = this.getIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

      indexes.forEach(function (index) {
        if (index >= firstTokenIndex && index <= lastTokenIndex) {
          delete this.replacementTokenMap[index];
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
      line = new Line(content, rules, tokens, inComment, configuration);

      return line;
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInJ1bGVzIiwidG9rZW5zIiwiaW5Db21tZW50IiwiY29uZmlndXJhdGlvbiIsInJlcGxhY2VtZW50VG9rZW5NYXAiLCJ3aXRoUmVwbGFjZW1lbnRUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImluZGV4IiwicmVwbGFjZW1lbnRUb2tlbiIsInB1c2giLCJiaW5kIiwiaW5kZXhlcyIsIk9iamVjdCIsImtleXMiLCJmaXJzdFRva2VuIiwiZ2V0VG9rZW5zIiwiZmlyc3RJbmRleCIsImZpcnN0VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0VG9rZW4iLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJsYXN0VG9rZW5JbmRleCIsImZpbGVQYXRoIiwiaHRtbCIsInRva2VuSFRNTCIsImFzSFRNTCIsInJlcGxhY2VkVG9rZW4iLCJyZXBsYWNlZFRva2VuSW5kZXgiLCJnZXRJbmRleGVzIiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwiZ2V0TGFzdFRva2VuSW5kZXgiLCJmb3JFYWNoIiwiQ29tbWVudFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJMaW5lIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsUUFBUSxzQkFBUixDQUExQjs7SUFFTUMsVTtBQUNKLHNCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0NDLFNBQXBDLEVBQStDQyxhQUEvQyxFQUE4REMsbUJBQTlELEVBQW1GO0FBQUE7O0FBQ2pGLFNBQUtMLE9BQUwsR0FBZUEs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O0FBRUEsV0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7O3FEQUV1Q3dDLEksRUFBTTNDLE8sRUFBU0MsSyxFQUFPRyxhLEVBQWU7QUFDM0UsVUFBTUYsU0FBUzBDLFNBQWY7QUFBQSxVQUEwQjtBQUNwQnpDLGtCQUFZeUMsU0FEbEI7QUFBQSxVQUM2QjtBQUN2QkosYUFBTyxJQUFJRyxJQUFKLENBQVMzQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUNDLFNBQWpDLEVBQTRDQyxhQUE1QyxDQUZiOztBQUlBLGFBQU9vQyxJQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCL0MsVUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHJ1bGVzLCB0b2tlbnMsIGluQ29tbWVudCwgY29uZmlndXJhdGlvbiwgcmVwbGFjZW1lbnRUb2tlbk1hcCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSBpbkNvbW1lbnQ7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwID0gcmVwbGFjZW1lbnRUb2tlbk1hcDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIGdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSkge1xyXG4gICAgbGV0IHRva2VucyA9IHRoaXMudG9rZW5zO1xyXG5cclxuICAgIGlmICh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpIHtcclxuICAgICAgdG9rZW5zID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSB0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXBbaW5kZXhdO1xyXG5cclxuICAgICAgICB0b2tlbiA9IHJlcGxhY2VtZW50VG9rZW4gfHwgdG9rZW47ICAvLy9cclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICB9LmJpbmQodGhpcyksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIGdldFJlcGxhY2VtZW50VG9rZW5NYXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhlcygpIHtcclxuICAgIGNvbnN0IGluZGV4ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBpbmRleGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyksXHJcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IChmaXJzdFRva2VuID09PSBudWxsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGZpcnN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBmaXJzdFRva2VuSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0VG9rZW5JbmRleChsYXN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyksXHJcbiAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgbGFzdEluZGV4ID0gdG9rZW5zTGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGxhc3RUb2tlbkluZGV4ID0gKGxhc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGxhc3RUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGxhc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgYXNIVE1MKGZpbGVQYXRoLCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMpIHtcclxuICAgIGxldCBodG1sO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2Vucyk7XHJcblxyXG4gICAgaHRtbCA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKGZpbGVQYXRoKTtcclxuXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG5cclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7IC8vL1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlVG9rZW4ocmVwbGFjZWRUb2tlbiwgcmVwbGFjZW1lbnRUb2tlbikge1xyXG4gICAgY29uc3Qgd2l0aFJlcGxhY2VtZW50VG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpLFxyXG4gICAgICAgICAgcmVwbGFjZWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YocmVwbGFjZWRUb2tlbiksXHJcbiAgICAgICAgICBpbmRleCA9IHJlcGxhY2VkVG9rZW5JbmRleDsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcFtpbmRleF0gPSByZXBsYWNlbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUmVwbGFjZW1lbnRUb2tlbnMoZmlyc3RUb2tlbiwgbGFzdFRva2VuKSB7XHJcbiAgICBjb25zdCBpbmRleGVzID0gdGhpcy5nZXRJbmRleGVzKCksXHJcbiAgICAgICAgICBmaXJzdFRva2VuSW5kZXggPSB0aGlzLmdldEZpcnN0VG9rZW5JbmRleChmaXJzdFRva2VuKSxcclxuICAgICAgICAgIGxhc3RUb2tlbkluZGV4ID0gdGhpcy5nZXRMYXN0VG9rZW5JbmRleChsYXN0VG9rZW4pO1xyXG5cclxuICAgIGluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBpZiAoKGluZGV4ID49IGZpcnN0VG9rZW5JbmRleCkgJiYgKGluZGV4IDw9IGxhc3RUb2tlbkluZGV4KSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXBbaW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucykge1xyXG4gICAgY29uc3QgbGluZSA9IHRoaXMsICAvLy9cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBbdGhpcy5jb250ZW50XSxcclxuICAgICAgICAgIGluQ29tbWVudCA9IENvbW1lbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCB0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgU3RyaW5nTGl0ZXJhbFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIFdoaXRlc3BhY2VUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHRoaXMucnVsZXMpO1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG5cclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKExpbmUsIGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSB1bmRlZmluZWQsIC8vL1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gdW5kZWZpbmVkLCAvL1xyXG4gICAgICAgICAgbGluZSA9IG5ldyBMaW5lKGNvbnRlbnQsIHJ1bGVzLCB0b2tlbnMsIGluQ29tbWVudCwgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxpbmU7XHJcbiJdfQ==