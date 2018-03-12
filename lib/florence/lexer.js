'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    Rule = require('../common/rule'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      SignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(FlorenceLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(FlorenceLexer, entries);
    }
  }, {
    key: 'fromCombinedCustomGrammarsLexicalPattern',
    value: function fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
      var custom = combinedCustomGrammarsLexicalPattern,
          ///
      customGrammarEntry = {
        custom: custom
      },
          customGrammarRule = Rule.fromEntry(customGrammarEntry),
          rules = Rules.fromEntries(entries);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

Object.assign(FlorenceLexer, {
  entries: entries
});

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIlJ1bGUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJGbG9yZW5jZUxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3MiLCJmcm9tTm90aGluZyIsImZyb21FbnRyaWVzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuIiwiY3VzdG9tIiwiY3VzdG9tR3JhbW1hckVudHJ5IiwiY3VzdG9tR3JhbW1hclJ1bGUiLCJmcm9tRW50cnkiLCJydWxlcyIsImFkZFJ1bGUiLCJmbG9yZW5jZUxleGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGdCQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLGlCQUFSLENBRmQ7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGlCQUFSLENBSHBCO0FBQUEsSUFJTUksNkJBQTZCSixRQUFRLHdDQUFSLENBSm5DOztJQU1NSyxhOzs7Ozs7Ozs7OzsyQ0FDbUJDLGdCLEVBQWtCO0FBQ3ZDRixpQ0FBMkJHLE9BQTNCLENBQW1DRCxnQkFBbkM7QUFDRDs7O21EQUU4QkEsZ0IsRUFBa0IsQ0FBRTs7O2tDQUU5QjtBQUFFLGFBQU9ILFlBQVlLLFdBQVosQ0FBd0JILGFBQXhCLENBQVA7QUFBZ0Q7OztnQ0FFcEROLE8sRUFBUztBQUFFLGFBQU9JLFlBQVlNLFdBQVosQ0FBd0JKLGFBQXhCLEVBQXVDTixPQUF2QyxDQUFQO0FBQXlEOzs7NkRBRXZDVyxvQyxFQUFzQztBQUNwRixVQUFNQyxTQUFTRCxvQ0FBZjtBQUFBLFVBQXFEO0FBQy9DRSwyQkFBcUI7QUFDbkJELGdCQUFRQTtBQURXLE9BRDNCO0FBQUEsVUFJTUUsb0JBQXFCWixLQUFLYSxTQUFMLENBQWVGLGtCQUFmLENBSjNCO0FBQUEsVUFLTUcsUUFBUWIsTUFBTU8sV0FBTixDQUFrQlYsT0FBbEIsQ0FMZDs7QUFPQWdCLFlBQU1DLE9BQU4sQ0FBY0gsaUJBQWQ7O0FBRUEsVUFBTUksZ0JBQWdCLElBQUlaLGFBQUosQ0FBa0JVLEtBQWxCLENBQXRCOztBQUVBLGFBQU9FLGFBQVA7QUFDRDs7OztFQXhCeUJkLFc7O0FBMkI1QmUsT0FBT0MsTUFBUCxDQUFjZCxhQUFkLEVBQTZCO0FBQzNCTixXQUFTQTtBQURrQixDQUE3Qjs7QUFJQXFCLE9BQU9DLE9BQVAsR0FBaUJoQixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgcHJvY2Vzc0VuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBTaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEZsb3JlbmNlTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhGbG9yZW5jZUxleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybihjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiwgLy8vXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hclJ1bGUgPSAgUnVsZS5mcm9tRW50cnkoY3VzdG9tR3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcnVsZXMuYWRkUnVsZShjdXN0b21HcmFtbWFyUnVsZSk7XHJcblxyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VMZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==