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
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken) {
      var oldTokenIndex = util.indexOf(this.tokens, oldToken),
          newTokens = [newToken];

      util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, context, rules, Line, NonSignificantTokens) {
      var line = new Line(),
          nonSignificantTokenOrSignificantContents = NonSignificantTokens.pass(content, context, line),
          tokens = SignificantTokens.pass(nonSignificantTokenOrSignificantContents, line, rules);

      line.setTokens(tokens);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwib2xkVG9rZW4iLCJuZXdUb2tlbiIsIm9sZFRva2VuSW5kZXgiLCJpbmRleE9mIiwibmV3VG9rZW5zIiwic3BsaWNlQXJyYXkiLCJjb250ZXh0IiwicnVsZXMiLCJOb25TaWduaWZpY2FudFRva2VucyIsImxpbmUiLCJub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUUsT0FBTyxLQUFLRixNQUFMLENBQVlHLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ2xELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBQSxjQUFRLElBQVI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZTyxRLEVBQVVDLFEsRUFBVTtBQUMvQixVQUFJQyxnQkFBZ0JkLEtBQUtlLE9BQUwsQ0FBYSxLQUFLVixNQUFsQixFQUEwQk8sUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FiLFdBQUtpQixXQUFMLENBQWlCLEtBQUtaLE1BQXRCLEVBQThCUyxhQUE5QixFQUE2QyxDQUE3QyxFQUFnREUsU0FBaEQ7QUFDRDs7O2dDQUVrQlosTyxFQUFTYyxPLEVBQVNDLEssRUFBT2hCLEksRUFBTWlCLG9CLEVBQXNCO0FBQ3RFLFVBQUlDLE9BQU8sSUFBSWxCLElBQUosRUFBWDtBQUFBLFVBQ0ltQiwyQ0FBMkNGLHFCQUFxQkcsSUFBckIsQ0FBMEJuQixPQUExQixFQUFtQ2MsT0FBbkMsRUFBNENHLElBQTVDLENBRC9DO0FBQUEsVUFFSWhCLFNBQVNILGtCQUFrQnFCLElBQWxCLENBQXVCRCx3Q0FBdkIsRUFBaUVELElBQWpFLEVBQXVFRixLQUF2RSxDQUZiOztBQUlBRSxXQUFLRyxTQUFMLENBQWVuQixNQUFmOztBQUVBLGFBQU9nQixJQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCdkIsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgdmFyIGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgdmFyIHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7XHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW5zKHRva2Vucykge1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgfVxyXG4gIFxyXG4gIHJlcGxhY2VUb2tlbihvbGRUb2tlbiwgbmV3VG9rZW4pIHtcclxuICAgIHZhciBvbGRUb2tlbkluZGV4ID0gdXRpbC5pbmRleE9mKHRoaXMudG9rZW5zLCBvbGRUb2tlbiksXHJcbiAgICAgICAgbmV3VG9rZW5zID0gW25ld1Rva2VuXTtcclxuXHJcbiAgICB1dGlsLnNwbGljZUFycmF5KHRoaXMudG9rZW5zLCBvbGRUb2tlbkluZGV4LCAxLCBuZXdUb2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBMaW5lLCBOb25TaWduaWZpY2FudFRva2Vucykge1xyXG4gICAgdmFyIGxpbmUgPSBuZXcgTGluZSgpLFxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMgPSBOb25TaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpLFxyXG4gICAgICAgIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3Mobm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==