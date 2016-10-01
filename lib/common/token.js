'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(str, line) {
    _classCallCheck(this, Token);

    this.str = str;
    this.line = line;
  }

  _createClass(Token, [{
    key: 'getString',
    value: function getString() {
      return this.str;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getSubstring',
    value: function getSubstring(start, end) {
      return this.str.substring(start, end);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.str.length; ///
    }
  }, {
    key: 'trimFromStart',
    value: function trimFromStart(start) {
      this.str = this.str.substring(start);
    }
  }, {
    key: 'trimToEnd',
    value: function trimToEnd(end) {
      this.str = this.str.substring(0, end);
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJzdHIiLCJsaW5lIiwic3RhcnQiLCJlbmQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUI7QUFBQTs7QUFDckIsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtELEdBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztpQ0FFWUMsSyxFQUFPQyxHLEVBQUs7QUFDdkIsYUFBTyxLQUFLSCxHQUFMLENBQVNJLFNBQVQsQ0FBbUJGLEtBQW5CLEVBQTBCQyxHQUExQixDQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0gsR0FBTCxDQUFTSyxNQUFoQixDQURVLENBQ2M7QUFDekI7OztrQ0FFYUgsSyxFQUFPO0FBQ25CLFdBQUtGLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVNJLFNBQVQsQ0FBbUJGLEtBQW5CLENBQVg7QUFDRDs7OzhCQUVTQyxHLEVBQUs7QUFDYixXQUFLSCxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTSSxTQUFULENBQW1CLENBQW5CLEVBQXNCRCxHQUF0QixDQUFYO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCUixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIsIGxpbmUpIHtcbiAgICB0aGlzLnN0ciA9IHN0cjtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cjtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG4gIFxuICBnZXRTdWJzdHJpbmcoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiB0aGlzLnN0ci5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyLmxlbmd0aDsgLy8vXG4gIH1cblxuICB0cmltRnJvbVN0YXJ0KHN0YXJ0KSB7XG4gICAgdGhpcy5zdHIgPSB0aGlzLnN0ci5zdWJzdHJpbmcoc3RhcnQpO1xuICB9XG5cbiAgdHJpbVRvRW5kKGVuZCkge1xuICAgIHRoaXMuc3RyID0gdGhpcy5zdHIuc3Vic3RyaW5nKDAsIGVuZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==