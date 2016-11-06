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
    value: function fromContent(content, context, rules, Line, CommentTokens, StringTokens, WhitespaceTokens) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJvbGRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm5ld1Rva2VucyIsInNwbGljZUFycmF5IiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR01FLEk7QUFDSixnQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlFLE9BQU8sS0FBS0YsTUFBTCxDQUFZRyxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUNsRCxZQUFJQyxZQUFZRCxNQUFNRSxPQUFOLEVBQWhCOztBQUVBSixnQkFBUUcsU0FBUjs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOVSxFQU1SLEVBTlEsQ0FBWDs7QUFRQUEsY0FBUSxJQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7OzhCQUVTRixNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs4QkFFU0ksSyxFQUFPO0FBQ2YsV0FBS0osTUFBTCxDQUFZTyxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7aUNBRVlJLFEsRUFBVUMsUSxFQUFVO0FBQy9CLFVBQUlDLGdCQUFnQmYsS0FBS2dCLE9BQUwsQ0FBYSxLQUFLWCxNQUFsQixFQUEwQlEsUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FkLFdBQUtrQixXQUFMLENBQWlCLEtBQUtiLE1BQXRCLEVBQThCVSxhQUE5QixFQUE2QyxDQUE3QyxFQUFnREUsU0FBaEQ7QUFDRDs7O2dDQUVrQmIsTyxFQUFTZSxPLEVBQVNDLEssRUFBT2pCLEksRUFBTWtCLGEsRUFBZUMsWSxFQUFjQyxnQixFQUFrQjtBQUMvRixVQUFJQyxPQUFPLElBQUlyQixJQUFKLENBQVNDLE9BQVQsQ0FBWDtBQUFBLFVBQ0lDLFNBQVMsRUFEYjs7QUFHQSxVQUFJRCxZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQUlxQixtQkFBbUIsQ0FBQ3JCLE9BQUQsQ0FBdkI7O0FBRUFpQixzQkFBY0ssSUFBZCxDQUFtQkQsZ0JBQW5CLEVBQXFDRCxJQUFyQyxFQUEyQ0wsT0FBM0M7QUFDQUcscUJBQWFJLElBQWIsQ0FBa0JELGdCQUFsQixFQUFvQ0QsSUFBcEM7QUFDQUQseUJBQWlCRyxJQUFqQixDQUFzQkQsZ0JBQXRCLEVBQXdDRCxJQUF4Qzs7QUFFQW5CLGlCQUFTSCxrQkFBa0J3QixJQUFsQixDQUF1QkQsZ0JBQXZCLEVBQXlDRCxJQUF6QyxFQUErQ0osS0FBL0MsQ0FBVDtBQUNEOztBQUVESSxXQUFLRyxTQUFMLENBQWV0QixNQUFmOztBQUVBLGFBQU9tQixJQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCMUIsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgdmFyIGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgdmFyIHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7XHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW5zKHRva2Vucykge1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgfVxyXG4gIFxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG4gIFxyXG4gIHJlcGxhY2VUb2tlbihvbGRUb2tlbiwgbmV3VG9rZW4pIHtcclxuICAgIHZhciBvbGRUb2tlbkluZGV4ID0gdXRpbC5pbmRleE9mKHRoaXMudG9rZW5zLCBvbGRUb2tlbiksXHJcbiAgICAgICAgbmV3VG9rZW5zID0gW25ld1Rva2VuXTtcclxuXHJcbiAgICB1dGlsLnNwbGljZUFycmF5KHRoaXMudG9rZW5zLCBvbGRUb2tlbkluZGV4LCAxLCBuZXdUb2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBMaW5lLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIHZhciBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgdG9rZW5zID0gW107XHJcblxyXG4gICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdO1xyXG5cclxuICAgICAgQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG4gICAgICBTdHJpbmdUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuICAgICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgICAgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19