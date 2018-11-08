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
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      SignificantEndOfLineTokens.tokenise(tokensOrContents);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIlJ1bGUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJGbG9yZW5jZUxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlIiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiIsImN1c3RvbSIsImN1c3RvbUdyYW1tYXJFbnRyeSIsImN1c3RvbUdyYW1tYXJSdWxlIiwiZnJvbUVudHJ5IiwicnVsZXMiLCJhZGRSdWxlIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGdCQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLGlCQUFSLENBRmQ7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGlCQUFSLENBSHBCO0FBQUEsSUFJTUksNkJBQTZCSixRQUFRLHdDQUFSLENBSm5DOztJQU1NSyxhOzs7Ozs7Ozs7Ozt1Q0FDZUMsZ0IsRUFBa0I7QUFBRUYsaUNBQTJCRyxRQUEzQixDQUFvQ0QsZ0JBQXBDO0FBQXdEOzs7K0NBRXBFQSxnQixFQUFrQixDQUFFOzs7dURBRVpBLGdCLEVBQWtCLENBQUU7OztrQ0FFbEM7QUFBRSxhQUFPSCxZQUFZSyxXQUFaLENBQXdCSCxhQUF4QixDQUFQO0FBQWdEOzs7Z0NBRXBETixPLEVBQVM7QUFBRSxhQUFPSSxZQUFZTSxXQUFaLENBQXdCSixhQUF4QixFQUF1Q04sT0FBdkMsQ0FBUDtBQUF5RDs7OzZEQUV2Q1csb0MsRUFBc0M7QUFDcEYsVUFBTUMsZ0JBQWdCTixjQUFjTyxrREFBZCxDQUFpRWIsT0FBakUsRUFBMEVXLG9DQUExRSxDQUF0Qjs7QUFFQSxhQUFPQyxhQUFQO0FBQ0Q7Ozt1RUFFeURaLE8sRUFBU1csb0MsRUFBc0M7QUFDdkcsVUFBTUcsU0FBU0gsb0NBQWY7QUFBQSxVQUFxRDtBQUMvQ0ksMkJBQXFCO0FBQ25CRDtBQURtQixPQUQzQjtBQUFBLFVBSU1FLG9CQUFxQmQsS0FBS2UsU0FBTCxDQUFlRixrQkFBZixDQUozQjtBQUFBLFVBS01HLFFBQVFmLE1BQU1PLFdBQU4sQ0FBa0JWLE9BQWxCLENBTGQ7O0FBT0FrQixZQUFNQyxPQUFOLENBQWNILGlCQUFkOztBQUVBLFVBQU1KLGdCQUFnQixJQUFJTixhQUFKLENBQWtCWSxLQUFsQixDQUF0Qjs7QUFFQSxhQUFPTixhQUFQO0FBQ0Q7Ozs7RUE5QnlCUixXOztBQWlDNUJnQixPQUFPQyxNQUFQLENBQWNmLGFBQWQsRUFBNkI7QUFDM0JOO0FBRDJCLENBQTdCOztBQUlBc0IsT0FBT0MsT0FBUCxHQUFpQmpCLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZUVuZE9mTGluZXModG9rZW5zT3JDb250ZW50cykgeyBTaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy50b2tlbmlzZSh0b2tlbnNPckNvbnRlbnRzKTsgfVxyXG5cclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICB0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEZsb3JlbmNlTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhGbG9yZW5jZUxleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybihjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybik7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4oZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKSB7XHJcbiAgICBjb25zdCBjdXN0b20gPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4sIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckVudHJ5ID0ge1xyXG4gICAgICAgICAgICBjdXN0b21cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUnVsZSA9ICBSdWxlLmZyb21FbnRyeShjdXN0b21HcmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19