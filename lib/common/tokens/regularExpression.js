'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    RegularExpression = require('../token/significant/regularExpression');

var RegularExpressions = function () {
  function RegularExpressions() {
    _classCallCheck(this, RegularExpressions);
  }

  _createClass(RegularExpressions, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, RegularExpression);
    }
  }]);

  return RegularExpressions;
}();

module.exports = RegularExpressions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRva2VucyIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvbiIsIlJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx3Q0FBUixDQUQxQjs7SUFHTUUsa0I7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU07QUFBRUwsYUFBT00sSUFBUCxDQUFZRixnQkFBWixFQUE4QkMsSUFBOUIsRUFBb0NILGlCQUFwQztBQUF5RDs7Ozs7O0FBR2pHSyxPQUFPQyxPQUFQLEdBQWlCTCxrQkFBakIiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuLi90b2tlbnMnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb24gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFJlZ3VsYXJFeHByZXNzaW9uKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9ucztcclxuIl19