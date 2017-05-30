'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
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
          significantTokenTypes = grammarSignificantTokenTypes.concat([WhitespaceToken.type]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiV2hpdGVzcGFjZVRva2VuIiwiQk5GTGV4ZXIiLCJncmFtbWFyIiwiZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiY29uY2F0IiwidHlwZSIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJiYXNpY0xleGVyIiwiZnJvbWdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxpQkFBUixDQURkO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSx3Q0FBUixDQUh4Qjs7SUFLTUksUTs7Ozs7Ozs7Ozs7NENBQzJCO0FBQzdCLFVBQU1DLFVBQVVELFNBQVNDLE9BQXpCO0FBQUEsVUFDTUMsK0JBQStCSixZQUFZSyxnQ0FBWixDQUE2Q0YsT0FBN0MsQ0FEckM7QUFBQSxVQUVNRyx3QkFBd0JGLDZCQUE2QkcsTUFBN0IsQ0FBb0MsQ0FDMUROLGdCQUFnQk8sSUFEMEMsQ0FBcEMsQ0FGOUI7O0FBTUEsYUFBT0YscUJBQVA7QUFDRDs7O2dDQUdrQkgsTyxFQUFTO0FBQzFCLFVBQU1NLFFBQVFWLE1BQU1XLFdBQU4sQ0FBa0JQLE9BQWxCLENBQWQ7QUFBQSxVQUNNUSxhQUFhLElBQUlULFFBQUosQ0FBYU8sS0FBYixFQUFvQlosSUFBcEIsQ0FEbkI7O0FBR0EsYUFBT2MsVUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1SLFVBQVVELFNBQVNDLE9BQXpCO0FBQUEsVUFDTVEsYUFBYVQsU0FBU1UsV0FBVCxDQUFxQlQsT0FBckIsQ0FEbkI7O0FBR0EsYUFBT1EsVUFBUDtBQUNEOzs7O0VBeEJvQlgsVzs7QUEyQnZCYSxPQUFPQyxPQUFQLEdBQWlCWixRQUFqQjs7QUFFQUEsU0FBU0MsT0FBVCxHQUFtQixDQUVqQixFQUFFLHFCQUFxQixhQUF2QixFQUZpQixFQUlqQixFQUFFLGdCQUFnQixpQkFBbEIsRUFKaUIsRUFNakIsRUFBRSxhQUFhLGVBQWYsRUFOaUIsRUFRakIsRUFBRSxXQUFXLHFCQUFiLEVBUmlCLEVBVWpCLEVBQUUsWUFBWSxhQUFkLEVBVmlCLEVBWWpCLEVBQUUsUUFBUSxhQUFWLEVBWmlCLEVBY2pCLEVBQUUsUUFBUSxNQUFWLEVBZGlCLENBQW5CIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCTkZMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcyA9IENvbW1vbkxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoW1xyXG4gICAgICAgICAgICBXaGl0ZXNwYWNlVG9rZW4udHlwZVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQk5GTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gQk5GTGV4ZXIuZnJvbWdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xyXG5cclxuQk5GTGV4ZXIuZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBcInJlZ3VsYXJFeHByZXNzaW9uXCI6IFwiXFxcXC9bXi9dK1xcXFwvXCIgfSxcclxuXHJcbiAgeyBcIm5vV2hpdGVzcGFjZVwiOiBcIjxOT19XSElURVNQQUNFPlwiIH0sXHJcblxyXG4gIHsgXCJlbmRPZkxpbmVcIjogXCI8RU5EX09GX0xJTkU+XCIgfSxcclxuXHJcbiAgeyBcInNwZWNpYWxcIjogXCI6Oj18XFxcXCh8XFxcXCl8IXwmfFxcXFx8XCIgfSxcclxuXHJcbiAgeyBcIm9wZXJhdG9yXCI6IFwiXFxcXD98XFxcXCp8XFxcXCtcIiB9LFxyXG5cclxuICB7IFwidHlwZVwiOiBcIlxcXFxbW14vXStcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJuYW1lXCI6IFwiXFxcXHcrXCIgfVxyXG5cclxuXTtcclxuIl19