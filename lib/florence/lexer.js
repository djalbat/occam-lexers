'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
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
      var grammar = FlorenceLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, EndOfLineToken.type, WhitespaceToken.type]);

      return significantTokenTypes;
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
      var grammar = FlorenceLexer.grammar,
          florenceLexer = FlorenceLexer.fromGrammar(grammar);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

FlorenceLexer.grammar = [{ "special": ",|;|\\{|\\}|=|::|:|\\(|\\)|\\.\\.\\.|\\.\\." }, { "include": "^include$" }, { "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Variables|Variable|Metavariables|Metavariable|Constructors|Constructor|Type|Object|Definition|from|by|let|is|not|in|free|defined|undefined)$" }, { "unassigned": '^[\\u{21}-\\u{7E}\\u{A1}-\\u{FF}\\u{370}-\\u{3FF}\\u{2200}-\\u{22FF}\\u{2A00}-\\u{2AFF}\\u{2300}-\\u{23ff}\\u{1D400}-\\u{1D7FF}]+$' }];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJDb21tb25MZXhlciIsIlN0cmluZ1Rva2VuIiwiRW5kT2ZMaW5lVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRleHQiLCJsaW5lcyIsImdyYW1tYXIiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJydWxlc0Zyb21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZyb21HcmFtbWFyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxtQkFBUixDQURoQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLG9DQUFSLENBSHBCO0FBQUEsSUFJTUksaUJBQWlCSixRQUFRLHVDQUFSLENBSnZCO0FBQUEsSUFLTUssa0JBQWtCTCxRQUFRLHdDQUFSLENBTHhCOztJQU9NTSxhOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzNHLFVBQU1DLFVBQVUsSUFBSVgsT0FBSixDQUFZUSxrQkFBWixFQUFnQ0MscUJBQWhDLEVBQXVEQyxzQkFBdkQsQ0FBaEI7QUFBQSxVQUNNRSx1SUFBK0JOLE9BQS9CLEVBQXdDQyxjQUF4QyxFQUF3REksT0FBeEQsQ0FETjs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs0Q0FFOEI7QUFDN0IsVUFBTUMsVUFBVVIsY0FBY1EsT0FBOUI7QUFBQSxVQUNNQywrQkFBK0JiLFlBQVljLGdDQUFaLENBQTZDRixPQUE3QyxDQURyQztBQUFBLFVBRU1HLHdCQUF3QkYsNkJBQTZCRyxNQUE3QixDQUFvQyxDQUMxRGYsWUFBWWdCLElBRDhDLEVBRTFEZixlQUFlZSxJQUYyQyxFQUcxRGQsZ0JBQWdCYyxJQUgwQyxDQUFwQyxDQUY5Qjs7QUFRQSxhQUFPRixxQkFBUDtBQUNEOzs7Z0NBRWtCSCxPLEVBQVM7QUFDMUIsVUFBTU0sUUFBUWxCLFlBQVltQixnQkFBWixDQUE2QlAsT0FBN0IsQ0FBZDtBQUFBLFVBQ01RLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQmMsS0FBbEIsRUFBeUJyQixJQUF6QixDQUR0Qjs7QUFHQSxhQUFPdUIsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1SLFVBQVVSLGNBQWNRLE9BQTlCO0FBQUEsVUFDTVEsZ0JBQWdCaEIsY0FBY2lCLFdBQWQsQ0FBMEJULE9BQTFCLENBRHRCOztBQUdBLGFBQU9RLGFBQVA7QUFDRDs7OztFQWhDeUJwQixXOztBQW1DNUJzQixPQUFPQyxPQUFQLEdBQWlCbkIsYUFBakI7O0FBRUFBLGNBQWNRLE9BQWQsR0FBd0IsQ0FFdEIsRUFBRSxXQUFlLDZDQUFqQixFQUZzQixFQUl0QixFQUFFLFdBQWUsV0FBakIsRUFKc0IsRUFNdEIsRUFBRSxXQUFlLDBPQUFqQixFQU5zQixFQVF0QixFQUFFLGNBQWUsb0lBQWpCLEVBUnNCLENBQXhCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi4vY29tbW9uL2NvbnRleHQnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU3RyaW5nVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBGbG9yZW5jZUxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIEVuZE9mTGluZVRva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gRmxvcmVuY2VMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcblxyXG5GbG9yZW5jZUxleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJzcGVjaWFsXCIgICAgOiBcIix8O3xcXFxce3xcXFxcfXw9fDo6fDp8XFxcXCh8XFxcXCl8XFxcXC5cXFxcLlxcXFwufFxcXFwuXFxcXC5cIiB9LFxyXG5cclxuICB7IFwiaW5jbHVkZVwiICAgIDogXCJeaW5jbHVkZSRcIiB9LFxyXG5cclxuICB7IFwia2V5d29yZFwiICAgIDogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxUaGVufEhlbmNlfFZhcmlhYmxlc3xWYXJpYWJsZXxNZXRhdmFyaWFibGVzfE1ldGF2YXJpYWJsZXxDb25zdHJ1Y3RvcnN8Q29uc3RydWN0b3J8VHlwZXxPYmplY3R8RGVmaW5pdGlvbnxmcm9tfGJ5fGxldHxpc3xub3R8aW58ZnJlZXxkZWZpbmVkfHVuZGVmaW5lZCkkXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIiA6IFwiXltcXFxcdXsyMX0tXFxcXHV7N0V9XFxcXHV7QTF9LVxcXFx1e0ZGfVxcXFx1ezM3MH0tXFxcXHV7M0ZGfVxcXFx1ezIyMDB9LVxcXFx1ezIyRkZ9XFxcXHV7MkEwMH0tXFxcXHV7MkFGRn1cXFxcdXsyMzAwfS1cXFxcdXsyM2ZmfVxcXFx1ezFENDAwfS1cXFxcdXsxRDdGRn1dKyRcIiB9XHJcblxyXG5dO1xyXG4iXX0=