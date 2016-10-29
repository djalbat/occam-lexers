'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    FlorenceLexer = require('../../../es6/florence/lexer');

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
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsIkZsb3JlbmNlRXhhbXBsZSIsImNvbnRlbnRUZXh0QXJlYU9uQ2hhbmdlIiwiY29udGV4dFRleHRBcmVhVmFsdWUiLCJ1cGRhdGVUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxZQUFSLENBQWQ7QUFBQSxJQUNJQyxnQkFBZ0JELFFBQVEsNkJBQVIsQ0FEcEI7O0FBR0EsSUFBSUUsZ0JBQWdCRCxjQUFjRSxXQUFkLEVBQXBCOztJQUVNQyxlOzs7Ozs7OzBCQUNTO0FBQ1hMLGNBQVFNLHVCQUFSLENBQWdDLFVBQVNDLG9CQUFULEVBQStCO0FBQzdEUCxnQkFBUVEsWUFBUixDQUFxQkwsYUFBckI7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCTCxlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlcicpO1xuXG52YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYU9uQ2hhbmdlKGZ1bmN0aW9uKGNvbnRleHRUZXh0QXJlYVZhbHVlKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==