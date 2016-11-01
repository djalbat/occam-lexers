'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
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
  }], [{
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
      return CommonLexer.terminalSymbolsRegExpPattern(grammar);
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      return CommonLexer.significantTokenTypes(grammar);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJydWxlcyIsInJ1bGVzRnJvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLGNBQWNILFFBQVEsaUJBQVIsQ0FIbEI7O0lBS01JLGE7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLE8sRUFBUztBQUNqQ0EsZ0JBQVVBLFdBQVcsSUFBSUwsT0FBSixDQUFZLEtBQVosQ0FBckIsQ0FEaUMsQ0FDUzs7QUFFMUMsVUFBSU0sdUlBQStCRixPQUEvQixFQUF3Q0MsT0FBeEMsQ0FBSjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7OzttREFFcUM7QUFBRSxhQUFPSixZQUFZSyw0QkFBWixDQUF5Q04sT0FBekMsQ0FBUDtBQUEyRDs7OzRDQUVwRTtBQUFFLGFBQU9DLFlBQVlNLHFCQUFaLENBQWtDUCxPQUFsQyxDQUFQO0FBQW9EOzs7a0NBRWhFO0FBQ25CLFVBQUlRLFFBQVFQLFlBQVlRLGdCQUFaLENBQTZCVCxPQUE3QixDQUFaO0FBQUEsVUFDSVUsZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JNLEtBQWxCLEVBQXlCWCxJQUF6QixDQURwQjs7QUFHQSxhQUFPYSxhQUFQO0FBQ0Q7Ozs7RUFsQnlCVCxXOztBQXFCNUJVLE9BQU9DLE9BQVAsR0FBaUJWLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IENvbnRleHQoZmFsc2UpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpIHsgcmV0dXJuIENvbW1vbkxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcygpIHsgcmV0dXJuIENvbW1vbkxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcyhncmFtbWFyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICB2YXIgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==