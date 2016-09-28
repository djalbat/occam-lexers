'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParseableToken = function () {
  function ParseableToken(content) {
    _classCallCheck(this, ParseableToken);

    this.content = content;
  }

  _createClass(ParseableToken, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }]);

  return ParseableToken;
}();

module.exports = ParseableToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vcGFyc2VhYmxlLmpzIl0sIm5hbWVzIjpbIlBhcnNlYWJsZVRva2VuIiwiY29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCSCxjQUFqQiIsImZpbGUiOiJwYXJzZWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhcnNlYWJsZVRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlYWJsZVRva2VuO1xuIl19