'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    util = require('../util'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var rules = Rules.fromGrammar(grammar);

var GallinaLexer = function (_CommonLexer) {
  _inherits(GallinaLexer, _CommonLexer);

  function GallinaLexer() {
    _classCallCheck(this, GallinaLexer);

    return _possibleConstructorReturn(this, (GallinaLexer.__proto__ || Object.getPrototypeOf(GallinaLexer)).apply(this, arguments));
  }

  _createClass(GallinaLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      context = context || new Context(0); ///

      var lines = _get(GallinaLexer.prototype.__proto__ || Object.getPrototypeOf(GallinaLexer.prototype), 'linesFromContent', this).call(this, content, context);

      return lines;
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
      var keywordSymbolsRegExp = grammar.findRegExp('keyword'),
          specialSymbolsRegExp = grammar.findRegExp('special'),
          keywordSymbolsRegExpPattern = util.regExpPattern(keywordSymbolsRegExp),
          specialSymbolsRegExpPattern = util.regExpPattern(specialSymbolsRegExp),
          terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern;

      return terminalSymbolsRegExpPattern;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var gallinaLexer = new GallinaLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return GallinaLexer;
}(CommonLexer);

module.exports = GallinaLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidXRpbCIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJHYWxsaW5hTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwia2V5d29yZFN5bWJvbHNSZWdFeHAiLCJmaW5kUmVnRXhwIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJyZWdFeHBQYXR0ZXJuIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImdhbGxpbmFMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLE9BQU9ELFFBQVEsU0FBUixDQURYO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxXQUFSLENBRmQ7QUFBQSxJQUdJRyxVQUFVSCxRQUFRLFdBQVIsQ0FIZDtBQUFBLElBSUlJLFFBQVFKLFFBQVEsaUJBQVIsQ0FKWjtBQUFBLElBS0lLLGNBQWNMLFFBQVEsaUJBQVIsQ0FMbEI7O0FBT0EsSUFBSU0sUUFBUUYsTUFBTUcsV0FBTixDQUFrQkosT0FBbEIsQ0FBWjs7SUFFTUssWTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJUixPQUFKLENBQVksQ0FBWixDQUFyQixDQURpQyxDQUNLOztBQUV0QyxVQUFJUyxxSUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O21EQUU4QjtBQUM3QixVQUFJQyx1QkFBdUJULFFBQVFVLFVBQVIsQ0FBbUIsU0FBbkIsQ0FBM0I7QUFBQSxVQUNJQyx1QkFBdUJYLFFBQVFVLFVBQVIsQ0FBbUIsU0FBbkIsQ0FEM0I7QUFBQSxVQUVJRSw4QkFBOEJkLEtBQUtlLGFBQUwsQ0FBbUJKLG9CQUFuQixDQUZsQztBQUFBLFVBR0lLLDhCQUE4QmhCLEtBQUtlLGFBQUwsQ0FBbUJGLG9CQUFuQixDQUhsQztBQUFBLFVBSUlJLCtCQUFrQ0gsMkJBQWxDLFNBQWlFRSwyQkFKckU7O0FBTUEsYUFBT0MsNEJBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFJQyxlQUFlLElBQUlYLFlBQUosQ0FBaUJGLEtBQWpCLEVBQXdCUCxJQUF4QixDQUFuQjs7QUFFQSxhQUFPb0IsWUFBUDtBQUNEOzs7O0VBdkJ3QmQsVzs7QUEwQjNCZSxPQUFPQyxPQUFQLEdBQWlCYixZQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG52YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbmNsYXNzIEdhbGxpbmFMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KDApOyAgLy8vXHJcbiAgICBcclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIga2V5d29yZFN5bWJvbHNSZWdFeHAgPSBncmFtbWFyLmZpbmRSZWdFeHAoJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IGdyYW1tYXIuZmluZFJlZ0V4cCgnc3BlY2lhbCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHV0aWwucmVnRXhwUGF0dGVybihrZXl3b3JkU3ltYm9sc1JlZ0V4cCksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdXRpbC5yZWdFeHBQYXR0ZXJuKHNwZWNpYWxTeW1ib2xzUmVnRXhwKSxcclxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYCR7a2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJufXwke3NwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybn1gO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICB2YXIgZ2FsbGluYUxleGVyID0gbmV3IEdhbGxpbmFMZXhlcihydWxlcywgTGluZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfSAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUxleGVyO1xyXG4iXX0=