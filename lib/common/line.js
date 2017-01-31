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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJudW1iZXIiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJvbGRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm5ld1Rva2VucyIsInNwbGljZUFycmF5IiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lTnVtYmVyIiwiZ2V0TGluZU51bWJlciIsImxpbmUiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsInNldEluQ29tbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUMzQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkQsU0FBakI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsU0FBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQyxPQUFPLEtBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQixVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDbEQsWUFBSUMsWUFBWUQsTUFBTUUsT0FBTixFQUFoQjs7QUFFQUosZ0JBQVFHLFNBQVI7O0FBRUEsZUFBT0gsSUFBUDtBQUNELE9BTlUsRUFNUixFQU5RLENBQVg7O0FBUUFBLGNBQVEsSUFBUjs7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7Ozs4QkFFU0osTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7aUNBRVlHLFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzhCQUVTSyxLLEVBQU87QUFDZixXQUFLTCxNQUFMLENBQVlRLElBQVosQ0FBaUJILEtBQWpCO0FBQ0Q7OztpQ0FFWUksUSxFQUFVQyxRLEVBQVU7QUFDL0IsVUFBSUMsZ0JBQWdCakIsS0FBS2tCLE9BQUwsQ0FBYSxLQUFLWixNQUFsQixFQUEwQlMsUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FoQixXQUFLb0IsV0FBTCxDQUFpQixLQUFLZCxNQUF0QixFQUE4QlcsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0RFLFNBQWhEO0FBQ0Q7OztnQ0FFa0JoQixJLEVBQU1DLE8sRUFBU2lCLE8sRUFBU0MsSyxFQUFPQyxhLEVBQWVDLFksRUFBY0MsZ0IsRUFBa0I7QUFDL0YsVUFBSUMsYUFBYUwsUUFBUU0sYUFBUixFQUFqQjtBQUFBLFVBQ0l0QixTQUFTcUIsVUFEYjtBQUFBLFVBQzBCO0FBQ3RCRSxhQUFPLElBQUl6QixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLENBRlg7QUFBQSxVQUdJd0IsbUJBQW1CLENBQUN6QixPQUFELENBSHZCO0FBQUEsVUFJSUksWUFBWWUsY0FBY08sSUFBZCxDQUFtQkQsZ0JBQW5CLEVBQXFDRCxJQUFyQyxFQUEyQ1AsT0FBM0MsQ0FKaEI7O0FBTUFHLG1CQUFhTSxJQUFiLENBQWtCRCxnQkFBbEIsRUFBb0NELElBQXBDO0FBQ0FILHVCQUFpQkssSUFBakIsQ0FBc0JELGdCQUF0QixFQUF3Q0QsSUFBeEM7O0FBRUEsVUFBSXRCLFNBQVNKLGtCQUFrQjRCLElBQWxCLENBQXVCRCxnQkFBdkIsRUFBeUNELElBQXpDLEVBQStDTixLQUEvQyxDQUFiOztBQUVBTSxXQUFLRyxTQUFMLENBQWV6QixNQUFmOztBQUVBc0IsV0FBS0ksWUFBTCxDQUFrQnhCLFNBQWxCOztBQUVBLGFBQU9vQixJQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCL0IsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICB2YXIgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICB2YXIgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICBcclxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJztcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW5zKHRva2Vucykge1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgfVxyXG4gIFxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG4gIFxyXG4gIHJlcGxhY2VUb2tlbihvbGRUb2tlbiwgbmV3VG9rZW4pIHtcclxuICAgIHZhciBvbGRUb2tlbkluZGV4ID0gdXRpbC5pbmRleE9mKHRoaXMudG9rZW5zLCBvbGRUb2tlbiksXHJcbiAgICAgICAgbmV3VG9rZW5zID0gW25ld1Rva2VuXTtcclxuXHJcbiAgICB1dGlsLnNwbGljZUFycmF5KHRoaXMudG9rZW5zLCBvbGRUb2tlbkluZGV4LCAxLCBuZXdUb2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIHZhciBsaW5lTnVtYmVyID0gY29udGV4dC5nZXRMaW5lTnVtYmVyKCksXHJcbiAgICAgICAgbnVtYmVyID0gbGluZU51bWJlciwgIC8vL1xyXG4gICAgICAgIGxpbmUgPSBuZXcgTGluZShjb250ZW50LCBudW1iZXIpLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sXHJcbiAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIHZhciB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKTtcclxuXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIGxpbmUuc2V0SW5Db21tZW50KGluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==