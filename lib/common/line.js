'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

var CommonLine = function () {
  function CommonLine(content) {
    _classCallCheck(this, CommonLine);

    this.content = content;

    this.tokens = undefined; ///

    this.inComment = undefined; ///
  }

  _createClass(CommonLine, [{
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
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = this.tokens.reduce(function (html, token) {
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
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, rules, configuration, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
      var line = new Line(content),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, configuration);

      RegularExpressionTokens.pass(tokensOrContents, line);

      StringLiteralTokens.pass(tokensOrContents, line);

      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

      line.setTokens(tokens);

      line.setInComment(inComment);

      return line;
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJDb21tb25MaW5lIiwiY29udGVudCIsInRva2VucyIsInVuZGVmaW5lZCIsImluQ29tbWVudCIsImZpbGVQYXRoIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHVzaCIsIkxpbmUiLCJydWxlcyIsImNvbmZpZ3VyYXRpb24iLCJDb21tZW50VG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsImxpbmUiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsInNldEluQ29tbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBb0JDLFFBQVEsc0JBQVIsQ0FBMUI7O0lBRU1DLFU7QUFDSixzQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkLENBSG1CLENBR087O0FBRTFCLFNBQUtDLFNBQUwsR0FBaUJELFNBQWpCLENBTG1CLENBS1M7QUFDN0I7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsU0FBWjtBQUNEOzs7MkJBRU1DLFEsRUFBVTtBQUNmLFVBQUlDLE9BQU8sS0FBS0osTUFBTCxDQUFZSyxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUN2QyxZQUFNQyxZQUFZRCxNQUFNRSxNQUFOLENBQWFMLFFBQWIsQ0FBbEI7O0FBRUFDLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5ELEVBTUcsRUFOSCxDQUFYOztBQVFBQSxjQUFRLElBQVIsQ0FUZSxDQVNEOztBQUVkLGFBQU9BLElBQVA7QUFDRDs7OzhCQUVTSixNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWUUsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs4QkFFU0ksSyxFQUFPO0FBQ2YsV0FBS04sTUFBTCxDQUFZUyxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7Z0NBRWtCSSxJLEVBQU1YLE8sRUFBU1ksSyxFQUFPQyxhLEVBQWVDLGEsRUFBZUMsdUIsRUFBeUJDLG1CLEVBQXFCQyxnQixFQUFrQjtBQUNySSxVQUFNQyxPQUFPLElBQUlQLElBQUosQ0FBU1gsT0FBVCxDQUFiO0FBQUEsVUFDTW1CLG1CQUFtQixDQUFDbkIsT0FBRCxDQUR6QjtBQUFBLFVBRU1HLFlBQVlXLGNBQWNNLElBQWQsQ0FBbUJELGdCQUFuQixFQUFxQ0QsSUFBckMsRUFBMkNMLGFBQTNDLENBRmxCOztBQUlBRSw4QkFBd0JLLElBQXhCLENBQTZCRCxnQkFBN0IsRUFBK0NELElBQS9DOztBQUVBRiwwQkFBb0JJLElBQXBCLENBQXlCRCxnQkFBekIsRUFBMkNELElBQTNDOztBQUVBRCx1QkFBaUJHLElBQWpCLENBQXNCRCxnQkFBdEIsRUFBd0NELElBQXhDOztBQUVBLFVBQU1qQixTQUFTSixrQkFBa0J1QixJQUFsQixDQUF1QkQsZ0JBQXZCLEVBQXlDRCxJQUF6QyxFQUErQ04sS0FBL0MsQ0FBZjs7QUFFQU0sV0FBS0csU0FBTCxDQUFlcEIsTUFBZjs7QUFFQWlCLFdBQUtJLFlBQUwsQ0FBa0JuQixTQUFsQjs7QUFFQSxhQUFPZSxJQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCekIsVUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7ICAvLy9cclxuICAgIFxyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSB1bmRlZmluZWQ7IC8vL1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGFzSFRNTChmaWxlUGF0aCkge1xyXG4gICAgbGV0IGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoZmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJzsgLy8vXHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW5zKHRva2Vucykge1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBzZXRJbkNvbW1lbnQoaW5Db21tZW50KSB7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24sIENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgU3RyaW5nTGl0ZXJhbFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIFdoaXRlc3BhY2VUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKTtcclxuXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIGxpbmUuc2V0SW5Db21tZW50KGluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxpbmU7XHJcbiJdfQ==