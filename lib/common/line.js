'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line(content) {
    _classCallCheck(this, Line);

    this.content = content;

    this.tokens = undefined;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n';

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken) {
      var oldTokenIndex = util.indexOf(this.tokens, oldToken),
          newTokens = [newToken];

      util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var line = new Line(content),
          tokens = [];

      if (content !== '') {
        var tokensOrContents = [content];

        CommentTokens.pass(tokensOrContents, line, context);
        StringTokens.pass(tokensOrContents, line);
        WhitespaceTokens.pass(tokensOrContents, line);

        tokens = SignificantTokens.pass(tokensOrContents, line, rules);
      }

      line.setTokens(tokens);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJvbGRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm5ld1Rva2VucyIsInNwbGljZUFycmF5IiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR01FLEk7QUFDSixnQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlFLE9BQU8sS0FBS0YsTUFBTCxDQUFZRyxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUNsRCxZQUFJQyxZQUFZRCxNQUFNRSxPQUFOLEVBQWhCOztBQUVBSixnQkFBUUcsU0FBUjs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOVSxFQU1SLEVBTlEsQ0FBWDs7QUFRQUEsY0FBUSxJQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7OzhCQUVTRixNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs4QkFFU0ksSyxFQUFPO0FBQ2YsV0FBS0osTUFBTCxDQUFZTyxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7aUNBRVlJLFEsRUFBVUMsUSxFQUFVO0FBQy9CLFVBQUlDLGdCQUFnQmYsS0FBS2dCLE9BQUwsQ0FBYSxLQUFLWCxNQUFsQixFQUEwQlEsUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FkLFdBQUtrQixXQUFMLENBQWlCLEtBQUtiLE1BQXRCLEVBQThCVSxhQUE5QixFQUE2QyxDQUE3QyxFQUFnREUsU0FBaEQ7QUFDRDs7O2dDQUVrQmQsSSxFQUFNQyxPLEVBQVNlLE8sRUFBU0MsSyxFQUFPQyxhLEVBQWVDLFksRUFBY0MsZ0IsRUFBa0I7QUFDL0YsVUFBSUMsT0FBTyxJQUFJckIsSUFBSixDQUFTQyxPQUFULENBQVg7QUFBQSxVQUNJQyxTQUFTLEVBRGI7O0FBR0EsVUFBSUQsWUFBWSxFQUFoQixFQUFvQjtBQUNsQixZQUFJcUIsbUJBQW1CLENBQUNyQixPQUFELENBQXZCOztBQUVBaUIsc0JBQWNLLElBQWQsQ0FBbUJELGdCQUFuQixFQUFxQ0QsSUFBckMsRUFBMkNMLE9BQTNDO0FBQ0FHLHFCQUFhSSxJQUFiLENBQWtCRCxnQkFBbEIsRUFBb0NELElBQXBDO0FBQ0FELHlCQUFpQkcsSUFBakIsQ0FBc0JELGdCQUF0QixFQUF3Q0QsSUFBeEM7O0FBRUFuQixpQkFBU0gsa0JBQWtCd0IsSUFBbEIsQ0FBdUJELGdCQUF2QixFQUF5Q0QsSUFBekMsRUFBK0NKLEtBQS9DLENBQVQ7QUFDRDs7QUFFREksV0FBS0csU0FBTCxDQUFldEIsTUFBZjs7QUFFQSxhQUFPbUIsSUFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQjFCLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIHZhciBodG1sID0gdGhpcy50b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIHZhciB0b2tlbkhUTUwgPSB0b2tlbi5nZXRIVE1MKCk7XHJcbiAgICAgIFxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuICBcclxuICBwdXNoVG9rZW4odG9rZW4pIHtcclxuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xyXG4gIH1cclxuICBcclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuKSB7XHJcbiAgICB2YXIgb2xkVG9rZW5JbmRleCA9IHV0aWwuaW5kZXhPZih0aGlzLnRva2Vucywgb2xkVG9rZW4pLFxyXG4gICAgICAgIG5ld1Rva2VucyA9IFtuZXdUb2tlbl07XHJcblxyXG4gICAgdXRpbC5zcGxpY2VBcnJheSh0aGlzLnRva2Vucywgb2xkVG9rZW5JbmRleCwgMSwgbmV3VG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IFtdO1xyXG5cclxuICAgIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgdG9rZW5zT3JDb250ZW50cyA9IFtjb250ZW50XTtcclxuXHJcbiAgICAgIENvbW1lbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KTtcclxuICAgICAgU3RyaW5nVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICAgIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==