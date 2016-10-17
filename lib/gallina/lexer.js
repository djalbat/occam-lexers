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
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern; ///

      return terminalSymbolsRegExpPattern;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidXRpbCIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkdhbGxpbmFMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZXMiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cCIsImZpbmRSZWdFeHBGcm9tVHlwZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJnYWxsaW5hTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsVUFBVUgsUUFBUSxXQUFSLENBSGQ7QUFBQSxJQUlJSSxRQUFRSixRQUFRLGlCQUFSLENBSlo7QUFBQSxJQUtJSyxjQUFjTCxRQUFRLGlCQUFSLENBTGxCOztJQU9NTSxZOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlOLE9BQUosQ0FBWSxDQUFaLENBQXJCLENBRGlDLENBQ0s7O0FBRXRDLFVBQUlPLHFJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7bURBRThCO0FBQzdCLFVBQUlDLHVCQUF1QlQsS0FBS1Usa0JBQUwsQ0FBd0JSLE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSVMsdUJBQXVCWCxLQUFLVSxrQkFBTCxDQUF3QlIsT0FBeEIsRUFBaUMsU0FBakMsQ0FEM0I7QUFBQSxVQUVJVSw4QkFBOEJILHFCQUFxQkksTUFGdkQ7QUFBQSxVQUVnRTtBQUM1REMsb0NBQThCSCxxQkFBcUJFLE1BSHZEO0FBQUEsVUFHZ0U7QUFDNURFLHFDQUFrQ0gsMkJBQWxDLFNBQWlFRSwyQkFKckUsQ0FENkIsQ0FLdUU7O0FBRXBHLGFBQU9DLDRCQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBSUMsUUFBUWIsTUFBTWMsV0FBTixDQUFrQmYsT0FBbEIsQ0FBWjtBQUFBLFVBQ0lnQixlQUFlLElBQUliLFlBQUosQ0FBaUJXLEtBQWpCLEVBQXdCbEIsSUFBeEIsQ0FEbkI7O0FBR0EsYUFBT29CLFlBQVA7QUFDRDs7OztFQXhCd0JkLFc7O0FBMkIzQmUsT0FBT0MsT0FBUCxHQUFpQmYsWUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgR2FsbGluYUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoMCk7ICAvLy9cclxuICAgIFxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpIHtcclxuICAgIHZhciBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGtleXdvcmRTeW1ib2xzUmVnRXhwLnNvdXJjZSwgIC8vL1xyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHNwZWNpYWxTeW1ib2xzUmVnRXhwLnNvdXJjZSwgIC8vL1xyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm59fCR7c3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJufWA7IC8vL1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICB2YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICBnYWxsaW5hTGV4ZXIgPSBuZXcgR2FsbGluYUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGdhbGxpbmFMZXhlcjtcclxuICB9ICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hTGV4ZXI7XHJcbiJdfQ==