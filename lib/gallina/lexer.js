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
      var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
          keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,
          ///
      specialSymbolsRegExpPattern = specialSymbolsRegExp.source,
          ///
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern;

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var significantTokenTypes = ['string', 'access_ident', 'ident', 'num'];

      return significantTokenTypes;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = Rules.fromGrammar(grammar),
          gallinaLexer = new GallinaLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return GallinaLexer;
}(CommonLexer);

module.exports = GallinaLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiQ29udGV4dCIsImdyYW1tYXIiLCJ1dGlsIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkdhbGxpbmFMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZXMiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cCIsImZpbmRSZWdFeHBGcm9tVHlwZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJnYWxsaW5hTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsT0FBT0gsUUFBUSxTQUFSLENBSFg7QUFBQSxJQUlJSSxRQUFRSixRQUFRLGlCQUFSLENBSlo7QUFBQSxJQUtJSyxjQUFjTCxRQUFRLGlCQUFSLENBTGxCOztJQU9NTSxZOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlQLE9BQUosQ0FBWSxDQUFaLENBQXJCLENBRGlDLENBQ0s7O0FBRXRDLFVBQUlRLHFJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7bURBRThCO0FBQzdCLFVBQUlDLHVCQUF1QlAsS0FBS1Esa0JBQUwsQ0FBd0JULE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSVUsdUJBQXVCVCxLQUFLUSxrQkFBTCxDQUF3QlQsT0FBeEIsRUFBaUMsU0FBakMsQ0FEM0I7QUFBQSxVQUVJVyw4QkFBOEJILHFCQUFxQkksTUFGdkQ7QUFBQSxVQUVnRTtBQUM1REMsb0NBQThCSCxxQkFBcUJFLE1BSHZEO0FBQUEsVUFHZ0U7QUFDNURFLHFDQUFrQ0gsMkJBQWxDLFNBQWlFRSwyQkFKckU7O0FBTUEsYUFBT0MsNEJBQVA7QUFDRDs7OzRDQUV1QjtBQUN0QixVQUFJQyx3QkFBd0IsQ0FDMUIsUUFEMEIsRUFFMUIsY0FGMEIsRUFHMUIsT0FIMEIsRUFJMUIsS0FKMEIsQ0FBNUI7O0FBT0EsYUFBT0EscUJBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFJQyxRQUFRZCxNQUFNZSxXQUFOLENBQWtCakIsT0FBbEIsQ0FBWjtBQUFBLFVBQ0lrQixlQUFlLElBQUlkLFlBQUosQ0FBaUJZLEtBQWpCLEVBQXdCbkIsSUFBeEIsQ0FEbkI7O0FBR0EsYUFBT3FCLFlBQVA7QUFDRDs7OztFQW5Dd0JmLFc7O0FBc0MzQmdCLE9BQU9DLE9BQVAsR0FBaUJoQixZQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBHYWxsaW5hTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dCgwKTsgIC8vL1xyXG4gICAgXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCkge1xyXG4gICAgdmFyIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdzcGVjaWFsJyksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0ga2V5d29yZFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gc3BlY2lhbFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGAke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybn18JHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm59YDtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcblxyXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBbXHJcbiAgICAgICdzdHJpbmcnLFxyXG4gICAgICAnYWNjZXNzX2lkZW50JyxcclxuICAgICAgJ2lkZW50JyxcclxuICAgICAgJ251bSdcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZ2FsbGluYUxleGVyID0gbmV3IEdhbGxpbmFMZXhlcihydWxlcywgTGluZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfSAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUxleGVyO1xyXG4iXX0=