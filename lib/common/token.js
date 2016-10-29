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
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJzdHJpbmciLCJsaW5lIiwic3RhcnQiLCJlbmQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtELE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztpQ0FFWUMsSyxFQUFPQyxHLEVBQUs7QUFDdkIsYUFBTyxLQUFLSCxNQUFMLENBQVlJLFNBQVosQ0FBc0JGLEtBQXRCLEVBQTZCQyxHQUE3QixDQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0gsTUFBTCxDQUFZSyxNQUFuQixDQURVLENBQ2lCO0FBQzVCOzs7OEJBRVNMLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2tDQUVhRSxLLEVBQU87QUFDbkIsV0FBS0YsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUksU0FBWixDQUFzQkYsS0FBdEIsQ0FBZDtBQUNEOzs7OEJBRVNDLEcsRUFBSztBQUNiLFdBQUtILE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlJLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUJELEdBQXpCLENBQWQ7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJSLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbGluZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cbiAgXG4gIGdldFN1YnN0cmluZyhzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmcubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG4gIFxuICB0cmltRnJvbVN0YXJ0KHN0YXJ0KSB7XG4gICAgdGhpcy5zdHJpbmcgPSB0aGlzLnN0cmluZy5zdWJzdHJpbmcoc3RhcnQpO1xuICB9XG5cbiAgdHJpbVRvRW5kKGVuZCkge1xuICAgIHRoaXMuc3RyaW5nID0gdGhpcy5zdHJpbmcuc3Vic3RyaW5nKDAsIGVuZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==