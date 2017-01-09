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
  }], [{
    key: 'tokensFromLines',
    value: function tokensFromLines(lines) {
      return CommonLexer.tokensFromLines(lines);
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
      var specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
          keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          specialSymbolsRegExpPatternString = RegExpPattern.fromRegExp(specialSymbolsRegExp).toString(),
          keywordSymbolsRegExpPatternString = RegExpPattern.fromRegExp(keywordSymbolsRegExp).removeAnchors().removeNonCapturingGroup().toString(),
          terminalSymbolsRegExpPattern = specialSymbolsRegExpPatternString + '|' + keywordSymbolsRegExpPatternString;

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
          gallinaLexer = new GallinaLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return GallinaLexer;
}(CommonLexer);

module.exports = GallinaLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiTGluZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiQ29tbW9uTGV4ZXIiLCJSZWdFeHBQYXR0ZXJuIiwiR2FsbGluYUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsInRva2Vuc0Zyb21MaW5lcyIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwia2V5d29yZFN5bWJvbHNSZWdFeHAiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmciLCJmcm9tUmVnRXhwIiwidG9TdHJpbmciLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmciLCJyZW1vdmVBbmNob3JzIiwicmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicnVsZXMiLCJydWxlc0Zyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxRQUFSLENBRFg7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksY0FBY0osUUFBUSxpQkFBUixDQUpsQjtBQUFBLElBS0lLLGdCQUFnQkwsUUFBUSxrQkFBUixDQUxwQjs7SUFPTU0sWTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJTixPQUFKLENBQVksQ0FBWixDQUFyQixDQURpQyxDQUNLOztBQUV0QyxVQUFJTyxxSUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O29DQUVzQkEsSyxFQUFPO0FBQUUsYUFBT0wsWUFBWU0sZUFBWixDQUE0QkQsS0FBNUIsQ0FBUDtBQUE0Qzs7O21EQUV0QztBQUNwQyxVQUFJRSx1QkFBdUJaLEtBQUthLGtCQUFMLENBQXdCVCxPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lVLHVCQUF1QmQsS0FBS2Esa0JBQUwsQ0FBd0JULE9BQXhCLEVBQWlDLFNBQWpDLENBRDNCO0FBQUEsVUFFSVcsb0NBQW9DVCxjQUFjVSxVQUFkLENBQXlCSixvQkFBekIsRUFBK0NLLFFBQS9DLEVBRnhDO0FBQUEsVUFHSUMsb0NBQW9DWixjQUFjVSxVQUFkLENBQXlCRixvQkFBekIsRUFBK0NLLGFBQS9DLEdBQStEQyx1QkFBL0QsR0FBeUZILFFBQXpGLEVBSHhDO0FBQUEsVUFJSUksK0JBQWtDTixpQ0FBbEMsU0FBdUVHLGlDQUozRTs7QUFNQSxhQUFPRyw0QkFBUDtBQUNEOzs7NENBRThCO0FBQUUsYUFBT2hCLFlBQVlpQixxQkFBWixDQUFrQ2xCLE9BQWxDLENBQVA7QUFBb0Q7OztrQ0FFaEU7QUFDbkIsVUFBSW1CLFFBQVFsQixZQUFZbUIsZ0JBQVosQ0FBNkJwQixPQUE3QixDQUFaO0FBQUEsVUFDSXFCLGVBQWUsSUFBSWxCLFlBQUosQ0FBaUJnQixLQUFqQixFQUF3QnJCLElBQXhCLENBRG5COztBQUdBLGFBQU91QixZQUFQO0FBQ0Q7Ozs7RUE1QndCcEIsVzs7QUErQjNCcUIsT0FBT0MsT0FBUCxHQUFpQnBCLFlBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgUmVnRXhwUGF0dGVybiA9IHJlcXVpcmUoJy4uL3JlZ0V4cFBhdHRlcm4nKTtcclxuXHJcbmNsYXNzIEdhbGxpbmFMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KDApOyAgLy8vXHJcbiAgICBcclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b2tlbnNGcm9tTGluZXMobGluZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLnRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7IH1cclxuXHJcbiAgc3RhdGljIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmcgPSBSZWdFeHBQYXR0ZXJuLmZyb21SZWdFeHAoc3BlY2lhbFN5bWJvbHNSZWdFeHApLnRvU3RyaW5nKCksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKGtleXdvcmRTeW1ib2xzUmVnRXhwKS5yZW1vdmVBbmNob3JzKCkucmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAoKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmd9fCR7a2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nfWA7XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7IHJldHVybiBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoZ3JhbW1hcik7IH1cclxuICBcclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICB2YXIgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBHYWxsaW5hTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlcjtcclxuIl19