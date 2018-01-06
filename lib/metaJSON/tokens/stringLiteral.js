'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../../common/tokens'),
    StringLiteralToken = require('../../common/token/significant/stringLiteral');

var StringLiteralTokens = function () {
  function StringLiteralTokens() {
    _classCallCheck(this, StringLiteralTokens);
  }

  _createClass(StringLiteralTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, StringLiteralToken);
    }
  }]);

  return StringLiteralTokens;
}();

module.exports = StringLiteralTokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9tZXRhSlNPTi90b2tlbnMvc3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJUb2tlbnMiLCJyZXF1aXJlIiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLHFCQUFSLENBQWY7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsOENBQVIsQ0FEM0I7O0lBR01FLG1COzs7Ozs7O3lCQUNRQyxnQixFQUFrQkMsSSxFQUFNO0FBQUVMLGFBQU9NLElBQVAsQ0FBWUYsZ0JBQVosRUFBOEJDLElBQTlCLEVBQW9DSCxrQkFBcEM7QUFBMEQ7Ozs7OztBQUdsR0ssT0FBT0MsT0FBUCxHQUFpQkwsbUJBQWpCIiwiZmlsZSI6InN0cmluZ0xpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW5zJyksIFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbCcpO1xyXG5cclxuY2xhc3MgU3RyaW5nTGl0ZXJhbFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBTdHJpbmdMaXRlcmFsVG9rZW4pOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nTGl0ZXJhbFRva2VucztcclxuIl19