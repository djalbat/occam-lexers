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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJudW1iZXIiLCJpbnRlcm1lZGlhdGVOdW1iZXIiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsImNvbnRleHQiLCJydWxlcyIsIkNvbW1lbnRUb2tlbnMiLCJTdHJpbmdUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwibGluZSIsInRva2Vuc09yQ29udGVudHMiLCJwYXNzIiwic2V0VG9rZW5zIiwic2V0SW5Db21tZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHFCQUFSLENBRDFCOztJQUdNRSxJO0FBQ0osZ0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJELFNBQWpCO0FBQ0EsU0FBS0UsTUFBTCxHQUFjRixTQUFkOztBQUVBLFNBQUtHLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtMLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsU0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlDLE9BQU8sS0FBS0wsTUFBTCxDQUFZTSxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUM5QyxZQUFNQyxZQUFZRCxNQUFNRSxPQUFOLEVBQWxCOztBQUVBSixnQkFBUUcsU0FBUjs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOTSxFQU1KLEVBTkksQ0FBWDs7QUFRQUEsY0FBUSxJQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7OzhCQUVTTCxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWUUsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7MENBRXFCQyxrQixFQUFvQjtBQUN4QyxXQUFLQSxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0Q7Ozs4QkFFU0csSyxFQUFPO0FBQ2YsV0FBS1AsTUFBTCxDQUFZVSxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7Z0NBRWtCVCxJLEVBQU1DLE8sRUFBU1ksTyxFQUFTQyxLLEVBQU9DLGEsRUFBZUMsWSxFQUFjQyxnQixFQUFrQjtBQUMvRixVQUFNQyxPQUFPLElBQUlsQixJQUFKLENBQVNDLE9BQVQsQ0FBYjtBQUFBLFVBQ01rQixtQkFBbUIsQ0FBQ2xCLE9BQUQsQ0FEekI7QUFBQSxVQUVNRyxZQUFZVyxjQUFjSyxJQUFkLENBQW1CRCxnQkFBbkIsRUFBcUNELElBQXJDLEVBQTJDTCxPQUEzQyxDQUZsQjs7QUFJQUcsbUJBQWFJLElBQWIsQ0FBa0JELGdCQUFsQixFQUFvQ0QsSUFBcEM7QUFDQUQsdUJBQWlCRyxJQUFqQixDQUFzQkQsZ0JBQXRCLEVBQXdDRCxJQUF4Qzs7QUFFQSxVQUFNaEIsU0FBU0gsa0JBQWtCcUIsSUFBbEIsQ0FBdUJELGdCQUF2QixFQUF5Q0QsSUFBekMsRUFBK0NKLEtBQS9DLENBQWY7O0FBRUFJLFdBQUtHLFNBQUwsQ0FBZW5CLE1BQWY7O0FBRUFnQixXQUFLSSxZQUFMLENBQWtCbEIsU0FBbEI7O0FBRUEsYUFBT2MsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnhCLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubnVtYmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlTnVtYmVyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRJbnRlcm1lZGlhdGVOdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcm1lZGlhdGVOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgbGV0IGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJztcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyKG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcm1lZGlhdGVOdW1iZXIoaW50ZXJtZWRpYXRlTnVtYmVyKSB7XHJcbiAgICB0aGlzLmludGVybWVkaWF0ZU51bWJlciA9IGludGVybWVkaWF0ZU51bWJlcjtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgbGluZS5zZXRJbkNvbW1lbnQoaW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19