'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    util = require('../util'),
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
      var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,
          ///
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern; ///

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'terminalTypes',
    value: function terminalTypes() {
      var terminalTypes = ['includeDirective', 'string'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwidXRpbCIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInRlcm1pbmFsVHlwZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLE9BQU9ILFFBQVEsU0FBUixDQUhYO0FBQUEsSUFJSUksUUFBUUosUUFBUSxpQkFBUixDQUpaO0FBQUEsSUFLSUssY0FBY0wsUUFBUSxpQkFBUixDQUxsQjs7SUFPTU0sYTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJUCxPQUFKLENBQVksS0FBWixDQUFyQixDQURpQyxDQUNTOztBQUUxQyxVQUFJUSx1SUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O21EQUU4QjtBQUM3QixVQUFJQyx1QkFBdUJQLEtBQUtRLGtCQUFMLENBQXdCVCxPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lVLDhCQUE4QkYscUJBQXFCRyxNQUR2RDtBQUFBLFVBQ2dFO0FBQzVEQyxxQ0FBK0JGLDJCQUZuQyxDQUQ2QixDQUdtQzs7QUFFaEUsYUFBT0UsNEJBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSUMsZ0JBQWdCLENBQ2xCLGtCQURrQixFQUVsQixRQUZrQixDQUFwQjs7QUFLQSxhQUFPQSxhQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBSUMsUUFBUVosTUFBTWEsV0FBTixDQUFrQmYsT0FBbEIsQ0FBWjtBQUFBLFVBQ0lnQixlQUFlLElBQUlaLGFBQUosQ0FBa0JVLEtBQWxCLEVBQXlCakIsSUFBekIsQ0FEbkI7O0FBR0EsYUFBT21CLFlBQVA7QUFDRDs7OztFQS9CeUJiLFc7O0FBbUM1QmMsT0FBT0MsT0FBUCxHQUFpQmQsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KGZhbHNlKTsgIC8vL1xyXG5cclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpIHtcclxuICAgIHZhciBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0ga2V5d29yZFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybjsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFR5cGVzKCkge1xyXG4gICAgdmFyIHRlcm1pbmFsVHlwZXMgPSBbXHJcbiAgICAgICdpbmNsdWRlRGlyZWN0aXZlJyxcclxuICAgICAgJ3N0cmluZydcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICB2YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICBnYWxsaW5hTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGdhbGxpbmFMZXhlcjtcclxuICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==