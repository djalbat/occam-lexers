'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var Lexer = function () {
  function Lexer() {
    _classCallCheck(this, Lexer);
  }

  _createClass(Lexer, null, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      var lines = CommonLexer.linesFromContent(content, context, Line);

      return lines;
    }
  }]);

  return Lexer;
}();

module.exports = Lexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsIkNvbW1vbkxleGVyIiwibGluZXNGcm9tQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsSzs7Ozs7OztxQ0FDb0JDLE8sRUFBU0MsTyxFQUFTO0FBQ3hDLFVBQUlDLFFBQVFDLFlBQVlDLGdCQUFaLENBQTZCSixPQUE3QixFQUFzQ0MsT0FBdEMsRUFBK0NKLElBQS9DLENBQVo7O0FBRUEsYUFBT0ssS0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlAsS0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xyXG5cclxuY2xhc3MgTGV4ZXIge1xyXG4gIHN0YXRpYyBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBsaW5lcyA9IENvbW1vbkxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgTGluZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGV4ZXI7XHJcbiJdfQ==