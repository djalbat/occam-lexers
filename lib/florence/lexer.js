'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    FlorenceLine = require('../florence/line'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, null, [{
    key: 'fromCombinedCustomGrammarsLexicalPattern',
    value: function fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
      var custom = combinedCustomGrammarsLexicalPattern,
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

Object.assign(FlorenceLexer, {
  entries: entries
});

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGluZSIsIkNvbW1vbkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiIsImN1c3RvbSIsImN1c3RvbUdyYW1tYXJFbnRyeSIsImN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZUZyb21FbnRyeSIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsImFkZFJ1bGUiLCJmbG9yZW5jZUxleGVyIiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGlCQUFSLENBRnBCOztJQUlNRyxhOzs7Ozs7Ozs7Ozs2REFDNENDLG9DLEVBQXNDO0FBQ3BGLFVBQU1DLFNBQVNELG9DQUFmO0FBQUEsVUFBcUQ7QUFDL0NFLDJCQUFxQjtBQUNuQkQsZ0JBQVFBO0FBRFcsT0FEM0I7QUFBQSxVQUlNRSxvQkFBcUJMLFlBQVlNLGFBQVosQ0FBMEJGLGtCQUExQixDQUozQjtBQUFBLFVBS01HLFFBQVFQLFlBQVlRLGdCQUFaLENBQTZCWCxPQUE3QixDQUxkOztBQU9BVSxZQUFNRSxPQUFOLENBQWNKLGlCQUFkOztBQUVBLFVBQU1LLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCTSxLQUFsQixFQUF5QlIsWUFBekIsQ0FBdEI7O0FBRUEsYUFBT1csYUFBUDtBQUNEOzs7Z0NBRWtCYixPLEVBQVM7QUFDMUIsVUFBTVUsUUFBUVAsWUFBWVEsZ0JBQVosQ0FBNkJYLE9BQTdCLENBQWQ7QUFBQSxVQUNNYSxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQk0sS0FBbEIsRUFBeUJSLFlBQXpCLENBRHRCOztBQUdBLGFBQU9XLGFBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxnQkFBZ0JULGNBQWNVLFdBQWQsQ0FBMEJkLE9BQTFCLENBQXRCOztBQUVBLGFBQU9hLGFBQVA7QUFDRDs7OztFQTNCeUJWLFc7O0FBOEI1QlksT0FBT0MsTUFBUCxDQUFjWixhQUFkLEVBQTZCO0FBQzNCSixXQUFTQTtBQURrQixDQUE3Qjs7QUFJQWlCLE9BQU9DLE9BQVAsR0FBaUJkLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBGbG9yZW5jZUxpbmUgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9saW5lJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybikge1xyXG4gICAgY29uc3QgY3VzdG9tID0gY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuLCAvLy9cclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJFbnRyeSA9IHtcclxuICAgICAgICAgICAgY3VzdG9tOiBjdXN0b21cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUnVsZSA9ICBDb21tb25MZXhlci5ydWxlRnJvbUVudHJ5KGN1c3RvbUdyYW1tYXJFbnRyeSksXHJcbiAgICAgICAgICBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcnVsZXMuYWRkUnVsZShjdXN0b21HcmFtbWFyUnVsZSk7XHJcblxyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBGbG9yZW5jZUxpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgRmxvcmVuY2VMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19