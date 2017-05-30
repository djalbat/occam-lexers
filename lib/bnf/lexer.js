'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

  _createClass(BNFLexer, null, [{
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
          basicLexer = BNFLexer.fromgrammar(grammar);

      return basicLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

module.exports = BNFLexer;

BNFLexer.grammar = [{ "regularExpression": "\\/[^/]+\\/" }, { "noWhitespace": "<NO_WHITESPACE>" }, { "endOfLine": "<END_OF_LINE>" }, { "special": "::=|\\(|\\)|!|&|\\|" }, { "operator": "\\?|\\*|\\+" }, { "type": "\\[[^/]+\\]" }, { "name": "\\w+" }];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU3RyaW5nVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJCTkZMZXhlciIsImdyYW1tYXIiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImJhc2ljTGV4ZXIiLCJmcm9tZ3JhbW1hciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLGlCQUFSLENBRGQ7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxvQ0FBUixDQUhwQjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSx3Q0FBUixDQUp4Qjs7SUFNTUssUTs7Ozs7Ozs7Ozs7NENBQzJCO0FBQzdCLFVBQU1DLFVBQVVELFNBQVNDLE9BQXpCO0FBQUEsVUFDTUMsK0JBQStCTCxZQUFZTSxnQ0FBWixDQUE2Q0YsT0FBN0MsQ0FEckM7QUFBQSxVQUVNRyx3QkFBd0JGLDZCQUE2QkcsTUFBN0IsQ0FBb0MsQ0FDMURQLFlBQVlRLElBRDhDLEVBRTFEUCxnQkFBZ0JPLElBRjBDLENBQXBDLENBRjlCOztBQU9BLGFBQU9GLHFCQUFQO0FBQ0Q7OztnQ0FHa0JILE8sRUFBUztBQUMxQixVQUFNTSxRQUFRWCxNQUFNWSxXQUFOLENBQWtCUCxPQUFsQixDQUFkO0FBQUEsVUFDTVEsYUFBYSxJQUFJVCxRQUFKLENBQWFPLEtBQWIsRUFBb0JiLElBQXBCLENBRG5COztBQUdBLGFBQU9lLFVBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNUixVQUFVRCxTQUFTQyxPQUF6QjtBQUFBLFVBQ01RLGFBQWFULFNBQVNVLFdBQVQsQ0FBcUJULE9BQXJCLENBRG5COztBQUdBLGFBQU9RLFVBQVA7QUFDRDs7OztFQXpCb0JaLFc7O0FBNEJ2QmMsT0FBT0MsT0FBUCxHQUFpQlosUUFBakI7O0FBRUFBLFNBQVNDLE9BQVQsR0FBbUIsQ0FFakIsRUFBRSxxQkFBcUIsYUFBdkIsRUFGaUIsRUFJakIsRUFBRSxnQkFBZ0IsaUJBQWxCLEVBSmlCLEVBTWpCLEVBQUUsYUFBYSxlQUFmLEVBTmlCLEVBUWpCLEVBQUUsV0FBVyxxQkFBYixFQVJpQixFQVVqQixFQUFFLFlBQVksYUFBZCxFQVZpQixFQVlqQixFQUFFLFFBQVEsYUFBVixFQVppQixFQWNqQixFQUFFLFFBQVEsTUFBVixFQWRpQixDQUFuQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU3RyaW5nVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBCTkZMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IG5ldyBCTkZMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQk5GTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCTkZMZXhlci5mcm9tZ3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQk5GTGV4ZXI7XHJcblxyXG5CTkZMZXhlci5ncmFtbWFyID0gW1xyXG5cclxuICB7IFwicmVndWxhckV4cHJlc3Npb25cIjogXCJcXFxcL1teL10rXFxcXC9cIiB9LFxyXG5cclxuICB7IFwibm9XaGl0ZXNwYWNlXCI6IFwiPE5PX1dISVRFU1BBQ0U+XCIgfSxcclxuXHJcbiAgeyBcImVuZE9mTGluZVwiOiBcIjxFTkRfT0ZfTElORT5cIiB9LFxyXG5cclxuICB7IFwic3BlY2lhbFwiOiBcIjo6PXxcXFxcKHxcXFxcKXwhfCZ8XFxcXHxcIiB9LFxyXG5cclxuICB7IFwib3BlcmF0b3JcIjogXCJcXFxcP3xcXFxcKnxcXFxcK1wiIH0sXHJcblxyXG4gIHsgXCJ0eXBlXCI6IFwiXFxcXFtbXi9dK1xcXFxdXCIgfSxcclxuXHJcbiAgeyBcIm5hbWVcIjogXCJcXFxcdytcIiB9XHJcblxyXG5dO1xyXG4iXX0=