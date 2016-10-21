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
    key: 'terminalTypes',
    value: function terminalTypes() {
      var terminalTypes = ['string', 'include'];

      return terminalTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwidXRpbCIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInRlcm1pbmFsVHlwZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLE9BQU9ILFFBQVEsU0FBUixDQUhYO0FBQUEsSUFJSUksUUFBUUosUUFBUSxpQkFBUixDQUpaO0FBQUEsSUFLSUssY0FBY0wsUUFBUSxpQkFBUixDQUxsQjs7SUFPTU0sYTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJUCxPQUFKLENBQVksS0FBWixDQUFyQixDQURpQyxDQUNTOztBQUUxQyxVQUFJUSx1SUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O21EQUU4QjtBQUM3QixVQUFJQyx1QkFBdUJQLEtBQUtRLGtCQUFMLENBQXdCVCxPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lVLDhCQUE4QkYscUJBQXFCRyxNQUR2RDtBQUFBLFVBQ2dFO0FBQzVEQyxxQ0FBK0JGLDJCQUZuQyxDQUQ2QixDQUdtQzs7QUFFaEUsYUFBT0UsNEJBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSUMsZ0JBQWdCLENBQ2xCLFFBRGtCLEVBRWxCLFNBRmtCLENBQXBCOztBQUtBLGFBQU9BLGFBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFJQyxRQUFRWixNQUFNYSxXQUFOLENBQWtCZixPQUFsQixDQUFaO0FBQUEsVUFDSWdCLGVBQWUsSUFBSVosYUFBSixDQUFrQlUsS0FBbEIsRUFBeUJqQixJQUF6QixDQURuQjs7QUFHQSxhQUFPbUIsWUFBUDtBQUNEOzs7O0VBL0J5QmIsVzs7QUFtQzVCYyxPQUFPQyxPQUFQLEdBQWlCZCxhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoZmFsc2UpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCkge1xyXG4gICAgdmFyIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBrZXl3b3JkU3ltYm9sc1JlZ0V4cC5zb3VyY2UsICAvLy9cclxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0ga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsVHlwZXMoKSB7XHJcbiAgICB2YXIgdGVybWluYWxUeXBlcyA9IFtcclxuICAgICAgJ3N0cmluZycsXHJcbiAgICAgICdpbmNsdWRlJ1xyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxUeXBlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19