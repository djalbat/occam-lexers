'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    FlorenceLine = require('./line'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, null, [{
    key: 'fromCombinedCustomGrammarLexicalPattern',
    value: function fromCombinedCustomGrammarLexicalPattern(combinedCustomGrammarLexicalPattern) {
      var custom = combinedCustomGrammarLexicalPattern,
          ///
      customGrammarEntry = {
        custom: custom
      },
          customGrammarRule = CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var florenceLexer = FlorenceLexer.fromEntries(entries);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

FlorenceLexer.entries = entries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGluZSIsIkNvbW1vbkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuIiwiY3VzdG9tIiwiY3VzdG9tR3JhbW1hckVudHJ5IiwiY3VzdG9tR3JhbW1hclJ1bGUiLCJydWxlRnJvbUVudHJ5IiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwiYWRkUnVsZSIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tRW50cmllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxRQUFSLENBRHJCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjs7SUFJTUcsYTs7Ozs7Ozs7Ozs7NERBQzJDQyxtQyxFQUFxQztBQUNsRixVQUFNQyxTQUFTRCxtQ0FBZjtBQUFBLFVBQW9EO0FBQzlDRSwyQkFBcUI7QUFDbkJELGdCQUFRQTtBQURXLE9BRDNCO0FBQUEsVUFJTUUsb0JBQXFCTCxZQUFZTSxhQUFaLENBQTBCRixrQkFBMUIsQ0FKM0I7QUFBQSxVQUtNRyxRQUFRUCxZQUFZUSxnQkFBWixDQUE2QlgsT0FBN0IsQ0FMZDs7QUFPQVUsWUFBTUUsT0FBTixDQUFjSixpQkFBZDs7QUFFQSxVQUFNSyxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQk0sS0FBbEIsRUFBeUJSLFlBQXpCLENBQXRCOztBQUVBLGFBQU9XLGFBQVA7QUFDRDs7O2dDQUVrQmIsTyxFQUFTO0FBQzFCLFVBQU1VLFFBQVFQLFlBQVlRLGdCQUFaLENBQTZCWCxPQUE3QixDQUFkO0FBQUEsVUFDTWEsZ0JBQWdCLElBQUlULGFBQUosQ0FBa0JNLEtBQWxCLEVBQXlCUixZQUF6QixDQUR0Qjs7QUFHQSxhQUFPVyxhQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsZ0JBQWdCVCxjQUFjVSxXQUFkLENBQTBCZCxPQUExQixDQUF0Qjs7QUFFQSxhQUFPYSxhQUFQO0FBQ0Q7Ozs7RUEzQnlCVixXOztBQThCNUJZLE9BQU9DLE9BQVAsR0FBaUJaLGFBQWpCOztBQUVBQSxjQUFjSixPQUFkLEdBQXdCQSxPQUF4QiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgRmxvcmVuY2VMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4oY29tYmluZWRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuLCAvLy9cclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJFbnRyeSA9IHtcclxuICAgICAgICAgICAgY3VzdG9tOiBjdXN0b21cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUnVsZSA9ICBDb21tb25MZXhlci5ydWxlRnJvbUVudHJ5KGN1c3RvbUdyYW1tYXJFbnRyeSksXHJcbiAgICAgICAgICBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcnVsZXMuYWRkUnVsZShjdXN0b21HcmFtbWFyUnVsZSk7XHJcblxyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBGbG9yZW5jZUxpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgRmxvcmVuY2VMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG5cclxuRmxvcmVuY2VMZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuIl19