'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = require('./example'),
    grammar = require('../../es6/florence/grammar'),
    FlorenceLexer = require('../../es6/florence/lexer');

var florenceLexer = FlorenceLexer.fromGrammar(grammar);

var FlorenceExample = function (_Example) {
  _inherits(FlorenceExample, _Example);

  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);

    return _possibleConstructorReturn(this, (FlorenceExample.__proto__ || Object.getPrototypeOf(FlorenceExample)).apply(this, arguments));
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      Example.contentTextArea.onChange(function (contextTextAreaValue) {
        Example.updateTokens(contextTextAreaValue, florenceLexer);
      });
    }
  }]);

  return FlorenceExample;
}(Example);

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInJlcXVpcmUiLCJncmFtbWFyIiwiRmxvcmVuY2VMZXhlciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tR3JhbW1hciIsIkZsb3JlbmNlRXhhbXBsZSIsImNvbnRlbnRUZXh0QXJlYSIsIm9uQ2hhbmdlIiwiY29udGV4dFRleHRBcmVhVmFsdWUiLCJ1cGRhdGVUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSw0QkFBUixDQURkO0FBQUEsSUFFSUUsZ0JBQWdCRixRQUFRLDBCQUFSLENBRnBCOztBQUlBLElBQUlHLGdCQUFnQkQsY0FBY0UsV0FBZCxDQUEwQkgsT0FBMUIsQ0FBcEI7O0lBRU1JLGU7Ozs7Ozs7Ozs7OzBCQUNTO0FBQ1hOLGNBQVFPLGVBQVIsQ0FBd0JDLFFBQXhCLENBQWlDLFVBQVNDLG9CQUFULEVBQStCO0FBQzlEVCxnQkFBUVUsWUFBUixDQUFxQkQsb0JBQXJCLEVBQTJDTCxhQUEzQztBQUNELE9BRkQ7QUFHRDs7OztFQUwyQkosTzs7QUFROUJXLE9BQU9DLE9BQVAsR0FBaUJOLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKSxcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2Zsb3JlbmNlL2dyYW1tYXInKSxcbiAgICBGbG9yZW5jZUxleGVyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2Zsb3JlbmNlL2xleGVyJyk7XG5cbnZhciBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oY29udGV4dFRleHRBcmVhVmFsdWUpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGNvbnRleHRUZXh0QXJlYVZhbHVlLCBmbG9yZW5jZUxleGVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==