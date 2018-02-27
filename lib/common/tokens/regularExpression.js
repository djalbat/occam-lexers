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
    value: function pass(tokensOrContents) {
      Tokens.pass(tokensOrContents, RegularExpression);
    }
  }]);

  return RegularExpressions;
}();

module.exports = RegularExpressions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRva2VucyIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvbiIsIlJlZ3VsYXJFeHByZXNzaW9ucyIsInRva2Vuc09yQ29udGVudHMiLCJwYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHdDQUFSLENBRDFCOztJQUdNRSxrQjs7Ozs7Ozt5QkFDUUMsZ0IsRUFBa0I7QUFBRUosYUFBT0ssSUFBUCxDQUFZRCxnQkFBWixFQUE4QkYsaUJBQTlCO0FBQW1EOzs7Ozs7QUFHckZJLE9BQU9DLE9BQVAsR0FBaUJKLGtCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMpIHsgVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgUmVndWxhckV4cHJlc3Npb24pOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25zO1xyXG4iXX0=