'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(string, line) {
    _classCallCheck(this, Token);

    this.string = string;
    this.line = line;
  }

  _createClass(Token, [{
    key: 'getString',
    value: function getString() {
      return this.string;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getSubstring',
    value: function getSubstring(start, end) {
      return this.string.substring(start, end);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.string.length; ///
    }
  }, {
    key: 'setString',
    value: function setString(string) {
      this.string = string;
    }
  }, {
    key: 'trimFromStart',
    value: function trimFromStart(start) {
      this.string = this.string.substring(start);
    }
  }, {
    key: 'trimToEnd',
    value: function trimToEnd(end) {
      this.string = this.string.substring(0, end);
    }
  }], [{
    key: 'withStartTrimmed',
    value: function withStartTrimmed(token, start) {
      var length = token.getLength();

      if (start === length) {
        return null;
      }

      var clonedToken = token.clone(),
          tokenWithStartTrimmed = clonedToken; ///

      tokenWithStartTrimmed.trimFromStart(start);

      return tokenWithStartTrimmed;
    }
  }, {
    key: 'withEndTrimmed',
    value: function withEndTrimmed(token, end) {
      if (end === 0) {
        return null;
      }

      var clonedToken = token.clone(),
          tokenWithEndTrimmed = clonedToken; ///

      tokenWithEndTrimmed.trimToEnd(end);

      return tokenWithEndTrimmed;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJzdHJpbmciLCJsaW5lIiwic3RhcnQiLCJlbmQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJ0b2tlbiIsImdldExlbmd0aCIsImNsb25lZFRva2VuIiwiY2xvbmUiLCJ0b2tlbldpdGhTdGFydFRyaW1tZWQiLCJ0cmltRnJvbVN0YXJ0IiwidG9rZW5XaXRoRW5kVHJpbW1lZCIsInRyaW1Ub0VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQjtBQUFBOztBQUN4QixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsTUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2lDQUVZQyxLLEVBQU9DLEcsRUFBSztBQUN2QixhQUFPLEtBQUtILE1BQUwsQ0FBWUksU0FBWixDQUFzQkYsS0FBdEIsRUFBNkJDLEdBQTdCLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSCxNQUFMLENBQVlLLE1BQW5CLENBRFUsQ0FDaUI7QUFDNUI7Ozs4QkFFU0wsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7a0NBRWFFLEssRUFBTztBQUNuQixXQUFLRixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZSSxTQUFaLENBQXNCRixLQUF0QixDQUFkO0FBQ0Q7Ozs4QkFFU0MsRyxFQUFLO0FBQ2IsV0FBS0gsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUksU0FBWixDQUFzQixDQUF0QixFQUF5QkQsR0FBekIsQ0FBZDtBQUNEOzs7cUNBRXVCRyxLLEVBQU9KLEssRUFBTztBQUNwQyxVQUFJRyxTQUFTQyxNQUFNQyxTQUFOLEVBQWI7O0FBRUEsVUFBSUwsVUFBVUcsTUFBZCxFQUFzQjtBQUNwQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJRyxjQUFjRixNQUFNRyxLQUFOLEVBQWxCO0FBQUEsVUFDSUMsd0JBQXdCRixXQUQ1QixDQVBvQyxDQVFNOztBQUUxQ0UsNEJBQXNCQyxhQUF0QixDQUFvQ1QsS0FBcEM7O0FBRUEsYUFBT1EscUJBQVA7QUFDRDs7O21DQUVxQkosSyxFQUFPSCxHLEVBQUs7QUFDaEMsVUFBSUEsUUFBUSxDQUFaLEVBQWU7QUFDYixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJSyxjQUFjRixNQUFNRyxLQUFOLEVBQWxCO0FBQUEsVUFDSUcsc0JBQXNCSixXQUQxQixDQUxnQyxDQU1ROztBQUV4Q0ksMEJBQW9CQyxTQUFwQixDQUE4QlYsR0FBOUI7O0FBRUEsYUFBT1MsbUJBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGxpbmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG4gIFxuICBnZXRTdWJzdHJpbmcoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nLmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuICBcbiAgdHJpbUZyb21TdGFydChzdGFydCkge1xuICAgIHRoaXMuc3RyaW5nID0gdGhpcy5zdHJpbmcuc3Vic3RyaW5nKHN0YXJ0KTtcbiAgfVxuXG4gIHRyaW1Ub0VuZChlbmQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHRoaXMuc3RyaW5nLnN1YnN0cmluZygwLCBlbmQpO1xuICB9XG5cbiAgc3RhdGljIHdpdGhTdGFydFRyaW1tZWQodG9rZW4sIHN0YXJ0KSB7XG4gICAgdmFyIGxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHN0YXJ0ID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCksXG4gICAgICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZCA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0b2tlbldpdGhTdGFydFRyaW1tZWQudHJpbUZyb21TdGFydChzdGFydCk7XG5cbiAgICByZXR1cm4gdG9rZW5XaXRoU3RhcnRUcmltbWVkO1xuICB9XG5cbiAgc3RhdGljIHdpdGhFbmRUcmltbWVkKHRva2VuLCBlbmQpIHtcbiAgICBpZiAoZW5kID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpLFxuICAgICAgICB0b2tlbldpdGhFbmRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aEVuZFRyaW1tZWQudHJpbVRvRW5kKGVuZCk7XG5cbiAgICByZXR1cm4gdG9rZW5XaXRoRW5kVHJpbW1lZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19