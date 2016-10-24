'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line() {
    _classCallCheck(this, Line);

    this.tokens = undefined; ///
  }

  _createClass(Line, [{
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
    key: 'tokensFromContent',
    value: function tokensFromContent(content, context, line, rules, NonSignificantTokens) {
      var nonSignificantTokenOrSignificantContents = NonSignificantTokens.pass(content, context, line),
          tokens = SignificantTokens.pass(nonSignificantTokenOrSignificantContents, line, rules);

      return tokens;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsInRva2VucyIsInVuZGVmaW5lZCIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImdldEhUTUwiLCJvbGRUb2tlbiIsIm5ld1Rva2VuIiwib2xkVG9rZW5JbmRleCIsImluZGV4T2YiLCJuZXdUb2tlbnMiLCJzcGxpY2VBcnJheSIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsInJ1bGVzIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjQyxTQUFkLENBRFksQ0FDYztBQUMzQjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsTUFBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRSxPQUFPLEtBQUtGLE1BQUwsQ0FBWUcsTUFBWixDQUFtQixVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDbEQsWUFBSUMsWUFBWUQsTUFBTUUsT0FBTixFQUFoQjs7QUFFQUosZ0JBQVFHLFNBQVI7O0FBRUEsZUFBT0gsSUFBUDtBQUNELE9BTlUsRUFNUixFQU5RLENBQVg7O0FBUUFBLGNBQVEsSUFBUjs7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7Ozs4QkFFU0YsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7aUNBRVlPLFEsRUFBVUMsUSxFQUFVO0FBQy9CLFVBQUlDLGdCQUFnQmIsS0FBS2MsT0FBTCxDQUFhLEtBQUtWLE1BQWxCLEVBQTBCTyxRQUExQixDQUFwQjtBQUFBLFVBQ0lJLFlBQVksQ0FBQ0gsUUFBRCxDQURoQjs7QUFHQVosV0FBS2dCLFdBQUwsQ0FBaUIsS0FBS1osTUFBdEIsRUFBOEJTLGFBQTlCLEVBQTZDLENBQTdDLEVBQWdERSxTQUFoRDtBQUNEOzs7c0NBRXdCRSxPLEVBQVNDLE8sRUFBU0MsSSxFQUFNQyxLLEVBQU9DLG9CLEVBQXNCO0FBQzVFLFVBQUlDLDJDQUEyQ0QscUJBQXFCRSxJQUFyQixDQUEwQk4sT0FBMUIsRUFBbUNDLE9BQW5DLEVBQTRDQyxJQUE1QyxDQUEvQztBQUFBLFVBQ0lmLFNBQVNGLGtCQUFrQnFCLElBQWxCLENBQXVCRCx3Q0FBdkIsRUFBaUVILElBQWpFLEVBQXVFQyxLQUF2RSxDQURiOztBQUdBLGFBQU9oQixNQUFQO0FBQ0Q7Ozs7OztBQUdIb0IsT0FBT0MsT0FBUCxHQUFpQnRCLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDsgIC8vL1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIHZhciBodG1sID0gdGhpcy50b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIHZhciB0b2tlbkhUTUwgPSB0b2tlbi5nZXRIVE1MKCk7XHJcbiAgICAgIFxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuICBcclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuKSB7XHJcbiAgICB2YXIgb2xkVG9rZW5JbmRleCA9IHV0aWwuaW5kZXhPZih0aGlzLnRva2Vucywgb2xkVG9rZW4pLFxyXG4gICAgICAgIG5ld1Rva2VucyA9IFtuZXdUb2tlbl07XHJcblxyXG4gICAgdXRpbC5zcGxpY2VBcnJheSh0aGlzLnRva2Vucywgb2xkVG9rZW5JbmRleCwgMSwgbmV3VG9rZW5zKTtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIGxpbmUsIHJ1bGVzLCBOb25TaWduaWZpY2FudFRva2Vucykge1xyXG4gICAgdmFyIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMgPSBOb25TaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpLFxyXG4gICAgICAgIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3Mobm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==