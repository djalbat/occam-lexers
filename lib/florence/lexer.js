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
      var florenceLexer = FlorenceLexer.fromEntriesAndCombinedCustomGrammarsLexicalPattern(entries, combinedCustomGrammarsLexicalPattern);

      return florenceLexer;
    }
  }, {
    key: 'fromEntriesAndCombinedCustomGrammarsLexicalPattern',
    value: function fromEntriesAndCombinedCustomGrammarsLexicalPattern(entries, combinedCustomGrammarsLexicalPattern) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIlJ1bGUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJGbG9yZW5jZUxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3MiLCJmcm9tTm90aGluZyIsImZyb21FbnRyaWVzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuIiwiY3VzdG9tIiwiY3VzdG9tR3JhbW1hckVudHJ5IiwiY3VzdG9tR3JhbW1hclJ1bGUiLCJmcm9tRW50cnkiLCJydWxlcyIsImFkZFJ1bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsZ0JBQVIsQ0FEYjtBQUFBLElBRU1FLFFBQVFGLFFBQVEsaUJBQVIsQ0FGZDtBQUFBLElBR01HLGNBQWNILFFBQVEsaUJBQVIsQ0FIcEI7QUFBQSxJQUlNSSw2QkFBNkJKLFFBQVEsd0NBQVIsQ0FKbkM7O0lBTU1LLGE7Ozs7Ozs7Ozs7OzJDQUNtQkMsZ0IsRUFBa0I7QUFDdkNGLGlDQUEyQkcsT0FBM0IsQ0FBbUNELGdCQUFuQztBQUNEOzs7bURBRThCQSxnQixFQUFrQixDQUFFOzs7a0NBRTlCO0FBQUUsYUFBT0gsWUFBWUssV0FBWixDQUF3QkgsYUFBeEIsQ0FBUDtBQUFnRDs7O2dDQUVwRE4sTyxFQUFTO0FBQUUsYUFBT0ksWUFBWU0sV0FBWixDQUF3QkosYUFBeEIsRUFBdUNOLE9BQXZDLENBQVA7QUFBeUQ7Ozs2REFFdkNXLG9DLEVBQXNDO0FBQ3BGLFVBQU1DLGdCQUFnQk4sY0FBY08sa0RBQWQsQ0FBaUViLE9BQWpFLEVBQTBFVyxvQ0FBMUUsQ0FBdEI7O0FBRUEsYUFBT0MsYUFBUDtBQUNEOzs7dUVBRXlEWixPLEVBQVNXLG9DLEVBQXNDO0FBQ3ZHLFVBQU1HLFNBQVNILG9DQUFmO0FBQUEsVUFBcUQ7QUFDL0NJLDJCQUFxQjtBQUNuQkQ7QUFEbUIsT0FEM0I7QUFBQSxVQUlNRSxvQkFBcUJkLEtBQUtlLFNBQUwsQ0FBZUYsa0JBQWYsQ0FKM0I7QUFBQSxVQUtNRyxRQUFRZixNQUFNTyxXQUFOLENBQWtCVixPQUFsQixDQUxkOztBQU9Ba0IsWUFBTUMsT0FBTixDQUFjSCxpQkFBZDs7QUFFQSxVQUFNSixnQkFBZ0IsSUFBSU4sYUFBSixDQUFrQlksS0FBbEIsQ0FBdEI7O0FBRUEsYUFBT04sYUFBUDtBQUNEOzs7O0VBOUJ5QlIsVzs7QUFpQzVCZ0IsT0FBT0MsTUFBUCxDQUFjZixhQUFkLEVBQTZCO0FBQzNCTjtBQUQyQixDQUE3Qjs7QUFJQXNCLE9BQU9DLE9BQVAsR0FBaUJqQixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgcHJvY2Vzc0VuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBTaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1JlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEZsb3JlbmNlTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhGbG9yZW5jZUxleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybihjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybik7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4oZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKSB7XHJcbiAgICBjb25zdCBjdXN0b20gPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4sIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckVudHJ5ID0ge1xyXG4gICAgICAgICAgICBjdXN0b21cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUnVsZSA9ICBSdWxlLmZyb21FbnRyeShjdXN0b21HcmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19