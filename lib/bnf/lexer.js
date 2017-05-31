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

BNFLexer.grammar = [{ "regularExpression": "\\/[^/]+\\/" }, { "noWhitespace": "<NO_WHITESPACE>" }, { "endOfLine": "<END_OF_LINE>" }, { "special": "::=|\\(|\\)|!|&|\\|" }, { "operator": "\\?|\\*|\\+" }, { "type": "\\[[^/]+\\]" }, { "name": "\\w+" }];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU3RyaW5nVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJCTkZMZXhlciIsImdyYW1tYXIiLCJjb250ZW50IiwibGluZXMiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImJhc2ljTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLGlCQUFSLENBRGQ7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxvQ0FBUixDQUhwQjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSx3Q0FBUixDQUp4Qjs7SUFNTUssUTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBUztBQUN4QixVQUFNQyxVQUFVRCxPQUFoQjtBQUFBLFVBQTBCO0FBQ3BCRSxtSUFBK0JELE9BQS9CLENBRE47O0FBR0EsYUFBT0MsS0FBUDtBQUNEOzs7NENBRThCO0FBQzdCLFVBQU1GLFVBQVVELFNBQVNDLE9BQXpCO0FBQUEsVUFDTUcsK0JBQStCUCxZQUFZUSxnQ0FBWixDQUE2Q0osT0FBN0MsQ0FEckM7QUFBQSxVQUVNSyx3QkFBd0JGLDZCQUE2QkcsTUFBN0IsQ0FBb0MsQ0FDMURULFlBQVlVLElBRDhDLEVBRTFEVCxnQkFBZ0JTLElBRjBDLENBQXBDLENBRjlCOztBQU9BLGFBQU9GLHFCQUFQO0FBQ0Q7OztnQ0FFa0JMLE8sRUFBUztBQUMxQixVQUFNUSxRQUFRYixNQUFNYyxXQUFOLENBQWtCVCxPQUFsQixDQUFkO0FBQUEsVUFDTVUsYUFBYSxJQUFJWCxRQUFKLENBQWFTLEtBQWIsRUFBb0JmLElBQXBCLENBRG5COztBQUdBLGFBQU9pQixVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTVYsVUFBVUQsU0FBU0MsT0FBekI7QUFBQSxVQUNNVSxhQUFhWCxTQUFTVSxXQUFULENBQXFCVCxPQUFyQixDQURuQjs7QUFHQSxhQUFPVSxVQUFQO0FBQ0Q7Ozs7RUEvQm9CZCxXOztBQWtDdkJlLE9BQU9DLE9BQVAsR0FBaUJiLFFBQWpCOztBQUVBQSxTQUFTQyxPQUFULEdBQW1CLENBRWpCLEVBQUUscUJBQXNCLGFBQXhCLEVBRmlCLEVBSWpCLEVBQUUsZ0JBQWlCLGlCQUFuQixFQUppQixFQU1qQixFQUFFLGFBQWMsZUFBaEIsRUFOaUIsRUFRakIsRUFBRSxXQUFZLHFCQUFkLEVBUmlCLEVBVWpCLEVBQUUsWUFBYSxhQUFmLEVBVmlCLEVBWWpCLEVBQUUsUUFBUyxhQUFYLEVBWmlCLEVBY2pCLEVBQUUsUUFBUyxNQUFYLEVBZGlCLENBQW5CIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdyYW1tYXIsICAvLy9cclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gbmV3IEJORkxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCTkZMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJORkxleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbkJORkxleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJyZWd1bGFyRXhwcmVzc2lvblwiIDogXCJcXFxcL1teL10rXFxcXC9cIiB9LFxyXG5cclxuICB7IFwibm9XaGl0ZXNwYWNlXCIgOiBcIjxOT19XSElURVNQQUNFPlwiIH0sXHJcblxyXG4gIHsgXCJlbmRPZkxpbmVcIiA6IFwiPEVORF9PRl9MSU5FPlwiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCIgOiBcIjo6PXxcXFxcKHxcXFxcKXwhfCZ8XFxcXHxcIiB9LFxyXG5cclxuICB7IFwib3BlcmF0b3JcIiA6IFwiXFxcXD98XFxcXCp8XFxcXCtcIiB9LFxyXG5cclxuICB7IFwidHlwZVwiIDogXCJcXFxcW1teL10rXFxcXF1cIiB9LFxyXG5cclxuICB7IFwibmFtZVwiIDogXCJcXFxcdytcIiB9XHJcblxyXG5dO1xyXG4iXX0=