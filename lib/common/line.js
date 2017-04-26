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

    this.inComment = undefined;
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

      html += '\n'; ///

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(tokenToReplace, token) {
      var indexOfReplacedToken = this.tokens.indexOf(tokenToReplace),
          successful = indexOfReplacedToken > -1;

      if (successful) {
        var start = indexOfReplacedToken,
            deleteCount = 1;

        this.tokens.splice(start, deleteCount, token);
      }

      return successful;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var line = new Line(content),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, context);

      StringTokens.pass(tokensOrContents, line);
      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

      line.setTokens(tokens);

      line.setInComment(inComment);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsInRva2VuVG9SZXBsYWNlIiwiaW5kZXhPZlJlcGxhY2VkVG9rZW4iLCJpbmRleE9mIiwic3VjY2Vzc2Z1bCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJjb250ZXh0IiwicnVsZXMiLCJDb21tZW50VG9rZW5zIiwiU3RyaW5nVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsImxpbmUiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsInNldEluQ29tbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSxxQkFBUixDQUQxQjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7O0FBRUEsU0FBS0MsU0FBTCxHQUFpQkQsU0FBakI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxTQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlDLE9BQU8sS0FBS0gsTUFBTCxDQUFZSSxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUM5QyxZQUFNQyxZQUFZRCxNQUFNRSxPQUFOLEVBQWxCOztBQUVBSixnQkFBUUcsU0FBUjs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOTSxFQU1KLEVBTkksQ0FBWDs7QUFRQUEsY0FBUSxJQUFSLENBVFEsQ0FTTTs7QUFFZCxhQUFPQSxJQUFQO0FBQ0Q7Ozs4QkFFU0gsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7aUNBRVlFLFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7OEJBRVNHLEssRUFBTztBQUNmLFdBQUtMLE1BQUwsQ0FBWVEsSUFBWixDQUFpQkgsS0FBakI7QUFDRDs7O2lDQUVZSSxjLEVBQWdCSixLLEVBQU87QUFDbEMsVUFBTUssdUJBQXVCLEtBQUtWLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkYsY0FBcEIsQ0FBN0I7QUFBQSxVQUNNRyxhQUFjRix1QkFBdUIsQ0FBQyxDQUQ1Qzs7QUFHQSxVQUFJRSxVQUFKLEVBQWdCO0FBQ2QsWUFBTUMsUUFBUUgsb0JBQWQ7QUFBQSxZQUNNSSxjQUFjLENBRHBCOztBQUdBLGFBQUtkLE1BQUwsQ0FBWWUsTUFBWixDQUFtQkYsS0FBbkIsRUFBMEJDLFdBQTFCLEVBQXVDVCxLQUF2QztBQUNEOztBQUVELGFBQU9PLFVBQVA7QUFDRDs7O2dDQUVrQmQsSSxFQUFNQyxPLEVBQVNpQixPLEVBQVNDLEssRUFBT0MsYSxFQUFlQyxZLEVBQWNDLGdCLEVBQWtCO0FBQy9GLFVBQU1DLE9BQU8sSUFBSXZCLElBQUosQ0FBU0MsT0FBVCxDQUFiO0FBQUEsVUFDTXVCLG1CQUFtQixDQUFDdkIsT0FBRCxDQUR6QjtBQUFBLFVBRU1HLFlBQVlnQixjQUFjSyxJQUFkLENBQW1CRCxnQkFBbkIsRUFBcUNELElBQXJDLEVBQTJDTCxPQUEzQyxDQUZsQjs7QUFJQUcsbUJBQWFJLElBQWIsQ0FBa0JELGdCQUFsQixFQUFvQ0QsSUFBcEM7QUFDQUQsdUJBQWlCRyxJQUFqQixDQUFzQkQsZ0JBQXRCLEVBQXdDRCxJQUF4Qzs7QUFFQSxVQUFNckIsU0FBU0gsa0JBQWtCMEIsSUFBbEIsQ0FBdUJELGdCQUF2QixFQUF5Q0QsSUFBekMsRUFBK0NKLEtBQS9DLENBQWY7O0FBRUFJLFdBQUtHLFNBQUwsQ0FBZXhCLE1BQWY7O0FBRUFxQixXQUFLSSxZQUFMLENBQWtCdkIsU0FBbEI7O0FBRUEsYUFBT21CLElBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUI3QixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gdW5kZWZpbmVkO1xyXG4gICAgXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgbGV0IGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJzsgLy8vXHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW5zKHRva2Vucykge1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBzZXRJbkNvbW1lbnQoaW5Db21tZW50KSB7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlVG9rZW4odG9rZW5Ub1JlcGxhY2UsIHRva2VuKSB7XHJcbiAgICBjb25zdCBpbmRleE9mUmVwbGFjZWRUb2tlbiA9IHRoaXMudG9rZW5zLmluZGV4T2YodG9rZW5Ub1JlcGxhY2UpLFxyXG4gICAgICAgICAgc3VjY2Vzc2Z1bCA9IChpbmRleE9mUmVwbGFjZWRUb2tlbiA+IC0xKTtcclxuICAgIFxyXG4gICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleE9mUmVwbGFjZWRUb2tlbixcclxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxOyAgXHJcblxyXG4gICAgICB0aGlzLnRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB0b2tlbik7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZShjb250ZW50KSxcclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCk7XHJcblxyXG4gICAgU3RyaW5nVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=