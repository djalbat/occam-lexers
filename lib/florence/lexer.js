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
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
      var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,
          ///
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern; ///

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var significantTokenTypes = ['string'];

      return significantTokenTypes;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = Rules.fromGrammar(grammar),
          gallinaLexer = new FlorenceLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwidXRpbCIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJnYWxsaW5hTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsT0FBT0gsUUFBUSxTQUFSLENBSFg7QUFBQSxJQUlJSSxRQUFRSixRQUFRLGlCQUFSLENBSlo7QUFBQSxJQUtJSyxjQUFjTCxRQUFRLGlCQUFSLENBTGxCOztJQU9NTSxhOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlQLE9BQUosQ0FBWSxLQUFaLENBQXJCLENBRGlDLENBQ1M7O0FBRTFDLFVBQUlRLHVJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7bURBRThCO0FBQzdCLFVBQUlDLHVCQUF1QlAsS0FBS1Esa0JBQUwsQ0FBd0JULE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSVUsOEJBQThCRixxQkFBcUJHLE1BRHZEO0FBQUEsVUFDZ0U7QUFDNURDLHFDQUErQkYsMkJBRm5DLENBRDZCLENBR21DOztBQUVoRSxhQUFPRSw0QkFBUDtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQUlDLHdCQUF3QixDQUMxQixRQUQwQixDQUE1Qjs7QUFJQSxhQUFPQSxxQkFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlDLFFBQVFaLE1BQU1hLFdBQU4sQ0FBa0JmLE9BQWxCLENBQVo7QUFBQSxVQUNJZ0IsZUFBZSxJQUFJWixhQUFKLENBQWtCVSxLQUFsQixFQUF5QmpCLElBQXpCLENBRG5COztBQUdBLGFBQU9tQixZQUFQO0FBQ0Q7Ozs7RUE5QnlCYixXOztBQWtDNUJjLE9BQU9DLE9BQVAsR0FBaUJkLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChmYWxzZSk7ICAvLy9cclxuXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSB7XHJcbiAgICB2YXIga2V5d29yZFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAna2V5d29yZCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGtleXdvcmRTeW1ib2xzUmVnRXhwLnNvdXJjZSwgIC8vL1xyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuXHJcbiAgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFtcclxuICAgICAgJ3N0cmluZydcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19