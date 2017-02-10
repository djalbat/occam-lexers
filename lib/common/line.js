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

    this.previousNumber = null;
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
    key: 'getPreviousNumber',
    value: function getPreviousNumber() {
      return this.previousNumber;
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
    key: 'setPreviousNumber',
    value: function setPreviousNumber(previousNumber) {
      this.previousNumber = previousNumber;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var lineNumber = context.getLineNumber(),
          number = lineNumber,
          ///
      line = new Line(content, number),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, context),
          previousNumber = null;

      StringTokens.pass(tokensOrContents, line);
      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

      line.setTokens(tokens);

      line.setInComment(inComment);

      line.setPreviousNumber(previousNumber);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJudW1iZXIiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJwcmV2aW91c051bWJlciIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImdldEhUTUwiLCJwdXNoIiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lTnVtYmVyIiwiZ2V0TGluZU51bWJlciIsImxpbmUiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsInNldEluQ29tbWVudCIsInNldFByZXZpb3VzTnVtYmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsb0JBQW9CRCxRQUFRLHFCQUFSLENBRHhCOztJQUdNRSxJO0FBQ0osZ0JBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCRCxTQUFqQjs7QUFFQSxTQUFLRSxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtMLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFNBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtDLGNBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUMsT0FBTyxLQUFLSixNQUFMLENBQVlLLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ2xELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBQSxjQUFRLElBQVI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7OEJBRVNMLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWUUsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7OztzQ0FFaUJDLGMsRUFBZ0I7QUFDaEMsV0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OzhCQUVTRyxLLEVBQU87QUFDZixXQUFLTixNQUFMLENBQVlTLElBQVosQ0FBaUJILEtBQWpCO0FBQ0Q7OztnQ0FFa0JULEksRUFBTUMsTyxFQUFTWSxPLEVBQVNDLEssRUFBT0MsYSxFQUFlQyxZLEVBQWNDLGdCLEVBQWtCO0FBQy9GLFVBQUlDLGFBQWFMLFFBQVFNLGFBQVIsRUFBakI7QUFBQSxVQUNJakIsU0FBU2dCLFVBRGI7QUFBQSxVQUMwQjtBQUN0QkUsYUFBTyxJQUFJcEIsSUFBSixDQUFTQyxPQUFULEVBQWtCQyxNQUFsQixDQUZYO0FBQUEsVUFHSW1CLG1CQUFtQixDQUFDcEIsT0FBRCxDQUh2QjtBQUFBLFVBSUlJLFlBQVlVLGNBQWNPLElBQWQsQ0FBbUJELGdCQUFuQixFQUFxQ0QsSUFBckMsRUFBMkNQLE9BQTNDLENBSmhCO0FBQUEsVUFLSVAsaUJBQWlCLElBTHJCOztBQU9BVSxtQkFBYU0sSUFBYixDQUFrQkQsZ0JBQWxCLEVBQW9DRCxJQUFwQztBQUNBSCx1QkFBaUJLLElBQWpCLENBQXNCRCxnQkFBdEIsRUFBd0NELElBQXhDOztBQUVBLFVBQUlqQixTQUFTSixrQkFBa0J1QixJQUFsQixDQUF1QkQsZ0JBQXZCLEVBQXlDRCxJQUF6QyxFQUErQ04sS0FBL0MsQ0FBYjs7QUFFQU0sV0FBS0csU0FBTCxDQUFlcEIsTUFBZjs7QUFFQWlCLFdBQUtJLFlBQUwsQ0FBa0JuQixTQUFsQjs7QUFFQWUsV0FBS0ssaUJBQUwsQ0FBdUJuQixjQUF2Qjs7QUFFQSxhQUFPYyxJQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0IsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMucHJldmlvdXNOdW1iZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzTnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgdmFyIGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgdmFyIHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7XHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyKG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNOdW1iZXIocHJldmlvdXNOdW1iZXIpIHtcclxuICAgIHRoaXMucHJldmlvdXNOdW1iZXIgPSBwcmV2aW91c051bWJlcjtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZU51bWJlciA9IGNvbnRleHQuZ2V0TGluZU51bWJlcigpLFxyXG4gICAgICAgIG51bWJlciA9IGxpbmVOdW1iZXIsICAvLy9cclxuICAgICAgICBsaW5lID0gbmV3IExpbmUoY29udGVudCwgbnVtYmVyKSxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgIGluQ29tbWVudCA9IENvbW1lbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSxcclxuICAgICAgICBwcmV2aW91c051bWJlciA9IG51bGw7XHJcblxyXG4gICAgU3RyaW5nVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgdmFyIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgbGluZS5zZXRJbkNvbW1lbnQoaW5Db21tZW50KTtcclxuXHJcbiAgICBsaW5lLnNldFByZXZpb3VzTnVtYmVyKHByZXZpb3VzTnVtYmVyKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19