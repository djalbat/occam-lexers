'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    grammar = require('./grammar'),
    Rule = require('../common/rule'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer'),
    StringToken = require('../common/token/significant/string'),
    EndOfLineToken = require('../common/token/significant/endOfLine'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContent', this).call(this, content, firstLineIndex, context);

      return lines;
    }
  }], [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, EndOfLineToken.type, WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromCustomGrammars',
    value: function fromCustomGrammars(customGrammars) {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          customSignificantTokenType = 'custom',
          ///
      customGrammarsRegularExpressionPattern = regularExpressionPatternFromGrammars(customGrammars),
          customRule = CommonLexer.ruleFromSignificantTokenTypeAndRegularExpressionPattern(customSignificantTokenType, customGrammarsRegularExpressionPattern);

      rules.addRule(customRule);

      var florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var florenceLexer = FlorenceLexer.fromGrammar(grammar);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

FlorenceLexer.grammar = grammar;

function regularExpressionPatternFromGrammars(grammars) {
  var regularExpressionPattern = grammars.reduce(function (regularExpressionPattern, grammar) {
    if (regularExpressionPattern === null) {
      regularExpressionPattern = grammar;
    } else {
      regularExpressionPattern = grammar + '|' + regularExpressionPattern;
    }

    return regularExpressionPattern;
  }, null);

  return regularExpressionPattern;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImdyYW1tYXIiLCJSdWxlIiwiQ29udGV4dCIsIkNvbW1vbkxleGVyIiwiU3RyaW5nVG9rZW4iLCJFbmRPZkxpbmVUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiZmlyc3RMaW5lSW5kZXgiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGV4dCIsImxpbmVzIiwiZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiY29uY2F0IiwidHlwZSIsImN1c3RvbUdyYW1tYXJzIiwicnVsZXMiLCJydWxlc0Zyb21HcmFtbWFyIiwiY3VzdG9tU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJjdXN0b21HcmFtbWFyc1JlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybkZyb21HcmFtbWFycyIsImN1c3RvbVJ1bGUiLCJydWxlRnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiYWRkUnVsZSIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tR3JhbW1hciIsIm1vZHVsZSIsImV4cG9ydHMiLCJncmFtbWFycyIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInJlZHVjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxnQkFBUixDQUZiO0FBQUEsSUFHTUcsVUFBVUgsUUFBUSxtQkFBUixDQUhoQjtBQUFBLElBSU1JLGNBQWNKLFFBQVEsaUJBQVIsQ0FKcEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLG9DQUFSLENBTHBCO0FBQUEsSUFNTU0saUJBQWlCTixRQUFRLHVDQUFSLENBTnZCO0FBQUEsSUFPTU8sa0JBQWtCUCxRQUFRLHdDQUFSLENBUHhCOztJQVNNUSxhOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzNHLFVBQU1DLFVBQVUsSUFBSVgsT0FBSixDQUFZUSxrQkFBWixFQUFnQ0MscUJBQWhDLEVBQXVEQyxzQkFBdkQsQ0FBaEI7QUFBQSxVQUNNRSx1SUFBK0JOLE9BQS9CLEVBQXdDQyxjQUF4QyxFQUF3REksT0FBeEQsQ0FETjs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs0Q0FFOEI7QUFDN0IsVUFBTUMsK0JBQStCWixZQUFZYSxnQ0FBWixDQUE2Q2hCLE9BQTdDLENBQXJDO0FBQUEsVUFDTWlCLHdCQUF3QkYsNkJBQTZCRyxNQUE3QixDQUFvQyxDQUMxRGQsWUFBWWUsSUFEOEMsRUFFMURkLGVBQWVjLElBRjJDLEVBRzFEYixnQkFBZ0JhLElBSDBDLENBQXBDLENBRDlCOztBQU9BLGFBQU9GLHFCQUFQO0FBQ0Q7Ozt1Q0FFeUJHLGMsRUFBZ0I7QUFDeEMsVUFBTUMsUUFBUWxCLFlBQVltQixnQkFBWixDQUE2QnRCLE9BQTdCLENBQWQ7QUFBQSxVQUNNdUIsNkJBQTZCLFFBRG5DO0FBQUEsVUFDOEM7QUFDeENDLCtDQUF5Q0MscUNBQXFDTCxjQUFyQyxDQUYvQztBQUFBLFVBR01NLGFBQWN2QixZQUFZd0IsdURBQVosQ0FBb0VKLDBCQUFwRSxFQUFnR0Msc0NBQWhHLENBSHBCOztBQUtBSCxZQUFNTyxPQUFOLENBQWNGLFVBQWQ7O0FBRUEsVUFBTUcsZ0JBQWdCLElBQUl0QixhQUFKLENBQWtCYyxLQUFsQixFQUF5QnZCLElBQXpCLENBQXRCOztBQUVBLGFBQU8rQixhQUFQO0FBQ0Q7OztnQ0FFa0I3QixPLEVBQVM7QUFDMUIsVUFBTXFCLFFBQVFsQixZQUFZbUIsZ0JBQVosQ0FBNkJ0QixPQUE3QixDQUFkO0FBQUEsVUFDTTZCLGdCQUFnQixJQUFJdEIsYUFBSixDQUFrQmMsS0FBbEIsRUFBeUJ2QixJQUF6QixDQUR0Qjs7QUFHQSxhQUFPK0IsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGdCQUFnQnRCLGNBQWN1QixXQUFkLENBQTBCOUIsT0FBMUIsQ0FBdEI7O0FBRUEsYUFBTzZCLGFBQVA7QUFDRDs7OztFQTNDeUIxQixXOztBQThDNUI0QixPQUFPQyxPQUFQLEdBQWlCekIsYUFBakI7O0FBRUFBLGNBQWNQLE9BQWQsR0FBd0JBLE9BQXhCOztBQUVBLFNBQVN5QixvQ0FBVCxDQUE4Q1EsUUFBOUMsRUFBd0Q7QUFDdEQsTUFBTUMsMkJBQTJCRCxTQUFTRSxNQUFULENBQWdCLFVBQVNELHdCQUFULEVBQW1DbEMsT0FBbkMsRUFBNEM7QUFDM0YsUUFBSWtDLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQ0EsaUNBQTJCbEMsT0FBM0I7QUFDRCxLQUZELE1BRU87QUFDTGtDLGlDQUE4QmxDLE9BQTlCLFNBQXlDa0Msd0JBQXpDO0FBQ0Q7O0FBRUQsV0FBT0Esd0JBQVA7QUFDRCxHQVJnQyxFQVE5QixJQVI4QixDQUFqQzs7QUFVQSxTQUFPQSx3QkFBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZScpLFxyXG4gICAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi4vY29tbW9uL2NvbnRleHQnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU3RyaW5nVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgU3RyaW5nVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgRW5kT2ZMaW5lVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBjdXN0b21TaWduaWZpY2FudFRva2VuVHlwZSA9ICdjdXN0b20nLCAgLy8vXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyc1JlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybkZyb21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXHJcbiAgICAgICAgICBjdXN0b21SdWxlID0gIENvbW1vbkxleGVyLnJ1bGVGcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oY3VzdG9tU2lnbmlmaWNhbnRUb2tlblR5cGUsIGN1c3RvbUdyYW1tYXJzUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbVJ1bGUpO1xyXG5cclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG5cclxuRmxvcmVuY2VMZXhlci5ncmFtbWFyID0gZ3JhbW1hcjtcclxuXHJcbmZ1bmN0aW9uIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybkZyb21HcmFtbWFycyhncmFtbWFycykge1xyXG4gIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGdyYW1tYXJzLnJlZHVjZShmdW5jdGlvbihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGdyYW1tYXIpIHtcclxuICAgIGlmIChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPT09IG51bGwpIHtcclxuICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZ3JhbW1hcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGAke2dyYW1tYXJ9fCR7cmVndWxhckV4cHJlc3Npb25QYXR0ZXJufWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcclxuICB9LCBudWxsKTtcclxuXHJcbiAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcclxufVxyXG4iXX0=