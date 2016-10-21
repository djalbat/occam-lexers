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
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var significantTokenTypes = ['string', 'unassigned'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImdhbGxpbmFMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxXQUFSLENBRmQ7QUFBQSxJQUdJRyxRQUFRSCxRQUFRLGlCQUFSLENBSFo7QUFBQSxJQUlJSSxjQUFjSixRQUFRLGlCQUFSLENBSmxCOztJQU1NSyxhOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLGdCQUFVQSxXQUFXLElBQUlOLE9BQUosQ0FBWSxLQUFaLENBQXJCLENBRGlDLENBQ1M7O0FBRTFDLFVBQUlPLHVJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQUlDLHdCQUF3QixDQUMxQixRQUQwQixFQUUxQixZQUYwQixDQUE1Qjs7QUFLQSxhQUFPQSxxQkFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlDLFFBQVFQLE1BQU1RLFdBQU4sQ0FBa0JULE9BQWxCLENBQVo7QUFBQSxVQUNJVSxlQUFlLElBQUlQLGFBQUosQ0FBa0JLLEtBQWxCLEVBQXlCWCxJQUF6QixDQURuQjs7QUFHQSxhQUFPYSxZQUFQO0FBQ0Q7Ozs7RUF2QnlCUixXOztBQTJCNUJTLE9BQU9DLE9BQVAsR0FBaUJULGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KGZhbHNlKTsgIC8vL1xyXG5cclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFtcclxuICAgICAgJ3N0cmluZycsXHJcbiAgICAgICd1bmFzc2lnbmVkJ1xyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZ2FsbGluYUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=