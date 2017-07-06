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
    key: 'fromCustomGrammarsLexicalPattern',
    value: function fromCustomGrammarsLexicalPattern(customGrammarsLexicalPattern) {
      var custom = customGrammarsLexicalPattern,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGluZSIsIkNvbW1vbkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4iLCJjdXN0b20iLCJjdXN0b21HcmFtbWFyRW50cnkiLCJjdXN0b21HcmFtbWFyUnVsZSIsInJ1bGVGcm9tRW50cnkiLCJydWxlcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJhZGRSdWxlIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLFFBQVIsQ0FEckI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGlCQUFSLENBRnBCOztJQUlNRyxhOzs7Ozs7Ozs7OztxREFDb0NDLDRCLEVBQThCO0FBQ3BFLFVBQU1DLFNBQVNELDRCQUFmO0FBQUEsVUFBNkM7QUFDdkNFLDJCQUFxQjtBQUNuQkQsZ0JBQVFBO0FBRFcsT0FEM0I7QUFBQSxVQUlNRSxvQkFBcUJMLFlBQVlNLGFBQVosQ0FBMEJGLGtCQUExQixDQUozQjtBQUFBLFVBS01HLFFBQVFQLFlBQVlRLGdCQUFaLENBQTZCWCxPQUE3QixDQUxkOztBQU9BVSxZQUFNRSxPQUFOLENBQWNKLGlCQUFkOztBQUVBLFVBQU1LLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCTSxLQUFsQixFQUF5QlIsWUFBekIsQ0FBdEI7O0FBRUEsYUFBT1csYUFBUDtBQUNEOzs7Z0NBRWtCYixPLEVBQVM7QUFDMUIsVUFBTVUsUUFBUVAsWUFBWVEsZ0JBQVosQ0FBNkJYLE9BQTdCLENBQWQ7QUFBQSxVQUNNYSxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQk0sS0FBbEIsRUFBeUJSLFlBQXpCLENBRHRCOztBQUdBLGFBQU9XLGFBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxnQkFBZ0JULGNBQWNVLFdBQWQsQ0FBMEJkLE9BQTFCLENBQXRCOztBQUVBLGFBQU9hLGFBQVA7QUFDRDs7OztFQTNCeUJWLFc7O0FBOEI1QlksT0FBT0MsT0FBUCxHQUFpQlosYUFBakI7O0FBRUFBLGNBQWNKLE9BQWQsR0FBd0JBLE9BQXhCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBGbG9yZW5jZUxpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4sIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckVudHJ5ID0ge1xyXG4gICAgICAgICAgICBjdXN0b206IGN1c3RvbVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJSdWxlID0gIENvbW1vbkxleGVyLnJ1bGVGcm9tRW50cnkoY3VzdG9tR3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgIHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIEZsb3JlbmNlTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBGbG9yZW5jZUxpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcblxyXG5GbG9yZW5jZUxleGVyLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4iXX0=