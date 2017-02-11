'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('./tokens'),
    WhitespaceToken = require('./token/significant/whitespace');

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      return Tokens.pass(tokensOrContents, line, WhitespaceToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vd2hpdGVzcGFjZVRva2Vucy5qcyJdLCJuYW1lcyI6WyJUb2tlbnMiLCJyZXF1aXJlIiwiV2hpdGVzcGFjZVRva2VuIiwiV2hpdGVzcGFjZVRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFVBQVIsQ0FBYjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSxnQ0FBUixDQUR0Qjs7SUFHTUUsZ0I7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU07QUFBRSxhQUFPTCxPQUFPTSxJQUFQLENBQVlGLGdCQUFaLEVBQThCQyxJQUE5QixFQUFvQ0gsZUFBcEMsQ0FBUDtBQUE4RDs7Ozs7O0FBR3RHSyxPQUFPQyxPQUFQLEdBQWlCTCxnQkFBakIiLCJmaWxlIjoid2hpdGVzcGFjZVRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2VucycpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IHJldHVybiBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VucztcclxuIl19