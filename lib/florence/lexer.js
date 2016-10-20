'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      context = context || new Context(false); ///

      var lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContent', this).call(this, content, context);

      return lines;
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
      var terminalSymbolsRegExpPattern = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'terminalSymbolsRegExpPattern', this).call(this, grammar);

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'terminalTypes',
    value: function terminalTypes() {
      var terminalTypes = ['string', 'include'];

      return terminalTypes;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = Rules.fromGrammar(grammar),
          gallinaLexer = new FlorenceLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInRlcm1pbmFsVHlwZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFFBQVFILFFBQVEsaUJBQVIsQ0FIWjtBQUFBLElBSUlJLGNBQWNKLFFBQVEsaUJBQVIsQ0FKbEI7O0lBTU1LLGE7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLE8sRUFBUztBQUNqQ0EsZ0JBQVVBLFdBQVcsSUFBSU4sT0FBSixDQUFZLEtBQVosQ0FBckIsQ0FEaUMsQ0FDUzs7QUFFMUMsVUFBSU8sdUlBQStCRixPQUEvQixFQUF3Q0MsT0FBeEMsQ0FBSjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7OzttREFFOEI7QUFDN0IsVUFBSUMsMEtBQWtFUCxPQUFsRSxDQUFKOztBQUVBLGFBQU9PLDRCQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQUlDLGdCQUFnQixDQUNsQixRQURrQixFQUVsQixTQUZrQixDQUFwQjs7QUFLQSxhQUFPQSxhQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBSUMsUUFBUVIsTUFBTVMsV0FBTixDQUFrQlYsT0FBbEIsQ0FBWjtBQUFBLFVBQ0lXLGVBQWUsSUFBSVIsYUFBSixDQUFrQk0sS0FBbEIsRUFBeUJaLElBQXpCLENBRG5COztBQUdBLGFBQU9jLFlBQVA7QUFDRDs7OztFQTdCeUJULFc7O0FBaUM1QlUsT0FBT0MsT0FBUCxHQUFpQlYsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoZmFsc2UpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCkge1xyXG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBzdXBlci50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuXHJcbiAgdGVybWluYWxUeXBlcygpIHtcclxuICAgIHZhciB0ZXJtaW5hbFR5cGVzID0gW1xyXG4gICAgICAnc3RyaW5nJyxcclxuICAgICAgJ2luY2x1ZGUnXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZ2FsbGluYUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=