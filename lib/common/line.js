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
    this.number = undefined;

    this.intermediateNumber = null;
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
    key: 'getNumber',
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: 'getIntermediateNumber',
    value: function getIntermediateNumber() {
      return this.intermediateNumber;
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
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
    }
  }, {
    key: 'setNumber',
    value: function setNumber(number) {
      this.number = number;
    }
  }, {
    key: 'setIntermediateNumber',
    value: function setIntermediateNumber(intermediateNumber) {
      this.intermediateNumber = intermediateNumber;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJudW1iZXIiLCJpbnRlcm1lZGlhdGVOdW1iZXIiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsImNvbnRleHQiLCJydWxlcyIsIkNvbW1lbnRUb2tlbnMiLCJTdHJpbmdUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwibGluZSIsInRva2Vuc09yQ29udGVudHMiLCJwYXNzIiwic2V0VG9rZW5zIiwic2V0SW5Db21tZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsb0JBQW9CRCxRQUFRLHFCQUFSLENBRHhCOztJQUdNRSxJO0FBQ0osZ0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJELFNBQWpCO0FBQ0EsU0FBS0UsTUFBTCxHQUFjRixTQUFkOztBQUVBLFNBQUtHLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtMLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsU0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlDLE9BQU8sS0FBS0wsTUFBTCxDQUFZTSxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUNsRCxZQUFJQyxZQUFZRCxNQUFNRSxPQUFOLEVBQWhCOztBQUVBSixnQkFBUUcsU0FBUjs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOVSxFQU1SLEVBTlEsQ0FBWDs7QUFRQUEsY0FBUSxJQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7OzhCQUVTTCxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWUUsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7MENBRXFCQyxrQixFQUFvQjtBQUN4QyxXQUFLQSxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0Q7Ozs4QkFFU0csSyxFQUFPO0FBQ2YsV0FBS1AsTUFBTCxDQUFZVSxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7Z0NBRWtCVCxJLEVBQU1DLE8sRUFBU1ksTyxFQUFTQyxLLEVBQU9DLGEsRUFBZUMsWSxFQUFjQyxnQixFQUFrQjtBQUMvRixVQUFJQyxPQUFPLElBQUlsQixJQUFKLENBQVNDLE9BQVQsQ0FBWDtBQUFBLFVBQ0lrQixtQkFBbUIsQ0FBQ2xCLE9BQUQsQ0FEdkI7QUFBQSxVQUVJRyxZQUFZVyxjQUFjSyxJQUFkLENBQW1CRCxnQkFBbkIsRUFBcUNELElBQXJDLEVBQTJDTCxPQUEzQyxDQUZoQjs7QUFJQUcsbUJBQWFJLElBQWIsQ0FBa0JELGdCQUFsQixFQUFvQ0QsSUFBcEM7QUFDQUQsdUJBQWlCRyxJQUFqQixDQUFzQkQsZ0JBQXRCLEVBQXdDRCxJQUF4Qzs7QUFFQSxVQUFJaEIsU0FBU0gsa0JBQWtCcUIsSUFBbEIsQ0FBdUJELGdCQUF2QixFQUF5Q0QsSUFBekMsRUFBK0NKLEtBQS9DLENBQWI7O0FBRUFJLFdBQUtHLFNBQUwsQ0FBZW5CLE1BQWY7O0FBRUFnQixXQUFLSSxZQUFMLENBQWtCbEIsU0FBbEI7O0FBRUEsYUFBT2MsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnhCLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5udW1iZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVOdW1iZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldE51bWJlcigpIHtcclxuICAgIHJldHVybiB0aGlzLm51bWJlcjtcclxuICB9XHJcblxyXG4gIGdldEludGVybWVkaWF0ZU51bWJlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmludGVybWVkaWF0ZU51bWJlcjtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICB2YXIgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICB2YXIgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICBcclxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJztcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyKG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcm1lZGlhdGVOdW1iZXIoaW50ZXJtZWRpYXRlTnVtYmVyKSB7XHJcbiAgICB0aGlzLmludGVybWVkaWF0ZU51bWJlciA9IGludGVybWVkaWF0ZU51bWJlcjtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sXHJcbiAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIHZhciB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKTtcclxuXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIGxpbmUuc2V0SW5Db21tZW50KGluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==