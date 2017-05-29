'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    BasicLexer = require('../basic/lexer'),
    basicGrammar = require('../basic/grammar');

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      Example.run(basicGrammar, BasicLexer);
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkJhc2ljTGV4ZXIiLCJiYXNpY0dyYW1tYXIiLCJCYXNpY0V4YW1wbGUiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxnQkFBUixDQURuQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsa0JBQVIsQ0FGckI7O0lBSU1HLFk7Ozs7Ozs7MEJBQ1M7QUFDWEosY0FBUUssR0FBUixDQUFZRixZQUFaLEVBQTBCRCxVQUExQjtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQkgsWUFBakIiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vYmFzaWMvbGV4ZXInKSxcbiAgICAgIGJhc2ljR3JhbW1hciA9IHJlcXVpcmUoJy4uL2Jhc2ljL2dyYW1tYXInKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBFeGFtcGxlLnJ1bihiYXNpY0dyYW1tYXIsIEJhc2ljTGV4ZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuIl19