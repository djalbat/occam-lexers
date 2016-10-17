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
      var keywordSymbolsRexExp = grammar['keyword'],
          specialSymbolsRexExp = grammar['special'],
          keywordSymbolsRexExpPattern = util.regExpPattern(keywordSymbolsRexExp),
          specialSymbolsRexExpPattern = util.regExpPattern(specialSymbolsRexExp),
          terminalSymbolsRegExpPattern = keywordSymbolsRexExpPattern + '|' + specialSymbolsRexExpPattern;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidXRpbCIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJHYWxsaW5hTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwia2V5d29yZFN5bWJvbHNSZXhFeHAiLCJzcGVjaWFsU3ltYm9sc1JleEV4cCIsImtleXdvcmRTeW1ib2xzUmV4RXhwUGF0dGVybiIsInJlZ0V4cFBhdHRlcm4iLCJzcGVjaWFsU3ltYm9sc1JleEV4cFBhdHRlcm4iLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksUUFBUUosUUFBUSxpQkFBUixDQUpaO0FBQUEsSUFLSUssY0FBY0wsUUFBUSxpQkFBUixDQUxsQjs7QUFPQSxJQUFJTSxRQUFRRixNQUFNRyxXQUFOLENBQWtCSixPQUFsQixDQUFaOztJQUVNSyxZOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlSLE9BQUosQ0FBWSxDQUFaLENBQXJCLENBRGlDLENBQ0s7O0FBRXRDLFVBQUlTLHFJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7bURBRThCO0FBQzdCLFVBQUlDLHVCQUF1QlQsUUFBUSxTQUFSLENBQTNCO0FBQUEsVUFDSVUsdUJBQXVCVixRQUFRLFNBQVIsQ0FEM0I7QUFBQSxVQUVJVyw4QkFBOEJiLEtBQUtjLGFBQUwsQ0FBbUJILG9CQUFuQixDQUZsQztBQUFBLFVBR0lJLDhCQUE4QmYsS0FBS2MsYUFBTCxDQUFtQkYsb0JBQW5CLENBSGxDO0FBQUEsVUFJSUksK0JBQWtDSCwyQkFBbEMsU0FBaUVFLDJCQUpyRTs7QUFNQSxhQUFPQyw0QkFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlDLGVBQWUsSUFBSVYsWUFBSixDQUFpQkYsS0FBakIsRUFBd0JQLElBQXhCLENBQW5COztBQUVBLGFBQU9tQixZQUFQO0FBQ0Q7Ozs7RUF2QndCYixXOztBQTBCM0JjLE9BQU9DLE9BQVAsR0FBaUJaLFlBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbnZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuY2xhc3MgR2FsbGluYUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoMCk7ICAvLy9cclxuICAgIFxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpIHtcclxuICAgIHZhciBrZXl3b3JkU3ltYm9sc1JleEV4cCA9IGdyYW1tYXJbJ2tleXdvcmQnXSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JleEV4cCA9IGdyYW1tYXJbJ3NwZWNpYWwnXSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JleEV4cFBhdHRlcm4gPSB1dGlsLnJlZ0V4cFBhdHRlcm4oa2V5d29yZFN5bWJvbHNSZXhFeHApLFxyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmV4RXhwUGF0dGVybiA9IHV0aWwucmVnRXhwUGF0dGVybihzcGVjaWFsU3ltYm9sc1JleEV4cCksXHJcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGAke2tleXdvcmRTeW1ib2xzUmV4RXhwUGF0dGVybn18JHtzcGVjaWFsU3ltYm9sc1JleEV4cFBhdHRlcm59YDtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIGdhbGxpbmFMZXhlciA9IG5ldyBHYWxsaW5hTGV4ZXIocnVsZXMsIExpbmUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH0gIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlcjtcclxuIl19