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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkxpbmUiLCJDb250ZXh0IiwiZ3JhbW1hciIsIkNvbW1vbkxleGVyIiwiUmVnRXhwUGF0dGVybiIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJmaW5kUmVnRXhwRnJvbVR5cGUiLCJpbmNsdWRlU3ltYm9sc1JlZ0V4cCIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nIiwiZnJvbVJlZ0V4cCIsInRvU3RyaW5nIiwiaW5jbHVkZVN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nIiwicmVtb3ZlQW5jaG9ycyIsImtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZyIsInJlbW92ZU5vbkNhcHR1cmluZ0dyb3VwIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFFBQVIsQ0FEWDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsVUFBVUgsUUFBUSxxQkFBUixDQUhkO0FBQUEsSUFJSUksY0FBY0osUUFBUSxpQkFBUixDQUpsQjtBQUFBLElBS0lLLGdCQUFnQkwsUUFBUSxrQkFBUixDQUxwQjs7SUFPTU0sYTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJTixPQUFKLENBQVksS0FBWixDQUFyQixDQURpQyxDQUNTOztBQUUxQyxVQUFJTyx1SUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O21EQUVxQztBQUNwQyxVQUFJQyx1QkFBdUJYLEtBQUtZLGtCQUFMLENBQXdCUixPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lTLHVCQUF1QmIsS0FBS1ksa0JBQUwsQ0FBd0JSLE9BQXhCLEVBQWlDLFNBQWpDLENBRDNCO0FBQUEsVUFFSVUsdUJBQXVCZCxLQUFLWSxrQkFBTCxDQUF3QlIsT0FBeEIsRUFBaUMsU0FBakMsQ0FGM0I7QUFBQSxVQUdJVyxvQ0FBb0NULGNBQWNVLFVBQWQsQ0FBeUJMLG9CQUF6QixFQUErQ00sUUFBL0MsRUFIeEM7QUFBQSxVQUlJQyxvQ0FBb0NaLGNBQWNVLFVBQWQsQ0FBeUJILG9CQUF6QixFQUErQ00sYUFBL0MsR0FBK0RGLFFBQS9ELEVBSnhDO0FBQUEsVUFLSUcsb0NBQW9DZCxjQUFjVSxVQUFkLENBQXlCRixvQkFBekIsRUFBK0NLLGFBQS9DLEdBQStERSx1QkFBL0QsR0FBeUZKLFFBQXpGLEVBTHhDO0FBQUEsVUFNSUssK0JBQWtDUCxpQ0FBbEMsU0FBdUVHLGlDQUF2RSxTQUE0R0UsaUNBTmhIOztBQVFBLGFBQU9FLDRCQUFQO0FBQ0Q7Ozs0Q0FFOEI7QUFBRSxhQUFPakIsWUFBWWtCLHFCQUFaLENBQWtDbkIsT0FBbEMsQ0FBUDtBQUFvRDs7O2tDQUVoRTtBQUNuQixVQUFJb0IsUUFBUW5CLFlBQVlvQixnQkFBWixDQUE2QnJCLE9BQTdCLENBQVo7QUFBQSxVQUNJc0IsZ0JBQWdCLElBQUluQixhQUFKLENBQWtCaUIsS0FBbEIsRUFBeUJ0QixJQUF6QixDQURwQjs7QUFHQSxhQUFPd0IsYUFBUDtBQUNEOzs7O0VBNUJ5QnJCLFc7O0FBK0I1QnNCLE9BQU9DLE9BQVAsR0FBaUJyQixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvZmxvcmVuY2UnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICBSZWdFeHBQYXR0ZXJuID0gcmVxdWlyZSgnLi4vcmVnRXhwUGF0dGVybicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KGZhbHNlKTsgIC8vL1xyXG5cclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGluY2x1ZGVTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2luY2x1ZGUnKSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKHNwZWNpYWxTeW1ib2xzUmVnRXhwKS50b1N0cmluZygpLFxyXG4gICAgICAgIGluY2x1ZGVTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZyA9IFJlZ0V4cFBhdHRlcm4uZnJvbVJlZ0V4cChpbmNsdWRlU3ltYm9sc1JlZ0V4cCkucmVtb3ZlQW5jaG9ycygpLnRvU3RyaW5nKCksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKGtleXdvcmRTeW1ib2xzUmVnRXhwKS5yZW1vdmVBbmNob3JzKCkucmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAoKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmd9fCR7aW5jbHVkZVN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nfXwke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVyblN0cmluZ31gO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19