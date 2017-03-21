'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('./tokens'),
    StringToken = require('./token/significant/string');

var StringTokens = function () {
  function StringTokens() {
    _classCallCheck(this, StringTokens);
  }

  _createClass(StringTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, StringToken);
    }
  }]);

  return StringTokens;
}();

module.exports = StringTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc3RyaW5nVG9rZW5zLmpzIl0sIm5hbWVzIjpbIlRva2VucyIsInJlcXVpcmUiLCJTdHJpbmdUb2tlbiIsIlN0cmluZ1Rva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01DLGNBQWNELFFBQVEsNEJBQVIsQ0FEcEI7O0lBR01FLFk7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU07QUFBRUwsYUFBT00sSUFBUCxDQUFZRixnQkFBWixFQUE4QkMsSUFBOUIsRUFBb0NILFdBQXBDO0FBQW1EOzs7Ozs7QUFHM0ZLLE9BQU9DLE9BQVAsR0FBaUJMLFlBQWpCIiwiZmlsZSI6InN0cmluZ1Rva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zJyksXHJcbiAgICAgIFN0cmluZ1Rva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKTtcclxuXHJcbmNsYXNzIFN0cmluZ1Rva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBTdHJpbmdUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdUb2tlbnM7XHJcbiJdfQ==