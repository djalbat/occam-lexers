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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidXRpbCIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkdhbGxpbmFMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZXMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxUeXBlcyIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJnYWxsaW5hTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsVUFBVUgsUUFBUSxXQUFSLENBSGQ7QUFBQSxJQUlJSSxRQUFRSixRQUFRLGlCQUFSLENBSlo7QUFBQSxJQUtJSyxjQUFjTCxRQUFRLGlCQUFSLENBTGxCOztJQU9NTSxZOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlOLE9BQUosQ0FBWSxDQUFaLENBQXJCLENBRGlDLENBQ0s7O0FBRXRDLFVBQUlPLHFJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7bURBRThCO0FBQzdCLFVBQUlDLHdLQUFrRVAsT0FBbEUsQ0FBSjs7QUFFQSxhQUFPTyw0QkFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJQyxnQkFBZ0IsQ0FDbEIsUUFEa0IsRUFFbEIsY0FGa0IsRUFHbEIsT0FIa0IsRUFJbEIsS0FKa0IsQ0FBcEI7O0FBT0EsYUFBT0EsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlDLFFBQVFSLE1BQU1TLFdBQU4sQ0FBa0JWLE9BQWxCLENBQVo7QUFBQSxVQUNJVyxlQUFlLElBQUlSLFlBQUosQ0FBaUJNLEtBQWpCLEVBQXdCYixJQUF4QixDQURuQjs7QUFHQSxhQUFPZSxZQUFQO0FBQ0Q7Ozs7RUEvQndCVCxXOztBQWtDM0JVLE9BQU9DLE9BQVAsR0FBaUJWLFlBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEdhbGxpbmFMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KDApOyAgLy8vXHJcbiAgICBcclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHN1cGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFR5cGVzKCkge1xyXG4gICAgdmFyIHRlcm1pbmFsVHlwZXMgPSBbXHJcbiAgICAgICdzdHJpbmcnLFxyXG4gICAgICAnYWNjZXNzX2lkZW50JyxcclxuICAgICAgJ2lkZW50JyxcclxuICAgICAgJ251bSdcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsVHlwZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBHYWxsaW5hTGV4ZXIocnVsZXMsIExpbmUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH0gIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlcjtcclxuIl19