'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      Example.contentTextAreaOnChange(function (contextTextAreaValue) {
        Example.updateTokens(florenceLexer);
      });

      Example.updateTokens(florenceLexer);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsIkZsb3JlbmNlRXhhbXBsZSIsImNvbnRlbnRUZXh0QXJlYU9uQ2hhbmdlIiwiY29udGV4dFRleHRBcmVhVmFsdWUiLCJ1cGRhdGVUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxZQUFSLENBQWQ7QUFBQSxJQUNJQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FEcEI7O0FBR0EsSUFBSUUsZ0JBQWdCRCxjQUFjRSxXQUFkLEVBQXBCOztJQUVNQyxlOzs7Ozs7OzBCQUNTO0FBQ1hMLGNBQVFNLHVCQUFSLENBQWdDLFVBQVNDLG9CQUFULEVBQStCO0FBQzdEUCxnQkFBUVEsWUFBUixDQUFxQkwsYUFBckI7QUFDRCxPQUZEOztBQUlBSCxjQUFRUSxZQUFSLENBQXFCTCxhQUFyQjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQkwsZUFBakIiLCJmaWxlIjoiZmxvcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9sZXhlcicpO1xuXG52YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYU9uQ2hhbmdlKGZ1bmN0aW9uKGNvbnRleHRUZXh0QXJlYVZhbHVlKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGZsb3JlbmNlTGV4ZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIl19