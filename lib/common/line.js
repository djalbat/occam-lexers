'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VucyIsInJlcXVpcmUiLCJMaW5lIiwiY29udGVudCIsInRva2VucyIsInVuZGVmaW5lZCIsImluQ29tbWVudCIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImdldEhUTUwiLCJwdXNoIiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJzZXRUb2tlbnMiLCJzZXRJbkNvbW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQTFCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDs7QUFFQSxTQUFLQyxTQUFMLEdBQWlCRCxTQUFqQjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFNBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUMsT0FBTyxLQUFLSCxNQUFMLENBQVlJLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQzlDLFlBQU1DLFlBQVlELE1BQU1FLE9BQU4sRUFBbEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5NLEVBTUosRUFOSSxDQUFYOztBQVFBQSxjQUFRLElBQVIsQ0FUUSxDQVNNOztBQUVkLGFBQU9BLElBQVA7QUFDRDs7OzhCQUVTSCxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWUUsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs4QkFFU0csSyxFQUFPO0FBQ2YsV0FBS0wsTUFBTCxDQUFZUSxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7Z0NBRWtCUCxJLEVBQU1DLE8sRUFBU1UsTyxFQUFTQyxLLEVBQU9DLGEsRUFBZUMsWSxFQUFjQyxnQixFQUFrQjtBQUMvRixVQUFNQyxPQUFPLElBQUloQixJQUFKLENBQVNDLE9BQVQsQ0FBYjtBQUFBLFVBQ01nQixtQkFBbUIsQ0FBQ2hCLE9BQUQsQ0FEekI7QUFBQSxVQUVNRyxZQUFZUyxjQUFjSyxJQUFkLENBQW1CRCxnQkFBbkIsRUFBcUNELElBQXJDLEVBQTJDTCxPQUEzQyxDQUZsQjs7QUFJQUcsbUJBQWFJLElBQWIsQ0FBa0JELGdCQUFsQixFQUFvQ0QsSUFBcEM7O0FBRUFELHVCQUFpQkcsSUFBakIsQ0FBc0JELGdCQUF0QixFQUF3Q0QsSUFBeEM7O0FBRUEsVUFBTWQsU0FBU0osa0JBQWtCb0IsSUFBbEIsQ0FBdUJELGdCQUF2QixFQUF5Q0QsSUFBekMsRUFBK0NKLEtBQS9DLENBQWY7O0FBRUFJLFdBQUtHLFNBQUwsQ0FBZWpCLE1BQWY7O0FBRUFjLFdBQUtJLFlBQUwsQ0FBa0JoQixTQUFsQjs7QUFFQSxhQUFPWSxJQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCdEIsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICBsZXQgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=