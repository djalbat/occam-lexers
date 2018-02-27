'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    StringLiteralToken = require('../token/significant/stringLiteral');

var StringLiteralTokens = function () {
  function StringLiteralTokens() {
    _classCallCheck(this, StringLiteralTokens);
  }

  _createClass(StringLiteralTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents) {
      Tokens.pass(tokensOrContents, StringLiteralToken);
    }
  }]);

  return StringLiteralTokens;
}();

module.exports = StringLiteralTokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwuanMiXSwibmFtZXMiOlsiVG9rZW5zIiwicmVxdWlyZSIsIlN0cmluZ0xpdGVyYWxUb2tlbiIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxvQ0FBUixDQUQzQjs7SUFHTUUsbUI7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCO0FBQUVKLGFBQU9LLElBQVAsQ0FBWUQsZ0JBQVosRUFBOEJGLGtCQUE5QjtBQUFvRDs7Ozs7O0FBR3RGSSxPQUFPQyxPQUFQLEdBQWlCSixtQkFBakIiLCJmaWxlIjoic3RyaW5nTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsJyk7XHJcblxyXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIFN0cmluZ0xpdGVyYWxUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdMaXRlcmFsVG9rZW5zO1xyXG4iXX0=