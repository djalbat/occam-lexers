'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../util'),
    Line = require('./line'),
    Context = require('./context'),
    grammar = require('../grammar/florence'),
    CommonLexer = require('../common/lexer'),
    RegExpPattern = require('../regExpPattern');

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
  }], [{
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern(grammar) {
      var specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
          includeSymbolsRegExp = util.findRegExpFromType(grammar, 'include'),
          keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          specialSymbolsRegExpPatternString = RegExpPattern.fromRegExp(specialSymbolsRegExp).toString(),
          includeSymbolsRegExpPatternString = RegExpPattern.fromRegExp(includeSymbolsRegExp).removeAnchors().toString(),
          keywordSymbolsRegExpPatternString = RegExpPattern.fromRegExp(keywordSymbolsRegExp).removeAnchors().removeNonCapturingGroup().toString(),
          terminalSymbolsRegExpPattern = specialSymbolsRegExpPatternString + '|' + includeSymbolsRegExpPatternString + '|' + keywordSymbolsRegExpPatternString;

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      return CommonLexer.significantTokenTypes(grammar);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkxpbmUiLCJDb250ZXh0IiwiZ3JhbW1hciIsIkNvbW1vbkxleGVyIiwiUmVnRXhwUGF0dGVybiIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJmaW5kUmVnRXhwRnJvbVR5cGUiLCJpbmNsdWRlU3ltYm9sc1JlZ0V4cCIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nIiwiZnJvbVJlZ0V4cCIsInRvU3RyaW5nIiwiaW5jbHVkZVN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nIiwicmVtb3ZlQW5jaG9ycyIsImtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZyIsInJlbW92ZU5vbkNhcHR1cmluZ0dyb3VwIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFFBQVIsQ0FEWDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsVUFBVUgsUUFBUSxxQkFBUixDQUhkO0FBQUEsSUFJSUksY0FBY0osUUFBUSxpQkFBUixDQUpsQjtBQUFBLElBS0lLLGdCQUFnQkwsUUFBUSxrQkFBUixDQUxwQjs7SUFPTU0sYTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJTixPQUFKLENBQVksS0FBWixDQUFyQixDQURpQyxDQUNTOztBQUUxQyxVQUFJTyx1SUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O2lEQUVtQ04sTyxFQUFTO0FBQzNDLFVBQUlPLHVCQUF1QlgsS0FBS1ksa0JBQUwsQ0FBd0JSLE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSVMsdUJBQXVCYixLQUFLWSxrQkFBTCxDQUF3QlIsT0FBeEIsRUFBaUMsU0FBakMsQ0FEM0I7QUFBQSxVQUVJVSx1QkFBdUJkLEtBQUtZLGtCQUFMLENBQXdCUixPQUF4QixFQUFpQyxTQUFqQyxDQUYzQjtBQUFBLFVBR0lXLG9DQUFvQ1QsY0FBY1UsVUFBZCxDQUF5Qkwsb0JBQXpCLEVBQStDTSxRQUEvQyxFQUh4QztBQUFBLFVBSUlDLG9DQUFvQ1osY0FBY1UsVUFBZCxDQUF5Qkgsb0JBQXpCLEVBQStDTSxhQUEvQyxHQUErREYsUUFBL0QsRUFKeEM7QUFBQSxVQUtJRyxvQ0FBb0NkLGNBQWNVLFVBQWQsQ0FBeUJGLG9CQUF6QixFQUErQ0ssYUFBL0MsR0FBK0RFLHVCQUEvRCxHQUF5RkosUUFBekYsRUFMeEM7QUFBQSxVQU1JSywrQkFBa0NQLGlDQUFsQyxTQUF1RUcsaUNBQXZFLFNBQTRHRSxpQ0FOaEg7O0FBUUEsYUFBT0UsNEJBQVA7QUFDRDs7OzRDQUU4QjtBQUFFLGFBQU9qQixZQUFZa0IscUJBQVosQ0FBa0NuQixPQUFsQyxDQUFQO0FBQW9EOzs7a0NBRWhFO0FBQ25CLFVBQUlvQixRQUFRbkIsWUFBWW9CLGdCQUFaLENBQTZCckIsT0FBN0IsQ0FBWjtBQUFBLFVBQ0lzQixnQkFBZ0IsSUFBSW5CLGFBQUosQ0FBa0JpQixLQUFsQixFQUF5QnRCLElBQXpCLENBRHBCOztBQUdBLGFBQU93QixhQUFQO0FBQ0Q7Ozs7RUE1QnlCckIsVzs7QUErQjVCc0IsT0FBT0MsT0FBUCxHQUFpQnJCLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9mbG9yZW5jZScpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgIFJlZ0V4cFBhdHRlcm4gPSByZXF1aXJlKCcuLi9yZWdFeHBQYXR0ZXJuJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoZmFsc2UpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybihncmFtbWFyKSB7XHJcbiAgICB2YXIgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGluY2x1ZGVTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2luY2x1ZGUnKSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKHNwZWNpYWxTeW1ib2xzUmVnRXhwKS50b1N0cmluZygpLFxyXG4gICAgICAgIGluY2x1ZGVTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZyA9IFJlZ0V4cFBhdHRlcm4uZnJvbVJlZ0V4cChpbmNsdWRlU3ltYm9sc1JlZ0V4cCkucmVtb3ZlQW5jaG9ycygpLnRvU3RyaW5nKCksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKGtleXdvcmRTeW1ib2xzUmVnRXhwKS5yZW1vdmVBbmNob3JzKCkucmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAoKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmd9fCR7aW5jbHVkZVN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nfXwke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZ31gO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19