'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    StringToken = require('../common/token/significant/string'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var content = grammar,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content);

      return lines;
    }
  }], [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammar = BNFLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BNFLexer(rules, Line);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var grammar = BNFLexer.grammar,
          basicLexer = BNFLexer.fromGrammar(grammar);

      return basicLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

module.exports = BNFLexer;

BNFLexer.grammar = [{ "regularExpression": "\\/[^/]+\\/" }, { "special": "::=|\\||<NO_WHITESPACE>|<END_OF_LINE>|\\(|\\)|\\?|\\*|\\+|\\-|\\." }, { "type": "\\[[^/]+\\]" }, { "name": "\\w+" }];

BNFLexer.specialSymbols = {
  END_OF_LINE: '<END_OF_LINE>',
  NO_WHITESPACE: '<NO_WHITESPACE>'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU3RyaW5nVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJCTkZMZXhlciIsImdyYW1tYXIiLCJjb250ZW50IiwibGluZXMiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImJhc2ljTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwic3BlY2lhbFN5bWJvbHMiLCJFTkRfT0ZfTElORSIsIk5PX1dISVRFU1BBQ0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLFFBQVFELFFBQVEsaUJBQVIsQ0FEZDtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLG9DQUFSLENBSHBCO0FBQUEsSUFJTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSnhCOztJQU1NSyxROzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTO0FBQ3hCLFVBQU1DLFVBQVVELE9BQWhCO0FBQUEsVUFBMEI7QUFDcEJFLG1JQUErQkQsT0FBL0IsQ0FETjs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs0Q0FFOEI7QUFDN0IsVUFBTUYsVUFBVUQsU0FBU0MsT0FBekI7QUFBQSxVQUNNRywrQkFBK0JQLFlBQVlRLGdDQUFaLENBQTZDSixPQUE3QyxDQURyQztBQUFBLFVBRU1LLHdCQUF3QkYsNkJBQTZCRyxNQUE3QixDQUFvQyxDQUMxRFQsWUFBWVUsSUFEOEMsRUFFMURULGdCQUFnQlMsSUFGMEMsQ0FBcEMsQ0FGOUI7O0FBT0EsYUFBT0YscUJBQVA7QUFDRDs7O2dDQUVrQkwsTyxFQUFTO0FBQzFCLFVBQU1RLFFBQVFiLE1BQU1jLFdBQU4sQ0FBa0JULE9BQWxCLENBQWQ7QUFBQSxVQUNNVSxhQUFhLElBQUlYLFFBQUosQ0FBYVMsS0FBYixFQUFvQmYsSUFBcEIsQ0FEbkI7O0FBR0EsYUFBT2lCLFVBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNVixVQUFVRCxTQUFTQyxPQUF6QjtBQUFBLFVBQ01VLGFBQWFYLFNBQVNVLFdBQVQsQ0FBcUJULE9BQXJCLENBRG5COztBQUdBLGFBQU9VLFVBQVA7QUFDRDs7OztFQS9Cb0JkLFc7O0FBa0N2QmUsT0FBT0MsT0FBUCxHQUFpQmIsUUFBakI7O0FBRUFBLFNBQVNDLE9BQVQsR0FBbUIsQ0FFakIsRUFBRSxxQkFBcUIsYUFBdkIsRUFGaUIsRUFJakIsRUFBRSxXQUFXLG1FQUFiLEVBSmlCLEVBTWpCLEVBQUUsUUFBUSxhQUFWLEVBTmlCLEVBUWpCLEVBQUUsUUFBUSxNQUFWLEVBUmlCLENBQW5COztBQVlBRCxTQUFTYyxjQUFULEdBQTBCO0FBQ3hCQyxlQUFjLGVBRFU7QUFFeEJDLGlCQUFnQjtBQUZRLENBQTFCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdyYW1tYXIsICAvLy9cclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gbmV3IEJORkxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCTkZMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJORkxleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbkJORkxleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJyZWd1bGFyRXhwcmVzc2lvblwiOiBcIlxcXFwvW14vXStcXFxcL1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiOjo9fFxcXFx8fDxOT19XSElURVNQQUNFPnw8RU5EX09GX0xJTkU+fFxcXFwofFxcXFwpfFxcXFw/fFxcXFwqfFxcXFwrfFxcXFwtfFxcXFwuXCIgfSxcclxuXHJcbiAgeyBcInR5cGVcIjogXCJcXFxcW1teL10rXFxcXF1cIiB9LFxyXG5cclxuICB7IFwibmFtZVwiOiBcIlxcXFx3K1wiIH1cclxuICAgIFxyXG5dO1xyXG5cclxuQk5GTGV4ZXIuc3BlY2lhbFN5bWJvbHMgPSB7XHJcbiAgRU5EX09GX0xJTkUgOiAnPEVORF9PRl9MSU5FPicsXHJcbiAgTk9fV0hJVEVTUEFDRSA6ICc8Tk9fV0hJVEVTUEFDRT4nXHJcbn07XHJcbiJdfQ==