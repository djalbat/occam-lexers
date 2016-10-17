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
          keywordSymbolsRegExpPattern = util.regExpPattern(keywordSymbolsRegExp),
          specialSymbolsRegExpPattern = util.regExpPattern(specialSymbolsRegExp),
          terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidXRpbCIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkdhbGxpbmFMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZXMiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cCIsImZpbmRSZWdFeHBGcm9tVHlwZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwicmVnRXhwUGF0dGVybiIsInNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJydWxlcyIsImZyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksUUFBUUosUUFBUSxpQkFBUixDQUpaO0FBQUEsSUFLSUssY0FBY0wsUUFBUSxpQkFBUixDQUxsQjs7SUFPTU0sWTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJTixPQUFKLENBQVksQ0FBWixDQUFyQixDQURpQyxDQUNLOztBQUV0QyxVQUFJTyxxSUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O21EQUU4QjtBQUM3QixVQUFJQyx1QkFBdUJULEtBQUtVLGtCQUFMLENBQXdCUixPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lTLHVCQUF1QlgsS0FBS1Usa0JBQUwsQ0FBd0JSLE9BQXhCLEVBQWlDLFNBQWpDLENBRDNCO0FBQUEsVUFFSVUsOEJBQThCWixLQUFLYSxhQUFMLENBQW1CSixvQkFBbkIsQ0FGbEM7QUFBQSxVQUdJSyw4QkFBOEJkLEtBQUthLGFBQUwsQ0FBbUJGLG9CQUFuQixDQUhsQztBQUFBLFVBSUlJLCtCQUErQkgsOEJBQThCLEdBQTlCLEdBQW9DRSwyQkFKdkU7O0FBTUEsYUFBT0MsNEJBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFJQyxRQUFRYixNQUFNYyxXQUFOLENBQWtCZixPQUFsQixDQUFaO0FBQUEsVUFDSWdCLGVBQWUsSUFBSWIsWUFBSixDQUFpQlcsS0FBakIsRUFBd0JsQixJQUF4QixDQURuQjs7QUFHQSxhQUFPb0IsWUFBUDtBQUNEOzs7O0VBeEJ3QmQsVzs7QUEyQjNCZSxPQUFPQyxPQUFQLEdBQWlCZixZQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBHYWxsaW5hTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dCgwKTsgIC8vL1xyXG4gICAgXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCkge1xyXG4gICAgdmFyIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdzcGVjaWFsJyksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdXRpbC5yZWdFeHBQYXR0ZXJuKGtleXdvcmRTeW1ib2xzUmVnRXhwKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB1dGlsLnJlZ0V4cFBhdHRlcm4oc3BlY2lhbFN5bWJvbHNSZWdFeHApLFxyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4gKyAnfCcgKyBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBHYWxsaW5hTGV4ZXIocnVsZXMsIExpbmUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH0gIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlcjtcclxuIl19