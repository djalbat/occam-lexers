'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line(content, number) {
    _classCallCheck(this, Line);

    this.content = content;
    this.number = number;

    this.tokens = undefined;
    this.inComment = undefined;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getNumber',
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      return this.inComment;
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
    key: 'setNumber',
    value: function setNumber(number) {
      this.number = number;
    }
  }, {
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
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
      var lineNumber = context.getLineNumber(),
          number = lineNumber,
          ///
      line = new Line(content, number),
          tokens = [];

      if (content !== '') {
        var tokensOrContents = [content],
            inComment = CommentTokens.pass(tokensOrContents, line, context);

        StringTokens.pass(tokensOrContents, line);
        WhitespaceTokens.pass(tokensOrContents, line);

        tokens = SignificantTokens.pass(tokensOrContents, line, rules);
      }

      line.setTokens(tokens);

      line.setInComment(inComment);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJudW1iZXIiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJvbGRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm5ld1Rva2VucyIsInNwbGljZUFycmF5IiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lTnVtYmVyIiwiZ2V0TGluZU51bWJlciIsImxpbmUiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsInNldEluQ29tbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUMzQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkQsU0FBakI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsU0FBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQyxPQUFPLEtBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQixVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDbEQsWUFBSUMsWUFBWUQsTUFBTUUsT0FBTixFQUFoQjs7QUFFQUosZ0JBQVFHLFNBQVI7O0FBRUEsZUFBT0gsSUFBUDtBQUNELE9BTlUsRUFNUixFQU5RLENBQVg7O0FBUUFBLGNBQVEsSUFBUjs7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7Ozs4QkFFU0osTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7aUNBRVlHLFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzhCQUVTSyxLLEVBQU87QUFDZixXQUFLTCxNQUFMLENBQVlRLElBQVosQ0FBaUJILEtBQWpCO0FBQ0Q7OztpQ0FFWUksUSxFQUFVQyxRLEVBQVU7QUFDL0IsVUFBSUMsZ0JBQWdCakIsS0FBS2tCLE9BQUwsQ0FBYSxLQUFLWixNQUFsQixFQUEwQlMsUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FoQixXQUFLb0IsV0FBTCxDQUFpQixLQUFLZCxNQUF0QixFQUE4QlcsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0RFLFNBQWhEO0FBQ0Q7OztnQ0FFa0JoQixJLEVBQU1DLE8sRUFBU2lCLE8sRUFBU0MsSyxFQUFPQyxhLEVBQWVDLFksRUFBY0MsZ0IsRUFBa0I7QUFDL0YsVUFBSUMsYUFBYUwsUUFBUU0sYUFBUixFQUFqQjtBQUFBLFVBQ0l0QixTQUFTcUIsVUFEYjtBQUFBLFVBQzBCO0FBQ3RCRSxhQUFPLElBQUl6QixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLENBRlg7QUFBQSxVQUdJQyxTQUFTLEVBSGI7O0FBS0EsVUFBSUYsWUFBWSxFQUFoQixFQUFvQjtBQUNsQixZQUFJeUIsbUJBQW1CLENBQUN6QixPQUFELENBQXZCO0FBQUEsWUFDSUksWUFBWWUsY0FBY08sSUFBZCxDQUFtQkQsZ0JBQW5CLEVBQXFDRCxJQUFyQyxFQUEyQ1AsT0FBM0MsQ0FEaEI7O0FBR0FHLHFCQUFhTSxJQUFiLENBQWtCRCxnQkFBbEIsRUFBb0NELElBQXBDO0FBQ0FILHlCQUFpQkssSUFBakIsQ0FBc0JELGdCQUF0QixFQUF3Q0QsSUFBeEM7O0FBRUF0QixpQkFBU0osa0JBQWtCNEIsSUFBbEIsQ0FBdUJELGdCQUF2QixFQUF5Q0QsSUFBekMsRUFBK0NOLEtBQS9DLENBQVQ7QUFDRDs7QUFFRE0sV0FBS0csU0FBTCxDQUFlekIsTUFBZjs7QUFFQXNCLFdBQUtJLFlBQUwsQ0FBa0J4QixTQUFsQjs7QUFFQSxhQUFPb0IsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQi9CLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudCwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgdmFyIGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgdmFyIHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7XHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyKG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXRJbkNvbW1lbnQoaW5Db21tZW50KSB7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuICBcclxuICBwdXNoVG9rZW4odG9rZW4pIHtcclxuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xyXG4gIH1cclxuICBcclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuKSB7XHJcbiAgICB2YXIgb2xkVG9rZW5JbmRleCA9IHV0aWwuaW5kZXhPZih0aGlzLnRva2Vucywgb2xkVG9rZW4pLFxyXG4gICAgICAgIG5ld1Rva2VucyA9IFtuZXdUb2tlbl07XHJcblxyXG4gICAgdXRpbC5zcGxpY2VBcnJheSh0aGlzLnRva2Vucywgb2xkVG9rZW5JbmRleCwgMSwgbmV3VG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZU51bWJlciA9IGNvbnRleHQuZ2V0TGluZU51bWJlcigpLFxyXG4gICAgICAgIG51bWJlciA9IGxpbmVOdW1iZXIsICAvLy9cclxuICAgICAgICBsaW5lID0gbmV3IExpbmUoY29udGVudCwgbnVtYmVyKSxcclxuICAgICAgICB0b2tlbnMgPSBbXTtcclxuXHJcbiAgICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgdmFyIHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCk7XHJcblxyXG4gICAgICBTdHJpbmdUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuICAgICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgICAgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=