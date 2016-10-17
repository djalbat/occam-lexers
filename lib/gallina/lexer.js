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
  }, {
    key: 'terminalTypes',
    value: function terminalTypes() {
      var terminalTypes = ['string', 'ident', 'num'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidXRpbCIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkdhbGxpbmFMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZXMiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cCIsImZpbmRSZWdFeHBGcm9tVHlwZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInRlcm1pbmFsVHlwZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksUUFBUUosUUFBUSxpQkFBUixDQUpaO0FBQUEsSUFLSUssY0FBY0wsUUFBUSxpQkFBUixDQUxsQjs7SUFPTU0sWTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJTixPQUFKLENBQVksQ0FBWixDQUFyQixDQURpQyxDQUNLOztBQUV0QyxVQUFJTyxxSUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O21EQUU4QjtBQUM3QixVQUFJQyx1QkFBdUJULEtBQUtVLGtCQUFMLENBQXdCUixPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lTLHVCQUF1QlgsS0FBS1Usa0JBQUwsQ0FBd0JSLE9BQXhCLEVBQWlDLFNBQWpDLENBRDNCO0FBQUEsVUFFSVUsOEJBQThCSCxxQkFBcUJJLE1BRnZEO0FBQUEsVUFFZ0U7QUFDNURDLG9DQUE4QkgscUJBQXFCRSxNQUh2RDtBQUFBLFVBR2dFO0FBQzVERSxxQ0FBa0NILDJCQUFsQyxTQUFpRUUsMkJBSnJFLENBRDZCLENBS3VFOztBQUVwRyxhQUFPQyw0QkFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJQyxnQkFBZ0IsQ0FDZCxRQURjLEVBRWQsT0FGYyxFQUdkLEtBSGMsQ0FBcEI7O0FBTUEsYUFBT0EsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlDLFFBQVFkLE1BQU1lLFdBQU4sQ0FBa0JoQixPQUFsQixDQUFaO0FBQUEsVUFDSWlCLGVBQWUsSUFBSWQsWUFBSixDQUFpQlksS0FBakIsRUFBd0JuQixJQUF4QixDQURuQjs7QUFHQSxhQUFPcUIsWUFBUDtBQUNEOzs7O0VBbEN3QmYsVzs7QUFxQzNCZ0IsT0FBT0MsT0FBUCxHQUFpQmhCLFlBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEdhbGxpbmFMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KDApOyAgLy8vXHJcbiAgICBcclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIga2V5d29yZFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAna2V5d29yZCcpLFxyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ3NwZWNpYWwnKSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBrZXl3b3JkU3ltYm9sc1JlZ0V4cC5zb3VyY2UsICAvLy9cclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBzcGVjaWFsU3ltYm9sc1JlZ0V4cC5zb3VyY2UsICAvLy9cclxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYCR7a2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJufXwke3NwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybn1gOyAvLy9cclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsVHlwZXMoKSB7XHJcbiAgICB2YXIgdGVybWluYWxUeXBlcyA9IFtcclxuICAgICAgICAgICdzdHJpbmcnLFxyXG4gICAgICAgICAgJ2lkZW50JyxcclxuICAgICAgICAgICdudW0nXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxUeXBlcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZ2FsbGluYUxleGVyID0gbmV3IEdhbGxpbmFMZXhlcihydWxlcywgTGluZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfSAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUxleGVyO1xyXG4iXX0=