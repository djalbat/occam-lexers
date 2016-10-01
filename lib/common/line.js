'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

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
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkxpbmUiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJvbGRUb2tlbiIsIm5ld1Rva2VuIiwib2xkVG9rZW5JbmRleCIsImluZGV4T2YiLCJuZXdUb2tlbnMiLCJzcGxpY2VBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDs7SUFFTUMsSTtBQUNKLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjQyxTQUFkLENBRFksQ0FDYztBQUMzQjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsTUFBWjtBQUNEOzs7OEJBRVNBLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZRSxRLEVBQVVDLFEsRUFBVTtBQUMvQixVQUFJQyxnQkFBZ0JQLEtBQUtRLE9BQUwsQ0FBYSxLQUFLTCxNQUFsQixFQUEwQkUsUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FOLFdBQUtVLFdBQUwsQ0FBaUIsS0FBS1AsTUFBdEIsRUFBOEJJLGFBQTlCLEVBQTZDLENBQTdDLEVBQWdERSxTQUFoRDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDsgIC8vL1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW5zKHRva2Vucykge1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgfVxyXG4gIFxyXG4gIHJlcGxhY2VUb2tlbihvbGRUb2tlbiwgbmV3VG9rZW4pIHtcclxuICAgIHZhciBvbGRUb2tlbkluZGV4ID0gdXRpbC5pbmRleE9mKHRoaXMudG9rZW5zLCBvbGRUb2tlbiksXHJcbiAgICAgICAgbmV3VG9rZW5zID0gW25ld1Rva2VuXTtcclxuXHJcbiAgICB1dGlsLnNwbGljZUFycmF5KHRoaXMudG9rZW5zLCBvbGRUb2tlbkluZGV4LCAxLCBuZXdUb2tlbnMpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=