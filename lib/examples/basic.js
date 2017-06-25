'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    BasicLexer = require('../basic/lexer');

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var grammar = BasicLexer.grammar,
          Lexer = BasicLexer;

      Example.run(grammar, Lexer);
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkJhc2ljTGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyIiwiTGV4ZXIiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxnQkFBUixDQURuQjs7SUFHTUUsWTs7Ozs7OzswQkFDUztBQUNYLFVBQU1DLFVBQVVGLFdBQVdFLE9BQTNCO0FBQUEsVUFDTUMsUUFBUUgsVUFEZDs7QUFHQUYsY0FBUU0sR0FBUixDQUFZRixPQUFaLEVBQXFCQyxLQUFyQjtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQkwsWUFBakIiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vYmFzaWMvbGV4ZXInKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCBncmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxuICAgICAgICAgIExleGVyID0gQmFzaWNMZXhlcjtcblxuICAgIEV4YW1wbGUucnVuKGdyYW1tYXIsIExleGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcbiJdfQ==