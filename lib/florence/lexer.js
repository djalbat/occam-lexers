'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    grammar = require('./grammar'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContents',
    value: function linesFromContents(contents, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContents', this).call(this, contents, context);

      return lines;
    }
  }], [{
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes() {
      var significantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar);

      return significantTokenTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImdyYW1tYXIiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudHMiLCJsaW5lTnVtYmVyIiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRleHQiLCJsaW5lcyIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyIiwicnVsZXMiLCJydWxlc0Zyb21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxtQkFBUixDQUZkO0FBQUEsSUFHSUcsY0FBY0gsUUFBUSxpQkFBUixDQUhsQjs7SUFLTUksYTs7Ozs7Ozs7Ozs7c0NBQ2NDLFEsRUFBVUMsVSxFQUFZQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQ3pHLFVBQUlDLFVBQVUsSUFBSVIsT0FBSixDQUFZSSxVQUFaLEVBQXdCQyxrQkFBeEIsRUFBNENDLHFCQUE1QyxFQUFtRUMsc0JBQW5FLENBQWQ7QUFBQSxVQUNJRSx3SUFBZ0NOLFFBQWhDLEVBQTBDSyxPQUExQyxDQURKOztBQUdBLGFBQU9DLEtBQVA7QUFDRDs7OytDQUVpQztBQUNoQyxVQUFJQyx3QkFBd0JULFlBQVlVLGdDQUFaLENBQTZDWixPQUE3QyxDQUE1Qjs7QUFFQSxhQUFPVyxxQkFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlFLFFBQVFYLFlBQVlZLGdCQUFaLENBQTZCZCxPQUE3QixDQUFaO0FBQUEsVUFDSWUsZ0JBQWdCLElBQUlaLGFBQUosQ0FBa0JVLEtBQWxCLEVBQXlCZixJQUF6QixDQURwQjs7QUFHQSxhQUFPaUIsYUFBUDtBQUNEOzs7O0VBbkJ5QmIsVzs7QUFzQjVCYyxPQUFPQyxPQUFQLEdBQWlCZCxhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi4vY29tbW9uL2NvbnRleHQnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBsaW5lTnVtYmVyLCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dChsaW5lTnVtYmVyLCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXHJcbiAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=