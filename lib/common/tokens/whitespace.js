'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    WhitespaceToken = require('../token/significant/whitespace');

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents) {
      Tokens.pass(tokensOrContents, WhitespaceToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsiVG9rZW5zIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsIldoaXRlc3BhY2VUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxpQ0FBUixDQUR4Qjs7SUFHTUUsZ0I7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCO0FBQUVKLGFBQU9LLElBQVAsQ0FBWUQsZ0JBQVosRUFBOEJGLGVBQTlCO0FBQWlEOzs7Ozs7QUFHbkZJLE9BQU9DLE9BQVAsR0FBaUJKLGdCQUFqQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFdoaXRlc3BhY2VUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMpIHsgVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgV2hpdGVzcGFjZVRva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbnM7XHJcbiJdfQ==