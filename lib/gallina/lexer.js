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
      var terminalSymbolsRegExpPattern = _get(GallinaLexer.prototype.__proto__ || Object.getPrototypeOf(GallinaLexer.prototype), 'terminalSymbolsRegExpPattern', this).call(this, grammar);

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'terminalTypes',
    value: function terminalTypes() {
      var terminalTypes = ['string', 'access_ident', 'ident', 'num'];

      return terminalTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiQ29udGV4dCIsImdyYW1tYXIiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiR2FsbGluYUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJ0ZXJtaW5hbFR5cGVzIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImdhbGxpbmFMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxXQUFSLENBRmQ7QUFBQSxJQUdJRyxRQUFRSCxRQUFRLGlCQUFSLENBSFo7QUFBQSxJQUlJSSxjQUFjSixRQUFRLGlCQUFSLENBSmxCOztJQU1NSyxZOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlOLE9BQUosQ0FBWSxDQUFaLENBQXJCLENBRGlDLENBQ0s7O0FBRXRDLFVBQUlPLHFJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7bURBRThCO0FBQzdCLFVBQUlDLHdLQUFrRVAsT0FBbEUsQ0FBSjs7QUFFQSxhQUFPTyw0QkFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJQyxnQkFBZ0IsQ0FDbEIsUUFEa0IsRUFFbEIsY0FGa0IsRUFHbEIsT0FIa0IsRUFJbEIsS0FKa0IsQ0FBcEI7O0FBT0EsYUFBT0EsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlDLFFBQVFSLE1BQU1TLFdBQU4sQ0FBa0JWLE9BQWxCLENBQVo7QUFBQSxVQUNJVyxlQUFlLElBQUlSLFlBQUosQ0FBaUJNLEtBQWpCLEVBQXdCWixJQUF4QixDQURuQjs7QUFHQSxhQUFPYyxZQUFQO0FBQ0Q7Ozs7RUEvQndCVCxXOztBQWtDM0JVLE9BQU9DLE9BQVAsR0FBaUJWLFlBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgR2FsbGluYUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoMCk7ICAvLy9cclxuICAgIFxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpIHtcclxuICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gc3VwZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsVHlwZXMoKSB7XHJcbiAgICB2YXIgdGVybWluYWxUeXBlcyA9IFtcclxuICAgICAgJ3N0cmluZycsXHJcbiAgICAgICdhY2Nlc3NfaWRlbnQnLFxyXG4gICAgICAnaWRlbnQnLFxyXG4gICAgICAnbnVtJ1xyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxUeXBlcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZ2FsbGluYUxleGVyID0gbmV3IEdhbGxpbmFMZXhlcihydWxlcywgTGluZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfSAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUxleGVyO1xyXG4iXX0=