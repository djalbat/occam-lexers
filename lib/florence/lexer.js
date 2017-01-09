'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../util'),
    Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
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
    key: 'tokensFromLines',
    value: function tokensFromLines(lines) {
      return CommonLexer.tokensFromLines(lines);
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkxpbmUiLCJDb250ZXh0IiwiZ3JhbW1hciIsIkNvbW1vbkxleGVyIiwiUmVnRXhwUGF0dGVybiIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwidG9rZW5zRnJvbUxpbmVzIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJmaW5kUmVnRXhwRnJvbVR5cGUiLCJpbmNsdWRlU3ltYm9sc1JlZ0V4cCIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nIiwiZnJvbVJlZ0V4cCIsInRvU3RyaW5nIiwiaW5jbHVkZVN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nIiwicmVtb3ZlQW5jaG9ycyIsImtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZyIsInJlbW92ZU5vbkNhcHR1cmluZ0dyb3VwIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFFBQVIsQ0FEWDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsVUFBVUgsUUFBUSxXQUFSLENBSGQ7QUFBQSxJQUlJSSxjQUFjSixRQUFRLGlCQUFSLENBSmxCO0FBQUEsSUFLSUssZ0JBQWdCTCxRQUFRLGtCQUFSLENBTHBCOztJQU9NTSxhOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlOLE9BQUosQ0FBWSxLQUFaLENBQXJCLENBRGlDLENBQ1M7O0FBRTFDLFVBQUlPLHVJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7b0NBRXNCQSxLLEVBQU87QUFBRSxhQUFPTCxZQUFZTSxlQUFaLENBQTRCRCxLQUE1QixDQUFQO0FBQTRDOzs7bURBRXRDO0FBQ3BDLFVBQUlFLHVCQUF1QlosS0FBS2Esa0JBQUwsQ0FBd0JULE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSVUsdUJBQXVCZCxLQUFLYSxrQkFBTCxDQUF3QlQsT0FBeEIsRUFBaUMsU0FBakMsQ0FEM0I7QUFBQSxVQUVJVyx1QkFBdUJmLEtBQUthLGtCQUFMLENBQXdCVCxPQUF4QixFQUFpQyxTQUFqQyxDQUYzQjtBQUFBLFVBR0lZLG9DQUFvQ1YsY0FBY1csVUFBZCxDQUF5Qkwsb0JBQXpCLEVBQStDTSxRQUEvQyxFQUh4QztBQUFBLFVBSUlDLG9DQUFvQ2IsY0FBY1csVUFBZCxDQUF5Qkgsb0JBQXpCLEVBQStDTSxhQUEvQyxHQUErREYsUUFBL0QsRUFKeEM7QUFBQSxVQUtJRyxvQ0FBb0NmLGNBQWNXLFVBQWQsQ0FBeUJGLG9CQUF6QixFQUErQ0ssYUFBL0MsR0FBK0RFLHVCQUEvRCxHQUF5RkosUUFBekYsRUFMeEM7QUFBQSxVQU1JSywrQkFBa0NQLGlDQUFsQyxTQUF1RUcsaUNBQXZFLFNBQTRHRSxpQ0FOaEg7O0FBUUEsYUFBT0UsNEJBQVA7QUFDRDs7OzRDQUU4QjtBQUFFLGFBQU9sQixZQUFZbUIscUJBQVosQ0FBa0NwQixPQUFsQyxDQUFQO0FBQW9EOzs7a0NBRWhFO0FBQ25CLFVBQUlxQixRQUFRcEIsWUFBWXFCLGdCQUFaLENBQTZCdEIsT0FBN0IsQ0FBWjtBQUFBLFVBQ0l1QixnQkFBZ0IsSUFBSXBCLGFBQUosQ0FBa0JrQixLQUFsQixFQUF5QnZCLElBQXpCLENBRHBCOztBQUdBLGFBQU95QixhQUFQO0FBQ0Q7Ozs7RUE5QnlCdEIsVzs7QUFpQzVCdUIsT0FBT0MsT0FBUCxHQUFpQnRCLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgUmVnRXhwUGF0dGVybiA9IHJlcXVpcmUoJy4uL3JlZ0V4cFBhdHRlcm4nKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChmYWxzZSk7ICAvLy9cclxuXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b2tlbnNGcm9tTGluZXMobGluZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLnRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7IH1cclxuXHJcbiAgc3RhdGljIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGluY2x1ZGVTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2luY2x1ZGUnKSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKHNwZWNpYWxTeW1ib2xzUmVnRXhwKS50b1N0cmluZygpLFxyXG4gICAgICAgIGluY2x1ZGVTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZyA9IFJlZ0V4cFBhdHRlcm4uZnJvbVJlZ0V4cChpbmNsdWRlU3ltYm9sc1JlZ0V4cCkucmVtb3ZlQW5jaG9ycygpLnRvU3RyaW5nKCksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKGtleXdvcmRTeW1ib2xzUmVnRXhwKS5yZW1vdmVBbmNob3JzKCkucmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAoKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmd9fCR7aW5jbHVkZVN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nfXwke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZ31gO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19