'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../../common/tokens'),
    EndOfLineSignificantToken = require('../../common/token/significant/endOfLine');

var EndOfLineToken = EndOfLineSignificantToken; ///

var EndOfLineTokens = function () {
  function EndOfLineTokens() {
    _classCallCheck(this, EndOfLineTokens);
  }

  _createClass(EndOfLineTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents) {
      Tokens.pass(tokensOrContents, EndOfLineToken);
    }
  }]);

  return EndOfLineTokens;
}();

module.exports = EndOfLineTokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbnMvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlRva2VucyIsInJlcXVpcmUiLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLHFCQUFSLENBQWY7QUFBQSxJQUNNQyw0QkFBNEJELFFBQVEsMENBQVIsQ0FEbEM7O0FBR0EsSUFBTUUsaUJBQWlCRCx5QkFBdkIsQyxDQUFtRDs7SUFFN0NFLGU7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCO0FBQUVMLGFBQU9NLElBQVAsQ0FBWUQsZ0JBQVosRUFBOEJGLGNBQTlCO0FBQWdEOzs7Ozs7QUFHbEZJLE9BQU9DLE9BQVAsR0FBaUJKLGVBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbnMnKSxcclxuICAgICAgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNvbnN0IEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xyXG5cclxuY2xhc3MgRW5kT2ZMaW5lVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIEVuZE9mTGluZVRva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VucztcclxuIl19