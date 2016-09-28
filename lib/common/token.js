'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(str) {
    _classCallCheck(this, Token);

    this.str = str;
  }

  _createClass(Token, [{
    key: 'getString',
    value: function getString() {
      return this.str;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJzdHIiLCJzdGFydCIsImVuZCIsInN1YnN0cmluZyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLEdBQVo7QUFDRDs7O2lDQUVZQyxLLEVBQU9DLEcsRUFBSztBQUN2QixhQUFPLEtBQUtGLEdBQUwsQ0FBU0csU0FBVCxDQUFtQkYsS0FBbkIsRUFBMEJDLEdBQTFCLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixHQUFMLENBQVNJLE1BQWhCLENBRFUsQ0FDYztBQUN6Qjs7O2tDQUVhSCxLLEVBQU87QUFDbkIsV0FBS0QsR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBU0csU0FBVCxDQUFtQkYsS0FBbkIsQ0FBWDtBQUNEOzs7OEJBRVNDLEcsRUFBSztBQUNiLFdBQUtGLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVNHLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JELEdBQXRCLENBQVg7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJQLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHRoaXMuc3RyID0gc3RyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cjtcbiAgfVxuICBcbiAgZ2V0U3Vic3RyaW5nKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy5zdHIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLnN0ci5sZW5ndGg7IC8vL1xuICB9XG5cbiAgdHJpbUZyb21TdGFydChzdGFydCkge1xuICAgIHRoaXMuc3RyID0gdGhpcy5zdHIuc3Vic3RyaW5nKHN0YXJ0KTtcbiAgfVxuXG4gIHRyaW1Ub0VuZChlbmQpIHtcbiAgICB0aGlzLnN0ciA9IHRoaXMuc3RyLnN1YnN0cmluZygwLCBlbmQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=